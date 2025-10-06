<!-- CollectionCreatorLayout.svelte -->
<script>
  import Nav from "../../../Nav.svelte";

  import { onMount } from 'svelte';
  import { ethers } from "ethers";
  import { page } from '$app/stores';
  import config from '$lib/config'; 
  import Sidebar from './Sidebar.svelte';
  import ConfigureCollection from './ConfigureCollection.svelte';
  import CreateContract from './CreateContract.svelte';
  import UploadMedia from './UploadMedia.svelte';
  import CreatorFees from './CreatorFees.svelte';
  import VisualizeMintPage from './VisualizeMintPage.svelte';
  import { parseEther } from 'ethers/lib/utils';
  import { ERC721SeaDropabi, SeaDrop } from "$lib/contract.config.js";
  import { goto } from "$app/navigation";

  let doneLoading = false;
  let doneError = false;
  let doneErrorValue = '';

  let uploadLoading = false;
  let uploadSuccess = false;
  let uploadError = false;
  let uploadErrorValue = '';
  const contractAddress = $page.params.collection;

  let showDoneButton = false;
  let collectionStatus = null;

  let visualizeData = {
    bannerFile: null,
    logoFile: null,
    bannerKey: null,
    logoKey: null,
    bannerPreview: null,
    logoPreview: null
  };

  // Function to call getAllCoreDropInfo API
  async function checkCollectionStatus() {
    try {
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
      console.log("result", result)
      if (result.success && result.payload.drops) {
        // Find current collection
        const currentCollection = result.payload.drops.find(
          drop => drop.contractAddress.toLowerCase() === contractAddress.toLowerCase()
        );
        
        if (currentCollection) {
          collectionStatus = currentCollection;
          checkDoneButtonConditions(currentCollection);
        }
      }
    } catch (error) {
      console.error('Error checking collection status:', error);
    }
  }

  // Function to check if Done button should be shown
  function checkDoneButtonConditions(collection) {
    if (!collection) {
      showDoneButton = false;
      return;
    }

    // Check if all required fields (except merkleRoot) have values
    const requiredFields = [
      'contractAddress', 'deployer', 'name', 'symbol', 'maxSupply', 'baseURI'
    ];
    
    const hasAllRequiredFields = requiredFields.every(field => {
      const value = collection[field];
      return value !== null && value !== undefined && value !== '';
    });

    if (!hasAllRequiredFields) {
      showDoneButton = false;
      return;
    }

    // Check if either all whitelist OR all public variables have values
    const whitelistFields = [
      'whitelistPrice', 'whitelistStart', 'whitelistEnd', 
      'wlMaxTotalMintableByWallet', 'maxTokenSupplyForStage'
    ];
    
    const publicFields = [
      'publicPrice', 'publicStart', 'publicEnd', 'publicMaxTotalMintableByWallet'
    ];

    const hasAllWhitelistFields = whitelistFields.every(field => {
      const value = collection[field];
      return value !== null && value !== undefined && value !== '';
    });

    const hasAllPublicFields = publicFields.every(field => {
      const value = collection[field];
      return value !== null && value !== undefined && value !== '';
    });

    // Show Done button if we have all required fields AND (all whitelist OR all public fields)
    showDoneButton = hasAllRequiredFields && (hasAllWhitelistFields || hasAllPublicFields);
  }

  // Call on component mount
  onMount(() => {
    checkCollectionStatus();
  });

