<!-- Sidebar.svelte -->
<script>
  export let currentStep = 1;
  export let contractAddress;
  export let showDoneButton = false;
  export let onStepClick = () => {};
  import { goto } from '$app/navigation';
  export let onDone = () => {};
  export let handleDone;
  import { emitBetweenText } from '$lib/index.js';
  const steps = [
    { id: 1, title: 'Step 1: Configure collection' },
    { id: 2, title: 'Step 2: Upload media & metadata' },
    { id: 3, title: 'Step 3: Visualize your mint page' }
  ];
</script>

<div class="w-80 bg-launchpadDarkMedium h-screen p-6">
  <!-- Header -->
  <div class="mb-8">
    <button class="text-lightGray text-sm"
    on:click={()=>{goto(`/launchpad/mylaunch`)}} >
      <span class="text-white">Back</span>
    </button>
    <div class="flex justify-center items-center gap-2 mt-4 border border-white rounded-md">
      <span class="text-white">Collection:</span>
      <span class="text-white text-sm">{emitBetweenText(contractAddress, 10)}</span>
    </div>
  </div>

  <!-- Steps -->
  <div class="space-y-4">
    {#each steps as step}
      <button
        class="w-full text-left p-4 rounded-lg transition-colors duration-200 {currentStep === step.id 
          ? 'bg-darkCard text-white' 
          : 'bg-transparent text-lightGray hover:bg-darkCard hover:text-white'
        }"
        on:click={() => onStepClick(step.id)}
      >
        {step.title}
      </button>
    {/each}
  </div>
   <!-- Done Button -->
  {#if showDoneButton}
    <div class="mt-8">
      <button
        class="w-full bg-button hover:bg-buttonHover text-white font-semibold p-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        on:click={onDone}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Done
      </button>
    </div>
  {/if}
</div>