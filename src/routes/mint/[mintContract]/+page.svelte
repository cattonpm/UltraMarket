<!-- /mint/[contractAddress]/+page.svelte -->
<script>
  import Nav from "../../Nav.svelte";
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import config from '$lib/config';
  import { ethers } from 'ethers';
  import { SeaDrop, SeaDropABI } from '$lib/contract.config.js';
  import {emitBetweenText} from '$lib/index.js';

  const contractAddress = $page.params.mintContract;
  const feeRecipient = "0x1222dC56aCD3864352Ea656DF1B8a52dE71c9BC4";
  let tokenId;
  // State variables
  let dropData = null;
  let loading = true;
  let error = '';
  let provider = null;
  let signer = null;
  let walletConnected = false;
  let userAddress = '';
  let mintedNFTs = [];
  
  // Mint states
  let allowlistMinting = false;
  let publicMinting = false;
  let allowlistError = '';
  let publicError = '';
  let proof = null;
  let userProofChecked = false;

  // Add after existing mint states
  let minted = false;
  let resultId = null;
  let nftPoints = {};
  let attributePoints = {};
  let totalAttributePoints = {};



async function showMintedModal(tokenId) {
  resultId = tokenId;
  resultId= resultId;
  minted = true;
  minted = minted;
}


  // Status calculations
  $: allowlistStatus = dropData ? getStatus(dropData.whitelistStart, dropData.whitelistEnd) : 'ended';
  $: publicStatus = dropData ? getStatus(dropData.publicStart, dropData.publicEnd) : 'ended';
  $: totalMinted = dropData ? (dropData.maxSupply - (dropData.maxSupply - getTotalMinted())) : 0;
  $: hasAllowlist = dropData && (dropData.maxTokenSupplyForStage > 0 || dropData.whitelistStart > 0);
  $: hasPublic = dropData && (dropData.publicStart > 0 || dropData.publicPrice !== '0');
  async function connectWallet() {
    try {
      error = '';
      
      if (!window.ethereum) {
        throw new Error('MetaMask not installed');
      }

      // Switch network
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: config.chainId }],
        });
      } catch (networkError) {
        if (networkError.code === 4902) {
          // Network has not been added, we will add here
          try {
            // Request to add the network
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: config.chainId,
                rpcUrls: [config.ethRpcUrl],
                chainName: config.chainName,
                nativeCurrency: {
                  name: config.nativeCurrency.name,
                  symbol: config.nativeCurrency.symbol,
                  decimals: 18
                },
                blockExplorerUrls: [config.blockExplorerUrls]
              }]
            });
            console.log('Network added to MetaMask');
          } catch (addError) {
            console.error('Failed to add the network:', addError);
            throw addError;
          }
        } else {
          console.error('Failed to switch to the network:', networkError);
          throw networkError;
        }
      }

      // Connect to wallet if not already connected
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

      if (accounts.length) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        userAddress = accounts[0];
        // ❌ Remove walletConnected = true from here
      }

      const { chainId } = await provider.getNetwork();

      // Only continue when network is correct
      if (chainId !== parseInt(config.chainId)) {
        throw new Error(`Network must be ${config.chainName}`);
      }

      // ✅ Add walletConnected = true here instead
      walletConnected = true;

    } catch (err) {
      error = err.message;
      walletConnected = false;
      provider = null;
      signer = null;
      userAddress = '';
    }
  }

  async function walletHelper() {
    if (!walletConnected) {
      await connectWallet();
    }
  }

  async function loadDropData() {
    try {
      loading = true;
      const response = await fetch(`${config.rpcUrl}/launchrpc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method: 'getCoreDropInfo',
          params: {
            contractAddress: contractAddress
          }
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        dropData = result.payload.drop;
        // Load some minted NFTs for display
        await loadMintedNFTs();
      } else {
        error = 'Failed to load collection data';
      }
    } catch (err) {
      error = 'Failed to load collection data: ' + err.message;
    } finally {
      loading = false;
    }
  }

  async function loadMintedNFTs() {
    try {
      // Load first 6 minted NFTs for display
      let nfts = [];
      const totalSupply = Math.min(6, totalMinted);
      
      for (let i = 1; i <= totalSupply; i++) {
        nfts.push({
          id: i,
          image: `${config.rpcUrl}/cdn/nft/${contractAddress}/${i}/350/350`
        });
      }
      nfts = nfts;
      mintedNFTs = nfts;
    } catch (err) {
      console.error('Failed to load minted NFTs:', err);
    }
  }

  async function getProof() {
    try {
      if (!userAddress) return;
      
      const response = await fetch(`${config.rpcUrl}/launchrpc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method: 'getProof',
          params: {
            contractAddress: contractAddress,
            userAddress: userAddress
          }
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        proof = result.payload.proof;
      }
      
      userProofChecked = true;
    } catch (err) {
      console.error('Failed to get proof:', err);
      userProofChecked = true;
    }
  }

  async function mintAllowlist() {
    try {
      allowlistMinting = true;
      allowlistError = '';

      if (!walletConnected) {
        await walletHelper();
      }

      if (!proof) {
        throw new Error('You are not on the allowlist');
      }

      const mintParams = {
        mintPrice: BigInt(dropData.whitelistPrice),
        maxTotalMintableByWallet: dropData.wlMaxTotalMintableByWallet,
        startTime: dropData.whitelistStart,
        endTime: dropData.whitelistEnd,
        dropStageIndex: 1,
        maxTokenSupplyForStage: dropData.maxTokenSupplyForStage,
        feeBps: 0,
        restrictFeeRecipients: true
      };

      console.log("", mintParams);
      console.log("", contractAddress,
        feeRecipient,
        userAddress,
        1,
        mintParams,
        proof,
        { value: ethers.BigNumber.from(mintParams.mintPrice) })

      const seaDropContract = new ethers.Contract(SeaDrop, SeaDropABI, signer);
      const tx = await seaDropContract.mintAllowList(
        contractAddress,
        feeRecipient,
        userAddress,
        1,
        mintParams,
        proof,
        { value: ethers.BigNumber.from(mintParams.mintPrice) }
      );

      const receipt = await tx.wait();
      const transferEvent = receipt.events[0];
      tokenId = parseInt(transferEvent.topics[3], 16).toString();

      await showMintedModal(tokenId);
      
    } catch (err) {
      allowlistError = err.message || 'Mint failed';
    } finally {
      allowlistMinting = false;
    }
  }

  async function mintPublic() {
    try {
      publicMinting = true;
      publicError = '';

      if (!walletConnected) {
        await walletHelper();
      }

      const seaDropContract = new ethers.Contract(SeaDrop, SeaDropABI, signer);
      const tx = await seaDropContract.mintPublic(
        contractAddress,
        feeRecipient,
        userAddress,
        1,
        { value: ethers.BigNumber.from(dropData.publicPrice) }
      );

      const receipt = await tx.wait();
      const transferEvent = receipt.events[0];
      tokenId = parseInt(transferEvent.topics[3]).toString();

      await showMintedModal(tokenId);

   
      
    } catch (err) {
      publicError = err.message || 'Mint failed';
    } finally {
      publicMinting = false;
    }
  }

  function getStatus(startTime, endTime) {
    const now = Math.floor(Date.now() / 1000);
    if (now < startTime) return 'not-started';
    if (now >= startTime && now <= endTime) return 'active';
    return 'ended';
  }

  function getStatusText(status) {
    switch (status) {
      case 'not-started': return 'Not Started';
      case 'active': return 'Live';
      case 'ended': return 'Ended';
      default: return 'Ended';
    }
  }

  function getStatusColor(status) {
    switch (status) {
      case 'not-started': return 'text-yellow';
      case 'active': return 'text-green';
      case 'ended': return 'text-lightGray';
      default: return 'text-lightGray';
    }
  }

  function getTotalMinted() {
    // This would need to be fetched from contract or API
    // For now, using placeholder logic
    return 0;
  }

  function formatPrice(wei) {
    if (!wei || wei === '0') return '0';
    return ethers.utils.formatEther(wei);
  }


  onMount(() => {
    loadDropData();
    
    // Check if wallet is already connected (same approach as nav bar)
    if (window.ethereum) {
      try {
        // Don't create new const, use the existing let variables
        provider = new ethers.providers.Web3Provider(window.ethereum);
        
        (async () => {
          try {
            signer = provider.getSigner();
            const address = await signer.getAddress();
            
            // Check if we're on the correct network
            const { chainId } = await provider.getNetwork();
            if (chainId !== parseInt(config.chainId)) {
              // Wrong network, don't mark as connected
              walletConnected = false;
              return;
            }
            
            // If we successfully get an address and correct network, wallet is connected
            userAddress = address;
            walletConnected = true;
            
            // Get proof for allowlist if user is connected
            if (!userProofChecked) {
              await getProof();
            }
          } catch (e) {
            // User not connected or rejected connection
            walletConnected = false;
            provider = null;
            signer = null;
          }
        })();
      } catch (e) {
        walletConnected = false;
        provider = null;
        signer = null;
      }
    }
  });