// Modify the uploadMetadataAndImages function:
async function uploadMetadataAndImages() {
  uploadLoading = true;
  uploadSuccess = false;
  uploadError = false;
  uploadErrorValue = '';

  try {
    // Validate required data
    if (!uploadData.parsedImages || uploadData.parsedImages.length === 0) {
      uploadError = true;
      uploadErrorValue = 'Please upload images first';
      uploadLoading = false;
      return;
    }

    if (!uploadData.parsedMetadata || uploadData.parsedMetadata.length === 0) {
      uploadError = true;
      uploadErrorValue = 'Please upload metadata first';
      uploadLoading = false;
      return;
    }

    if (uploadData.parsedImages.length !== uploadData.parsedMetadata.length) {
      uploadError = true;
      uploadErrorValue = 'Number of images and metadata entries must match';
      uploadLoading = false;
      return;
    }

    const formData = new FormData();
    
    // Add contract address
    formData.append('contractAddress', contractAddress);
    
    // Add metadata as JSON string
    formData.append('metadata', JSON.stringify(uploadData.parsedMetadata));
    
    // Add allowlist if available
    if (uploadData.parsedAllowlist && uploadData.parsedAllowlist.length > 0) {
      formData.append('allowlist', JSON.stringify(uploadData.parsedAllowlist));
    }
    
    // Add image files
    uploadData.parsedImages.forEach((file, index) => {
      formData.append('file', file, `${index + 1}.png`);
    });

    const response = await fetch(`${config.rpcUrl}/launchrpc/uploadMetadataAndImages`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      const responseBody = await response.json();
      uploadLoading = false;
      uploadError = true;
      uploadErrorValue = responseBody.error?.message || "Failed to upload metadata and images";
      throw new Error(responseBody.error?.message || "Failed to upload metadata and images");
    }

    const result = await response.json();
    console.log('Upload successful:', result);
    
    uploadSuccess = true;

    // If allowlist is available, configure it
    if (uploadData.parsedAllowlist && uploadData.parsedAllowlist.length > 0) {
      // Change loading message for allowlist configuration
      console.log('Configuring allowlist...');
      console.log("uploadData.parsedAllowlist", uploadData.parsedAllowlist)
      try {
        const allowlistResponse = await fetch(`${config.rpcUrl}/launchrpc`, {
          method: "POST",
          body: JSON.stringify({
            method: "configureWlOffchainList",
            params: {
              contractAddress: contractAddress,
              addressList: uploadData.parsedAllowlist
            }
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!allowlistResponse.ok) {
          const allowlistResponseBody = await allowlistResponse.json();
          // Show error for allowlist but keep success for upload
          uploadError = true;
          uploadErrorValue = "Allowlist configuration failed: " + (allowlistResponseBody.error?.message || "Unknown error");
        } else {
          console.log('Allowlist configured successfully');
        }


      } catch (allowlistError) {
        // Show error for allowlist but keep success for upload  
        uploadError = true;
        uploadErrorValue = "Allowlist configuration failed: " + (allowlistError.message || "Unknown error");
        console.error('Allowlist configuration error:', allowlistError);
      }
    }

    uploadLoading = false;
    
    // Auto-hide success message after 5 seconds (longer since we might have both messages)
    setTimeout(() => {
      uploadSuccess = false;
      if (uploadError) {
        uploadError = false;
        uploadErrorValue = '';
      }
    }, 5000);

  } catch (error) {
    uploadLoading = false;
    uploadError = true;
    uploadErrorValue = error.message || 'An unexpected error occurred during upload';
    console.error('Upload error:', error);
  }
}

  
  // Data for each step
  let collectionData = {
    description: '',
    maxSupply: '',
    whitelistMint: null,
    publicMint: null
  };

  let contractData = {
    collectionName: '',
    tokenSymbol: ''
  };

  let uploadData = {
    itemsUploaded: 0,
    metadataUploaded: 0,
    allowlistUploaded: 0,
    parsedMetadata: null,
    parsedAllowlist: null,
    parsedImages: null
  };


  let feesData = {
    creatorFees: ''
  };


  let currentStep = 1;
  let generalError = false;
  let generalErrorValue = '';
  let popupLoading = false;

  // Navigation functions
  function handleStepClick(step) {
    currentStep = step;
  }

  function handleSave() {
    console.log('Save clicked for step', currentStep);

    if (currentStep === 2) {
      // Upload Media step - trigger upload
      uploadMetadataAndImages();
      checkCollectionStatus();
    } else {
      // Other steps - existing save logic
      // Add your existing save logic here for other steps
    }
  }

  // Add this after the existing functions:
  async function handleSave1() {
    if (currentStep === 1) {
      // Reset error state
      generalError = false;
      generalErrorValue = '';
      popupLoading = true;

      // Validation
      const { description, maxSupply, whitelistMint, publicMint } = collectionData;
      
      if ( !maxSupply || (!whitelistMint && !publicMint)) {
        popupLoading = false;
        generalError = true;
        generalErrorValue = 'Collection description, Max supply and one mint option are required';
        return;
      }

      try {        
        // Prepare API parameters
        const signature = "";
        const maxSupplyNum = parseInt(maxSupply);
        const whitelistPrice = whitelistMint ? parseEther(whitelistMint.price).toString() : "0";
        const maxTokenSupplyForStage = whitelistMint ? parseInt(whitelistMint.maxSupply) : 0;
        const whitelistStart = whitelistMint ? Math.floor(whitelistMint.whitelistStart / 1000) : 0;
        const whitelistEnd = whitelistMint ? Math.floor(whitelistMint.whitelistEnd / 1000) : 0;
        const wlMaxTotalMintableByWallet = whitelistMint ? parseInt(whitelistMint.limitPerAddress) : 0;
        const publicPrice = publicMint ? parseEther(publicMint.price).toString() : "0";
        const publicStart = publicMint ? Math.floor(publicMint.publicStart / 1000) : 0;
        const publicEnd = publicMint ? Math.floor(publicMint.publicEnd / 1000) : 0;
        const publicMaxTotalMintableByWallet = publicMint ? parseInt(publicMint.limitPerAddress) : 0;

        const response = await fetch(`${config.rpcUrl}/launchrpc`, {
          method: "POST",
          body: JSON.stringify({
            method: "configureTemBasicDrop",
            params: {
              signature,
              contractAddress,
              maxSupply: maxSupplyNum,
              whitelistPrice,
              maxTokenSupplyForStage,
              whitelistStart,
              whitelistEnd,
              wlMaxTotalMintableByWallet,
              publicPrice,
              publicStart,
              publicEnd,
              publicMaxTotalMintableByWallet
            }
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          const responseBody = await response.json();
          popupLoading = false;
          generalError = true;
          generalErrorValue = "Failed to configure collection";
          throw new Error(responseBody.error?.message || "Failed to configure collection");
        }
        
        await checkCollectionStatus();
        popupLoading = false;
        
        // Move to next step
        currentStep = currentStep + 1;

        if (currentStep === 2 && uploadData.parsedMetadata) {
          console.log('Parsed metadata available:', uploadData.parsedMetadata);
        }
      } catch (error) {
        popupLoading = false;
        generalError = true;
        generalErrorValue = error.message || 'An unexpected error occurred';
        console.error('Configuration error:', error);
      }
    } else {
      currentStep = currentStep + 1;
    }
  }
  async function handleDone() {
    if (!collectionStatus) {
      console.error('No collection status available');
      return;
    }

    doneLoading = true;
    doneError = false;
    doneErrorValue = '';

    try {
      if (!window.ethereum) {
        doneLoading = false;
        doneError = true;
        doneErrorValue = "Please install MetaMask to continue";
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ERC721SeaDropabi, signer);

      // Determine which mint type to use for publicDrop
      const hasWhitelistData = collectionStatus.whitelistPrice !== "0" && 
                              collectionStatus.whitelistStart !== 0 && 
                              collectionStatus.whitelistEnd !== 0;
      
      const hasPublicData = collectionStatus.publicPrice && 
                            collectionStatus.publicStart && 
                            collectionStatus.publicEnd &&
                            collectionStatus.publicMaxTotalMintableByWallet;

      let publicDrop;
      if (hasPublicData) {
        publicDrop = {
          mintPrice: BigInt(collectionStatus.publicPrice),
          startTime: collectionStatus.publicStart,
          endTime: collectionStatus.publicEnd,
          maxTotalMintableByWallet: collectionStatus.publicMaxTotalMintableByWallet,
          feeBps: 0,
          restrictFeeRecipients: true
        };
      } else {
        publicDrop = {
          mintPrice: 0n,
          startTime: 0,
          endTime: 0,
          maxTotalMintableByWallet: 0,
          feeBps: 0,
          restrictFeeRecipients: false
        };
      }

      const contractConfig  = {
        maxSupply: collectionStatus.maxSupply,
        baseURI: collectionStatus.baseURI,
        allowListData: {
          merkleRoot: collectionStatus.merkleRoot || "0x0000000000000000000000000000000000000000000000000000000000000000",
          publicKeyURIs: [],
          allowListURI: ""
        },
        creatorPayoutAddress: collectionStatus.deployer,
        allowedFeeRecipients: [
          "0x1222dC56aCD3864352Ea656DF1B8a52dE71c9BC4"
        ],
        seaDropImpl: SeaDrop,
        provenanceHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
        contractURI: "",
        dropURI: "",
        publicDrop: publicDrop,
        disallowedFeeRecipients: [],
        allowedPayers: [],
        disallowedPayers: [],
        tokenGatedAllowedNftTokens: [],
        tokenGatedDropStages: [],
        disallowedTokenGatedAllowedNftTokens: [],
        signers: [],
        signedMintValidationParams: [],
        disallowedSigners: []
      };

      const tx = await contract.multiConfigure(contractConfig);
      await tx.wait();


      const response = await fetch(`${config.rpcUrl}/launchrpc`, {
        method: "POST",
        body: JSON.stringify({
          method: "thisDropLive",
          params: {
            contractAddress: contractAddress
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("contractAddress",contractAddress)
      if (!response.ok) {
        const responseBody = await response.json();
        console.error('Failed to update drop status:', responseBody.error?.message || "Unknown error");
        // Don't throw error here as the main contract configuration succeeded
      } else {
        console.log('Drop status updated to live successfully');
      }

      goto("../mylaunch")
      doneLoading = false;

      
    } catch (error) {
      doneLoading = false;
      doneError = true;
      doneErrorValue = error.message || 'Failed to configure contract';
      console.error('Done configuration error:', error);
    }
  }
</script>

<div class="flex flex-col min-h-screen bg-launchpadDarkLight overflow-hidden">
  <Nav/>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar 
      {currentStep} 
      contractAddress={contractAddress}
      {showDoneButton}
      onStepClick={handleStepClick}
      onDone={handleDone}
    />

    <!-- Main Content -->
    {#if currentStep === 1}
      <ConfigureCollection 
        {collectionData} 
        {collectionStatus}
        onSave={handleSave1} 
      />
    {:else if currentStep === 2}
      <UploadMedia 
        {uploadData} 
        {uploadLoading}
        {uploadSuccess}
        {uploadError}
        {uploadErrorValue}
        onSave={handleSave} 
      />
    {:else if currentStep === 3}
      <VisualizeMintPage 
        {visualizeData} 
        onSave={handleSave} 
        {checkCollectionStatus}
      />
    {:else if currentStep === 4}
      <CreatorFees 
        {feesData} 
        onSave={handleSave} 
      />
    {/if}

    {#if generalError}
      <div class="fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-md">
        <div class="flex items-center justify-between">
          <span class="text-sm">{generalErrorValue}</span>
          <button 
            on:click={() => { generalError = false; generalErrorValue = ''; }}
            class="ml-4 text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      </div>
    {/if}

    {#if doneError}
      <div class="fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-md">
        <div class="flex items-center justify-between">
          <span class="text-sm">{doneErrorValue}</span>
          <button 
            on:click={() => { doneError = false; doneErrorValue = ''; }}
            class="ml-4 text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>
      </div>
    {/if}

    <!-- Loading Display -->
    {#if popupLoading}
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-launchpadDarkMedium p-8 rounded-lg">
          <div class="text-white text-center">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
            <p>Configuring collection...</p>
          </div>
        </div>
      </div>
    {/if}

    {#if uploadLoading}
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-launchpadDarkMedium rounded-lg p-8 flex items-center gap-4">
          <svg class="animate-spin h-8 w-8 text-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-white text-lg">
            {#if uploadSuccess}
              Configuring allowlist...
            {:else}
              Uploading metadata and images...
            {/if}
          </span>
        </div>
      </div>
    {/if}

    {#if doneLoading}
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-launchpadDarkMedium rounded-lg p-8 flex items-center gap-4">
          <svg class="animate-spin h-8 w-8 text-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span class="text-white text-lg">Finalizing contract configuration...</span>
        </div>
      </div>
    {/if}
  </div>
</div>