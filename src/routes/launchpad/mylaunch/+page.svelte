<!-- MyCollection.svelte -->
<script>
  import { onMount } from 'svelte';

  import config from '$lib/config'; 
  import { ethers } from "ethers";
  import { ERC721SeaDropbytecode, ERC721SeaDropabi, SeaDrop } from "$lib/contract.config.js";
  import Loading from "$lib/Loading.svelte";
  import { goto } from '$app/navigation';
  import Nav from "../../Nav.svelte";

  export let collections = [];
  
  export let onCreateNewCollection = () => {};
  export let onConfigureCollection = () => {};
  let draft;

async function handleSave1(contract) {
        const response = await fetch(`${config.rpcUrl}/launchrpc`, {
          method: "POST",
          body: JSON.stringify({
            method: "configureTemBasicDrop",
            params: {
              contractAddress:contract
            }
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {

        }
}

  // Modal state
  let showCreateModal = false;
  let contractData = {
    collectionName: '',
    tokenSymbol: ''
  };

  let deploymentLoading = false;
  let generalError = false;
  let generalErrorValue = '';


  async function createSeadrop(name, symbol) {
    deploymentLoading = true;
    generalError = false;
    generalErrorValue = '';
    try {
      if (!name || !symbol) {
        deploymentLoading = false;
        generalError = true;
        generalErrorValue = "Collection name and token symbol are required";
        return;
      }

      if (!window.ethereum) {
        deploymentLoading = false;
        generalError = true;
        generalErrorValue = "Please install MetaMask to continue";
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const allowedSeaDrop = [SeaDrop];
      
      const contractFactory = new ethers.ContractFactory(
        ERC721SeaDropabi,
        ERC721SeaDropbytecode,
        signer
      );

      const contract = await contractFactory.deploy(name, symbol, allowedSeaDrop);
      
      // Step 2: Send tx hash to backend
      try {
        await fetch(`${config.rpcUrl}/launchrpc`, {
          method: "POST",
          body: JSON.stringify({
            method: "doneSignCreateDrop",
            params: {
              txhash: contract.deployTransaction.hash,
              name: name,
              symbol: symbol
            }
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        console.error('Error notifying backend:', error);
      }
      console.log(contract.deployTransaction.hash, "hash")

      // Step 3: Wait for deployment
      try {
        await contract.deployed();
        // Get contract address and call handleSave1
         draft = contract.address;

        
      } catch (error) {
        deploymentLoading = false;
        generalError = true;
        generalErrorValue = "Contract deployment failed: " + (error.message || "Unknown error");
        return;
      }

      // Step 4: Finalize
      try {
        const finalResponse = await fetch(`${config.rpcUrl}/launchrpc`, {
          method: "POST",
          body: JSON.stringify({
            method: "finalizeCreateDrop",
            params: {
              txhash: contract.deployTransaction.hash
            }
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!finalResponse.ok) {
          const responseBody = await finalResponse.json();
          deploymentLoading = false;
          generalError = true;
          
          generalErrorValue = "Failed to finalize contract creation";
          return;
        }
        await handleSave1(draft);
        deploymentLoading = false;
        closeCreateModal();
        loadCollections();
        
      } catch (error) {
        deploymentLoading = false;
        generalError = true;
        generalErrorValue = "Failed to finalize: " + (error.message || "Unknown error");
      }

    } catch (error) {
      deploymentLoading = false;
      generalError = true;
      generalErrorValue = "Deployment failed: " + (error.message || "Unknown error");
    }
  }

  async function loadCollections() {
    if (!window.ethereum) return;
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const deployerAddress = await signer.getAddress();

    const response = await fetch(`${config.rpcUrl}/launchrpc`, {
      method: "POST",
      body: JSON.stringify({
        method: "getAllCoreDropInfo",
        params: {
          deployer: deployerAddress
        }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();
    console.log(result, "resultresult")
    if (result.success && result.payload.drops) {
      collections = result.payload.drops.map(drop => ({
        name: drop.name,
        contractAddress: drop.contractAddress,
        status: drop.status,
        avatar: null
      }));
    }
  }

  onMount(() => {
    loadCollections();
  });

  function openCreateModal() {
    showCreateModal = true;
  }

  function closeCreateModal() {
    showCreateModal = false;
    // Reset form data
    contractData = {
      collectionName: '',
      tokenSymbol: ''
    };
    // Reload collections
    loadCollections();
  }

  function handleContinue() {
    createSeadrop(contractData.collectionName, contractData.tokenSymbol);
  }

</script>
<div class="bg-black">
  <Nav/>
</div>
<div class="min-h-screen bg-launchpadDarkLight p-8">

  <div class="max-w-3xl mx-auto">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8 flex-wrap mt-1">
      <h1 class="text-white md:text-3xl text-2xl font-bold">My collection</h1>
      <button 
        on:click={openCreateModal}
        class="flex justify-center items-center md:text-xl md:px-2 md:py-2 px-1 py-1
        bg-gradient-to-b from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 
        text-white font-semibold rounded-lg border-1 
        border-amber-300 shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        Launch new collection
      </button>
    </div>

    <!-- Collections List -->
    <div class="space-y-4">
      {#if collections?.length > 0}
        {#each collections as collection}
          <div class="bg-launchpadDarkMedium rounded-lg p-6 flex items-center gap-6">

            <!-- Collection Info -->
            <div class="flex-1">
              <h3 class="text-white text-lg font-semibold mb-1">{collection.name}</h3>
              <p class="text-white text-sm">{collection.contractAddress}</p>
            </div>
            
            <!-- Status -->
            <div class="flex-shrink-0">
              {#if collection.status !== 'done'}
                <button 
                  on:click={()=>{goto(`./create/${collection.contractAddress}`)}}
                  class="text-white hover:text-lightGray transition-colors underline"
                >
                  Configure
                </button>
              {:else if collection.status === 'done'}
              <div class="flex flex-col gap-1">
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-green rounded-full"></div>
                    <span class="text-green font-medium">Live</span>
                </div>
                <button class="text-white text-sm underline hover:text-button"
                on:click={()=>{goto(`../mint/${collection.contractAddress}`)}}>
                  Visit
                </button>
              </div>
                            
              {/if}
            </div>
          </div>
        {/each}
      {:else}
          <div class="flex flex-col justify-center items-center gap-4 text-white w-full sm:h-[350px] h-[300px] bg-launchpadDarkMedium rounded-md shadow-md px-2">
            <span class="md:text-base text-sm">
              Look likes you have not launched any NFT collection yet
            </span>
            <button on:click={openCreateModal}>
              <img class="shrinkSm sm:w-[150px] sm:h-[150px] h-[100px] border border-button rounded-full" src="/icons/launchCollection.webp" alt="launch button"/>
            </button>
          </div>
      {/if}
    </div>
  </div>
</div>

<!-- Create Collection Modal -->
{#if showCreateModal}
  <div class="fixed inset-0 bg-launchpadDarkLight z-50">
    <!-- Close Button -->
    <button 
      on:click={closeCreateModal}
      class="absolute top-8 right-8 text-lightGray hover:text-white transition-colors z-10"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Modal Content -->
    <div class="flex items-center justify-center min-h-screen p-8">
      <div class="max-w-xl w-full">
        <h1 class="text-white text-3xl font-bold mb-12 text-center">Create your NFT Contract</h1>
        
        <div class="space-y-8">
          <!-- Collection Name -->
          <div>
            <label class="block text-white text-lg mb-4">Collection name</label>
            <input 
              type="text" 
              placeholder="Enter NFT collection name"
              bind:value={contractData.collectionName}
              class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-4 text-white placeholder-lightStone focus:outline-none focus:border-button text-lg"
            />
          </div>

          <!-- Token Symbol -->
          <div>
            <label class="block text-white text-lg mb-4">Token symbol</label>
            <input 
              type="text" 
              placeholder="Enter token symbol"
              bind:value={contractData.tokenSymbol}
              class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-4 text-white placeholder-lightStone focus:outline-none focus:border-button text-lg"
            />
          </div>
        </div>

        <!-- Error Display -->
        {#if generalError}
          <div class="mb-4 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
            <p class="text-red-400 text-sm">{generalErrorValue}</p>
          </div>
        {/if}

        <!-- Continue Button -->
        <div class="flex justify-end mt-16">
          <button 
            on:click={handleContinue}
            disabled={deploymentLoading}
            class="bg-button hover:bg-buttonHover text-white font-semibold px-12 py-3 rounded-full transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
          >
            {#if deploymentLoading}
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Deploying Contract...
            {:else}
              Continue
            {/if}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}
{#if deploymentLoading}
  <div class="z-50">
      <Loading/>
  </div>
{/if}