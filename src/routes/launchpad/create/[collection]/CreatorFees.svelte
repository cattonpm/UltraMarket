<!-- CreatorFees.svelte -->
<script>
  export let feesData = {
    creatorFees: ''
  };
  export let onSave = () => {};
</script>

<div class="flex-1 bg-launchpadDarkLight p-8">
  <div class="max-w-2xl mx-auto">
    <h1 class="text-white text-3xl font-bold mb-8 text-center">Creator fees</h1>
    
    <div class="space-y-6">
      <!-- Creator Fees -->
      <div>
        <h2 class="text-white text-xl font-semibold mb-2">Creator fees</h2>
        <p class="text-lightGray text-sm mb-6">This is the fees you'll receive when NFT being traded on marketplace</p>
        
        <input 
          type="text" 
          placeholder="Enter Creator fees"
          bind:value={feesData.creatorFees}
          class="w-full bg-launchpadDarkMedium border border-darkGray rounded-lg px-4 py-4 text-white placeholder-lightStone focus:outline-none focus:border-button text-lg"
        />
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end mt-16">
      <button 
        on:click={onSave}
        class="bg-button hover:bg-buttonHover text-white font-semibold px-12 py-3 rounded-full transition-colors text-lg"
      >
        Save
      </button>
    </div>
  </div>
</div>