</script>

<div class="min-h-screen bg-launchpadDarkLight">
  <Nav/>
  {#if loading}
    <div class="flex items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-button"></div>
    </div>
  {:else if error}
    <div class="flex items-center justify-center min-h-screen">
      <div class="text-red-400 text-center">
        <p class="text-xl mb-4">Error loading collection</p>
        <p class="text-sm">{error}</p>
        <button 
          on:click={loadDropData}
          class="mt-4 bg-button hover:bg-buttonHover text-white px-6 py-2 rounded-full"
        >
          Retry
        </button>
      </div>
    </div>
  {:else if dropData}
    <!-- Collection Banner -->
    <div class="relative h-64 w-full overflow-hidden">
      <img 
        src={`${config.rpcUrl}/banner/${contractAddress}`}
        alt="Collection banner"
        class="w-full h-full object-cover"

      />
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>

    <div class="container mx-auto px-4 -mt-16 relative z-10">
      <!-- Global Error Display -->
      {#if error}
        <div class="mb-6 p-4 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
          <div class="flex items-center justify-between">
            <p class="text-red-400">{error}</p>
            <button 
              on:click={() => error = ''}
              class="text-red-400 hover:text-red-300 ml-4"
            >
              ×
            </button>
          </div>
        </div>
      {/if}

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Main Content -->
        <div class="flex-1">
          <!-- Collection Info -->
          <div class="flex items-center gap-4 mb-8 ">
            <img 
              src={`${config.rpcUrl}/logo/${contractAddress}`}
              alt="Collection avatar"
              class="w-20 h-20 rounded-full border-4 border-launchpadDarkMedium"

            />
            <div>
              <h1 class="text-white text-2xl font-bold">{dropData.name}</h1>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-green">●</span>
                <span class={getStatusColor(allowlistStatus === 'active' || publicStatus === 'active' ? 'active' : 'ended')}>
                  {allowlistStatus === 'active' || publicStatus === 'active' ? 'Live' : 'Ended'}
                </span>
              </div>
            </div>
          </div>

          <!-- About Section -->
          <div class="bg-launchpadDarkMedium rounded-lg p-6 mb-6">
            <h2 class="text-white text-xl font-bold mb-4">About</h2>
            <div class="flex flex-col gap-1 text-sm">

              <div>
                <span class="text-lightGray">Total:</span>
                <span class="text-white ml-2">{dropData.maxSupply}</span>
              </div>
              <div>
                <span class="text-lightGray">Contract:</span>
                <button class="text-white ml-2 underline hover:text-button" on:click={()=>{window.open(`${config.blockExplorerUrls}/address/${contractAddress}`, "_blank")}}>
                  {emitBetweenText(dropData.contractAddress,10)}
                </button>
              </div>
            </div>
          </div>

          <!-- Allowlist Mint Section -->
          {#if dropData.whitelistPrice !== '0' || dropData.maxTokenSupplyForStage > 0}
            <div class="bg-launchpadDarkMedium rounded-lg p-6 mb-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-button text-lg font-semibold">Whitelist Mint</h3>
                <span class={`text-sm font-medium ${getStatusColor(allowlistStatus)}`}>
                  {getStatusText(allowlistStatus)}
                </span>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p class="text-lightGray text-sm">Price</p>
                  <div class="flex items-center gap-2">
                    <div class="w-4 h-4 bg-button rounded-full"></div>
                    <span class="text-white">{formatPrice(dropData.whitelistPrice)}</span>
                  </div>
                </div>

                <div>
                  <p class="text-lightGray text-sm">Total</p>
                  <p class="text-white">{dropData.maxTokenSupplyForStage}</p>
                </div>
                <div>
                  <p class="text-lightGray text-sm">Max per wallet</p>
                  <p class="text-white">{dropData.wlMaxTotalMintableByWallet}</p>
                </div>
                <div>
                  <p class="text-lightGray text-sm">Your slot</p>
                  <p class="text-white">{proof ? dropData.wlMaxTotalMintableByWallet : 0}</p>
                </div>
              </div>

              {#if allowlistError}
                <div class="mb-4 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
                  <p class="text-red-400 text-sm">{allowlistError}</p>
                </div>
              {/if}

              <button 
                on:click={mintAllowlist}
                disabled={allowlistStatus !== 'active' || allowlistMinting || !proof}
                class="w-full bg-button hover:bg-buttonHover disabled:bg-darkGray disabled:cursor-not-allowed text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                {#if allowlistMinting}
                  <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Minting...
                {:else if !walletConnected}
                  Connect Wallet
                {:else if !proof}
                  Not Eligible
                {:else if allowlistStatus === 'not-started'}
                  Not Started
                {:else if allowlistStatus === 'ended'}
                  Ended
                {:else}
                  Mint
                {/if}
              </button>
            </div>
          {/if}


          <!-- Public Mint Section -->

            <div class="bg-launchpadDarkMedium rounded-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-button text-lg font-semibold">Public Mint (FCFS)</h3>
                <span class={`text-sm font-medium ${getStatusColor(publicStatus)}`}>
                  {getStatusText(publicStatus)}
                </span>
              </div>

              <div class="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p class="text-lightGray text-sm">Price</p>
                  <div class="flex items-center gap-2">
                    <div class="w-4 h-4 bg-button rounded-full"></div>
                    <span class="text-white">{formatPrice(dropData.publicPrice)}</span>
                  </div>
                </div>
                
                <div>
                  <p class="text-lightGray text-sm">Total</p>
                  <p class="text-white">{dropData.maxSupply}</p>
                </div>

                <div>
                  <p class="text-lightGray text-sm">Max per wallet</p>
                  <p class="text-white">{dropData.publicMaxTotalMintableByWallet}</p>
                </div>
              </div>

              {#if publicError}
                <div class="mb-4 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
                  <p class="text-red-400 text-sm">{publicError}</p>
                </div>
              {/if}

              <button 
                on:click={mintPublic}
                disabled={publicStatus !== 'active' || publicMinting}
                class="w-full bg-button hover:bg-buttonHover disabled:bg-darkGray disabled:cursor-not-allowed text-white font-semibold py-3 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                {#if publicMinting}
                  <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Minting...
                {:else if !walletConnected}
                  Connect Wallet
                {:else if publicStatus === 'not-started'}
                  Not Started
                {:else if publicStatus === 'ended'}
                  Ended
                {:else}
                  Mint
                {/if}
              </button>
            </div>
  
        </div>

          <!-- Mint Images Sidebar -->
          <div class="flex flex-col rounded-md overflow-hidden">
              <div class="relative self-center flex flex-col w-full overflow-hidden max-w-[480px] max-h-[480px] lg:min-w-[480px] lg:min-h-[480px]">
                  <!--<img src={`${config.rpcUrl}/mpimage/${contractAddress}`} class="object-contain max-h-[480px]  max-w-[480px] lg:min-w-[480px] lg:min-h-[480px]" alt="mint images"/>-->
              </div>
          </div>
      </div>
    </div>
  {/if}

  {#if minted}
  <div class="fixed font-semibold flex flex-col justify-center items-center inset-0 text-white bg-black shadow-md bg-opacity-90 z-30"   >
    <div class="flex flex-col pt-4 pb-8 px-6 bg-darkCard rounded-md max-w-[850px] overflow-hidden">
      <button class="self-end" on:click={() => { minted = false; location.reload(); }}>
        <svg class="w-5 h-5 text-lightGray hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="grid md:grid-cols-2 grid-cols-1 gap-[30px] h-fit rounded-md mt-[10px]">
        <div class="flex flex-col">
          <div class="flex justify-center parent h-fit top-0 col-span-1 flex items-start">
            <div class="flex justify-center overflow-hidden rounded-md max-h-[400px] max-w-[400px] ">
              <img 
                src={`${config.rpcUrl}/cdn/nft/${contractAddress}/${resultId}/800/800`}
                class="object-contain max-h-[400px] max-w-[400px] min-h-[400px] min-w-[400px] "
                alt="your minted NFT"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col col-span-1 gap-[10px] text-sm max-h-[350px]">
          <span class="text-3xl font-bold text-button">
            {dropData?.name} #{resultId}
          </span>
          <div class="flex justify-between mt-[5px] text-md">
            <div class="flex font-semibold items-center">
              <span class="text-darkGray">from </span>
              <button on:click={() => { goto(`../../collections/${contractAddress}`); }} class="pl-2 pr-1 text-button">{dropData?.name}</button>
              <svg class="w-4 h-4 text-green ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div class="flex flex-col text-sm pl-[20px] pt-[10px] pb-[25px] font-semibold gap-[20px] mt-[5px] rounded-lg">
            {#if nftPoints[resultId]}
              <span class="text-sm font-normal font-semibold">
                <span class="text-darkGray">Rarity Score:80</span>
                <span>{nftPoints[resultId] || "Loading"}</span>
              </span>
            {/if}

          </div>
          <span class="text-md font-semibold text-darkGray mt-[20px]">Information</span>
          <div class=" flex flex-col border border-white pl-[20px] pr-[25px] pt-[10px] pb-[25px] font-semibold gap-[10px] rounded-lg">
            <div class="flex justify-between">
              <span class="text-darkGray font-medium">Blockchain</span>
              <span>{config.chainName}</span>
            </div>
          </div>
          <button class="w-full flex py-2 my-4 justify-center text-xl bg-button rounded-md hover:bg-buttonHover"
          on:click={()=>{goto(`/items/${contractAddress}/${resultId}`)}}>
            Visit
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
</div>