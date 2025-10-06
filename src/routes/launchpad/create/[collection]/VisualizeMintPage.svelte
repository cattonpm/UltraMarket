<!-- VisualizeMintPage.svelte -->
<script>
  import { ethers } from "ethers";
  import config from '$lib/config';

  export let visualizeData = {
    bannerFile: null,
    logoFile: null,
    bannerKey: null,
    logoKey: null,
    bannerPreview: null,
    logoPreview: null
  };
  export let onSave = () => {};
  export let checkCollectionStatus;

  const contractAddress = window.location.pathname.split('/').pop();

  let saveLoading = false;
  let saveSuccess = false;
  let saveError = false;
  let saveErrorValue = '';

  // Helper functions from reference code
  async function getFileKey() {
    const response = await fetch(config.rpcUrl, {
      method: "POST",
      body: JSON.stringify({
        method: "createStream",
        params: {}
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      const responseBody = await response.json();
      return responseBody.payload.fileKey;
    } else {
      const responseBody = await response.json();
      if (responseBody.error && responseBody.error.message) {
        throw new Error(responseBody.error.message);
      }
    }
  }

  function arrayToHex(array) {
    return Array.from(array)
      .map((i) => i.toString(16).padStart(2, "0"))
      .join("");
  }

  async function uploadFile(file, fileKey) {
    await new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = async (evt) => {
        let fileData = evt.target.result;

        while ((new Uint8Array(fileData)).length !== 0) {
          const chunk = "0x" + arrayToHex(new Uint8Array(fileData.slice(0, 4194304)));

          const response = await fetch(config.rpcUrl, {
            method: "POST",
            body: JSON.stringify({
              method: "streamAdd",
              params: {
                fileKey,
                chunk
              }
            }),
            headers: {
              "Content-Type": "application/json"
            }
          });

          if (!response.ok) {
            const responseBody = await response.json();
            if (responseBody.error && responseBody.error.message) {
              throw new Error(responseBody.error.message);
            }
          }

          fileData = fileData.slice(4194304);
        }

        resolve();
      };

      fileReader.readAsArrayBuffer(file);
    });
  }

  // File validation
  function validateFile(file, type) {
    const maxSize = 3 * 1024 * 1024; // 3MB
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];

    if (!allowedTypes.includes(file.type)) {
      throw new Error(`${type} must be PNG or JPEG format`);
    }

    if (file.size > maxSize) {
      throw new Error(`${type} must be less than 3MB`);
    }
  }

  // Handle file upload
  function handleFileUpload(type) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.png,.jpg,.jpeg';
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        try {
          validateFile(file, type);
          
          if (type === 'banner') {
            user_updateBannerToFront(file);
          } else {
            user_updateLogoToFront(file);
          }
        } catch (error) {
          saveError = true;
          saveErrorValue = error.message;
        }
      }
    };
    input.click();
  }

  // Store banner temporarily and upload to server
  async function user_updateBannerToFront(file) {
    try {
      const fileKey = await getFileKey();
      await uploadFile(file, fileKey);
      
      const reader = new FileReader();
      reader.onload = function(e) {
        visualizeData.bannerFile = file;
        visualizeData.bannerKey = fileKey;
        visualizeData.bannerPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    } catch (error) {
      saveError = true;
      saveErrorValue = 'Failed to upload banner: ' + error.message;
    }
  }

  // Store logo temporarily and upload to server
  async function user_updateLogoToFront(file) {
    try {
      const fileKey = await getFileKey();
      await uploadFile(file, fileKey);
      
      const reader = new FileReader();
      reader.onload = function(e) {
        visualizeData.logoFile = file;
        visualizeData.logoKey = fileKey;
        visualizeData.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    } catch (error) {
      saveError = true;
      saveErrorValue = 'Failed to upload logo: ' + error.message;
    }
  }

  // Handle save
  async function handleSave() {
    saveLoading = true;
    saveSuccess = false;
    saveError = false;
    saveErrorValue = '';

    try {
      // Validation
      if (!visualizeData.bannerKey || !visualizeData.logoKey) {
        saveError = true;
        saveErrorValue = 'Both banner and logo are required';
        saveLoading = false;
        return;
      }

      if (!window.ethereum) {
        saveError = true;
        saveErrorValue = 'Please install MetaMask to continue';
        saveLoading = false;
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const deployerAddress = await signer.getAddress();

      // Upload banner
      const bannerResponse = await fetch(`${config.rpcUrl}/launchrpc`, {
        method: "POST",
        body: JSON.stringify({
          method: "user_updateBanner",
          params: {
            deployer: deployerAddress,
            contractAddress: contractAddress,
            fileKey: visualizeData.bannerKey
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!bannerResponse.ok) {
        const bannerResponseBody = await bannerResponse.json();
        throw new Error("Failed to update banner: " + (bannerResponseBody.error?.message || "Unknown error"));
      }

      // Upload logo
      const logoResponse = await fetch(`${config.rpcUrl}/launchrpc`, {
        method: "POST",
        body: JSON.stringify({
          method: "user_updateLogo",
          params: {
            deployer: deployerAddress,
            contractAddress: contractAddress,
            fileKey: visualizeData.logoKey
          }
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!logoResponse.ok) {
        const logoResponseBody = await logoResponse.json();
        throw new Error("Failed to update logo: " + (logoResponseBody.error?.message || "Unknown error"));
      }

      saveLoading = false;
      saveSuccess = true;
      await checkCollectionStatus();
      setTimeout(() => {
        saveSuccess = false;
      }, 3000);

    } catch (error) {
      saveLoading = false;
      saveError = true;
      saveErrorValue = error.message || 'An unexpected error occurred';
      console.error('Save error:', error);
    }
  }
</script>

<!-- Rest of the template remains the same -->
<div class="flex-1 bg-launchpadDarkLight p-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-white text-3xl font-bold mb-8 text-center">Visualize your mint page</h1>
    
    <div class="space-y-8">
      <!-- Banner Upload -->
      <div>
        <h2 class="text-white text-xl font-semibold mb-4">Upload banner</h2>
        <p class="text-lightGray text-sm mb-4">Banner image for your collection mint page (Max 3MB, PNG/JPEG)</p>
        
        <div class="flex gap-6">
          <button 
            on:click={() => handleFileUpload('banner')}
            class="w-64 h-32 bg-lightGray border-2 border-dashed border-darkGray rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors relative overflow-hidden"
          >
            {#if visualizeData.bannerPreview}
              <img 
                src={visualizeData.bannerPreview} 
                alt="Banner preview" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span class="text-white text-sm">Click to change</span>
              </div>
            {:else}
              <span class="text-darkGray text-2xl">+</span>
            {/if}
          </button>
          
          <div class="flex-1">
            {#if visualizeData.bannerFile}
              <p class="text-green text-sm">✓ Banner uploaded: {visualizeData.bannerFile.name}</p>
              <p class="text-lightGray text-sm">Size: {(visualizeData.bannerFile.size / (1024 * 1024)).toFixed(2)}MB</p>
            {:else}
              <p class="text-lightGray text-sm">No banner uploaded</p>
            {/if}
          </div>
        </div>
      </div>

      <!-- Logo Upload -->
      <div>
        <h2 class="text-white text-xl font-semibold mb-4">Collection logo</h2>
        <p class="text-lightGray text-sm mb-4">Logo image for your collection (Max 3MB, PNG/JPEG)</p>
        
        <div class="flex gap-6">
          <button 
            on:click={() => handleFileUpload('logo')}
            class="w-32 h-32 bg-lightGray border-2 border-dashed border-darkGray rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors relative overflow-hidden"
          >
            {#if visualizeData.logoPreview}
              <img 
                src={visualizeData.logoPreview} 
                alt="Logo preview" 
                class="w-full h-full object-cover rounded-lg"
              />
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                <span class="text-white text-sm">Click to change</span>
              </div>
            {:else}
              <span class="text-darkGray text-2xl">+</span>
            {/if}
          </button>
          
          <div class="flex-1">
            {#if visualizeData.logoFile}
              <p class="text-green text-sm">✓ Logo uploaded: {visualizeData.logoFile.name}</p>
              <p class="text-lightGray text-sm">Size: {(visualizeData.logoFile.size / (1024 * 1024)).toFixed(2)}MB</p>
            {:else}
              <p class="text-lightGray text-sm">No logo uploaded</p>
            {/if}
          </div>
        </div>
      </div>

      <!-- Preview Section -->
      <div class="bg-launchpadDarkMedium rounded-lg p-6">
        <h3 class="text-white text-lg font-semibold mb-4">Mint page preview</h3>
        
        <div class="bg-launchpadDarkLight rounded-lg overflow-hidden">
          <div class="h-48 bg-gray-600 relative">
            {#if visualizeData.bannerPreview}
              <img 
                src={visualizeData.bannerPreview} 
                alt="Banner preview" 
                class="w-full h-full object-cover"
              />
            {:else}
              <div class="w-full h-full flex items-center justify-center">
                <span class="text-lightGray">Upload banner</span>
              </div>
            {/if}
          </div>
          
          <div class="p-6 flex items-center gap-4">
            <div class="w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center">
              {#if visualizeData.logoPreview}
                <img 
                  src={visualizeData.logoPreview} 
                  alt="Logo preview" 
                  class="w-full h-full object-cover rounded-lg"
                />
              {:else}
                <span class="text-lightGray text-sm">Logo</span>
              {/if}
            </div>
            <div>
              <h4 class="text-white text-xl font-semibold">Collection name</h4>
              <p class="text-lightGray text-sm">Your NFT collection description</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {#if saveError}
      <div class="mt-6 p-3 bg-red-600 bg-opacity-20 border border-red-600 rounded-lg">
        <p class="text-red-400 text-sm">{saveErrorValue}</p>
      </div>
    {/if}

    {#if saveSuccess}
      <div class="mt-6 p-3 bg-green-600 bg-opacity-20 border border-button rounded-lg">
        <p class="text-button text-sm">✓ Banner and logo updated successfully!</p>
      </div>
    {/if}

    <div class="flex justify-end mt-12">
      <button 
        on:click={handleSave}
        disabled={saveLoading}
        class="bg-button hover:bg-buttonHover text-white font-semibold px-12 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
      >
        {#if saveLoading}
          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Saving...
        {:else}
          Save
        {/if}
      </button>
    </div>
  </div>
</div>