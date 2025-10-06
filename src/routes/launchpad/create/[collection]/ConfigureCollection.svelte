<!-- ConfigureCollection.svelte -->
<script>
  import { onMount } from 'svelte';
  import { formatEther } from 'ethers/lib/utils';

  export let collectionData = {
    description: '',
    maxSupply: '',
    whitelistMint: null,
    publicMint: null
  };

  export let collectionStatus = null;
  let whitelistStartLocal = '';
  let whitelistEndLocal = '';
  let publicStartLocal = '';
  let publicEndLocal = '';

  export let onSave = () => {};

  let showWhitelistMint = !!collectionData.whitelistMint;
  let showPublicMint = !!collectionData.publicMint;

  function populateFormFromStatus() {
    if (!collectionStatus) return;

    // Populate maxSupply if not null
    if (collectionStatus.maxSupply !== null) {
      collectionData.maxSupply = collectionStatus.maxSupply.toString();
    }

    // Populate whitelist mint data if exists
    const hasWhitelistData = collectionStatus.whitelistPrice !== null && 
                            collectionStatus.whitelistPrice !== "0";
    
    if (hasWhitelistData) {
      showWhitelistMint = true;
      collectionData.whitelistMint = {
        price: collectionStatus.whitelistPrice ? formatEther(collectionStatus.whitelistPrice) : '',
        maxSupply: collectionStatus.maxTokenSupplyForStage ? collectionStatus.maxTokenSupplyForStage.toString() : '',
        limitPerAddress: collectionStatus.wlMaxTotalMintableByWallet ? collectionStatus.wlMaxTotalMintableByWallet.toString() : '',
        whitelistStart: collectionStatus.whitelistStart ? collectionStatus.whitelistStart * 1000 : null,
        whitelistEnd: collectionStatus.whitelistEnd ? collectionStatus.whitelistEnd * 1000 : null
      };

      // Set local datetime values for whitelist
      if (collectionStatus.whitelistStart) {
        const startDate = new Date(collectionStatus.whitelistStart * 1000);
        whitelistStartLocal = startDate.toISOString().slice(0, 16);
      }
      if (collectionStatus.whitelistEnd) {
        const endDate = new Date(collectionStatus.whitelistEnd * 1000);
        whitelistEndLocal = endDate.toISOString().slice(0, 16);
      }
    }

    // Populate public mint data if exists
    const hasPublicData = collectionStatus.publicPrice !== null && 
                         collectionStatus.publicPrice !== "0";
    
    if (hasPublicData) {
      showPublicMint = true;
      collectionData.publicMint = {
        price: collectionStatus.publicPrice ? formatEther(collectionStatus.publicPrice) : '',
        maxSupply: '', // Leave empty as requested
        limitPerAddress: collectionStatus.publicMaxTotalMintableByWallet ? collectionStatus.publicMaxTotalMintableByWallet.toString() : '',
        publicStart: collectionStatus.publicStart ? collectionStatus.publicStart * 1000 : null,
        publicEnd: collectionStatus.publicEnd ? collectionStatus.publicEnd * 1000 : null
      };

      // Set local datetime values for public mint
      if (collectionStatus.publicStart) {
        const startDate = new Date(collectionStatus.publicStart * 1000);
        publicStartLocal = startDate.toISOString().slice(0, 16);
      }
      if (collectionStatus.publicEnd) {
        const endDate = new Date(collectionStatus.publicEnd * 1000);
        publicEndLocal = endDate.toISOString().slice(0, 16);
      }
    }
  }
  $: if (collectionStatus) {
    populateFormFromStatus();
  }

  // Populate form when component mounts
  onMount(() => {
    populateFormFromStatus();
  });


  function updateWhitelistStart() {
    if (whitelistStartLocal && collectionData.whitelistMint) {
      collectionData.whitelistMint.whitelistStart = new Date(whitelistStartLocal).getTime();
    }
  }

  function updateWhitelistEnd() {
    if (whitelistEndLocal && collectionData.whitelistMint) {
      collectionData.whitelistMint.whitelistEnd = new Date(whitelistEndLocal).getTime();
    }
  }

  function updatePublicStart() {
    if (publicStartLocal && collectionData.publicMint) {
      collectionData.publicMint.publicStart = new Date(publicStartLocal).getTime();
    }
  }

  function updatePublicEnd() {
    if (publicEndLocal && collectionData.publicMint) {
      collectionData.publicMint.publicEnd = new Date(publicEndLocal).getTime();
    }
  }

  function addWhitelistMint() {
    showWhitelistMint = true;
    collectionData.whitelistMint = {
      price: '',
      maxSupply: '',
      limitPerAddress: '',
      whitelistStart: null,
      whitelistEnd: null
    };
  }

  // Update the addPublicMint function:
  function addPublicMint() {
    showPublicMint = true;
    collectionData.publicMint = {
      price: '',
      maxSupply: '',
      limitPerAddress: '',
      publicStart: null,
      publicEnd: null
    };
  }

  function removeWhitelistMint() {
    showWhitelistMint = false;
    collectionData.whitelistMint = null;
  }

  function removePublicMint() {
    showPublicMint = false;
    collectionData.publicMint = null;
  }
