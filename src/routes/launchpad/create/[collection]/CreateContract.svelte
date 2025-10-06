<!-- CreateContract.svelte -->
<script>
  export let contractData = {
    collectionName: '',
    tokenSymbol: ''
  };
  export let onContinue = () => {};
</script>

<div class="flex-1 bg-launchpadDarkLight p-8">
  <div class="max-w-2xl mx-auto">
    <h1 class="text-white text-3xl font-bold mb-12 text-center">Create your NFT Contract</h1>
    
    <div class="space-y-8">
      <!-- Collection Name -->
      <div>
        <label class="block text-white text-lg mb-4">Collection name</label>
        <input 
          type="text" 
          placeholder="Enter NFT collection name"
          bind:value={contractData.collectionName}
          class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-1 text-white placeholder-lightStone focus:outline-none focus:border-button"
        />
      </div>

      <!-- Token Symbol -->
      <div>
        <label class="block text-white text-lg mb-4">Token symbol</label>
        <input 
          type="text" 
          placeholder="Enter token symbol"
          bind:value={contractData.tokenSymbol}
          class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-1  text-white placeholder-lightStone focus:outline-none focus:border-button"
        />
      </div>
    </div>

    <!-- Continue Button -->
    <div class="flex justify-end mt-16">
      <button 
        on:click={onContinue}
        class="bg-button hover:bg-buttonHover text-white font-semibold px-12 py-3 rounded-full transition-colors text-lg"
      >
        Continue
      </button>
    </div>
  </div>
</div>