</script>
<style>
.datetime-white-icon::-webkit-calendar-picker-indicator {
  filter: invert(1);
  opacity: 1;
}
</style>
<div class="flex-1 bg-launchpadDarkLight p-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-white text-3xl font-bold mb-8 text-center">Configure collection</h1>
    
    <div class="space-y-8">
      <!-- Collection Description -->
      <div>
        <label class="block text-white text-lg mb-4">Collection description</label>
        <input 
          type="text" 
          placeholder="Enter NFT collection description"
          bind:value={collectionData.description}
          class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-3 text-white placeholder-lightStone focus:outline-none focus:border-button"
        />
      </div>

      <!-- Max Supply -->
      <div>
        <label class="block text-white text-lg mb-4">Max supply</label>
        <input 
          type="text" 
          placeholder="Enter max supply of your NFT"
          bind:value={collectionData.maxSupply}
          class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-3 text-white placeholder-lightStone focus:outline-none focus:border-button"
        />
      </div>

      <!-- Mint Options -->
      <div>
        <h2 class="text-white text-xl font-bold mb-6">Mint options</h2>
        
        <!-- Whitelist Mint -->
        {#if showWhitelistMint}
          <div class="bg-launchpadDarkMedium rounded-lg p-6 mb-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-white text-lg font-semibold">Whitelist mint</h3>
              <button 
                on:click={removeWhitelistMint}
                class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold hover:bg-red-700"
              >
                ×
              </button>
            </div>
            
            <div class="grid grid-cols-3 gap-6">
              <div>
                <label class="block text-lightGray text-sm mb-2">Price</label>
                <input 
                  type="text"
                  bind:value={collectionData.whitelistMint.price}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Max supply</label>
                <input 
                  type="text"
                  bind:value={collectionData.whitelistMint.maxSupply}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Limit per address</label>
                <input 
                  type="text"
                  bind:value={collectionData.whitelistMint.limitPerAddress}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Start Time</label>
                <input
                  type="datetime-local"
                  bind:value={whitelistStartLocal}
                  on:change={updateWhitelistStart}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button datetime-white-icon"
                />

              </div>
              <div>
                <label class="block text-lightGray text-sm mb-2">End Time</label>
                <input 
                  type="datetime-local"
                  bind:value={whitelistEndLocal}
                  on:change={updateWhitelistEnd}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button datetime-white-icon"
                />
              </div>
            </div>
          </div>
        {:else}
          <button 
            on:click={addWhitelistMint}
            class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg p-4 mb-6 flex items-center justify-center gap-3 text-white hover:bg-darkCard transition-colors"
          >
            <div class="w-6 h-6 border border-white rounded-full flex items-center justify-center text-sm">+</div>
            Add whitelist mint
          </button>
        {/if}

        <!-- Public Mint -->
        {#if showPublicMint}
          <div class="bg-launchpadDarkMedium rounded-lg p-6 mb-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-white text-lg font-semibold">Public mint</h3>
              <button 
                on:click={removePublicMint}
                class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold hover:bg-red-700"
              >
                ×
              </button>
            </div>
            
            <div class="grid grid-cols-3 gap-6">
              <div>
                <label class="block text-lightGray text-sm mb-2">Price</label>
                <input 
                  type="text"
                  bind:value={collectionData.publicMint.price}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Limit per address</label>
                <input 
                  type="text"
                  bind:value={collectionData.publicMint.limitPerAddress}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button"
                />
              </div>
              
              <div>
                <label class="block text-lightGray text-sm mb-2">Start Time</label>
                <input 
                  type="datetime-local"
                  bind:value={publicStartLocal}
                  on:change={updatePublicStart}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button datetime-white-icon"
                />
              </div>

              <div>
                <label class="block text-lightGray text-sm mb-2">End Time</label>
                <input 
                  type="datetime-local"
                  bind:value={publicEndLocal}
                  on:change={updatePublicEnd}
                  class="w-full bg-launchpadDarkLight border border-darkGray rounded-lg px-4 py-3 text-white focus:outline-none focus:border-button datetime-white-icon"
                />
              </div>
            </div>
          </div>
        {:else}
          <button 
            on:click={addPublicMint}
            class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg p-4 mb-6 flex items-center justify-center gap-3 text-white hover:bg-darkCard transition-colors"
          >
            <div class="w-6 h-6 border border-white rounded-full flex items-center justify-center text-sm">+</div>
            Add public mint
          </button>
        {/if}
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end mt-12">
      <button 
        on:click={onSave}
        class="bg-button hover:bg-buttonHover text-white font-semibold px-12 py-3 rounded-full transition-colors"
      >
        Save
      </button>
    </div>
  </div>
</div>