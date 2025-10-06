<!-- mint/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { formatEther } from 'ethers/lib/utils';
  import config from '$lib/config';
  import Nav from "../Nav.svelte";
  import { goto } from '$app/navigation';

  let allCollections = [];
  let featuredCollection = null;
  let featuredCollections = [];
  let otherCollections = [];
  let displayedCollections = [];
  let loading = true;
  let loadingMore = false;
  let currentIndex = 0;
  const itemsPerLoad = 10;

  onMount(() => {
    loadCollections();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  async function loadCollections() {
    try {
      const response = await fetch(`${config.rpcUrl}/launchrpc`, {
        method: "POST",
        body: JSON.stringify({
          method: "showLiveCollectionDrop",
          params: {}
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = await response.json();
      
      if (result.success && result.payload.liveDrops) {
        // Filter out violated collections
        allCollections = result.payload.liveDrops.filter(collection => !collection.isViolated);
        
        // Find featured collection (first checkMark == true)
        featuredCollection = allCollections.find(collection => collection.checkMark);
        
        // Separate featured and other collections
        featuredCollections = allCollections.filter(collection => collection.checkMark);
        otherCollections = allCollections.filter(collection => !collection.checkMark);
        
        // Combine for infinite scroll (featured first, then others)
        const orderedCollections = [...featuredCollections, ...otherCollections];
        
        // Load first batch
        loadMoreCollections(orderedCollections);
        loading = false;
      }
    } catch (error) {
      console.error('Error loading collections:', error);
      loading = false;
    }
  }

  function loadMoreCollections(collections) {
    const nextBatch = collections.slice(currentIndex, currentIndex + itemsPerLoad);
    displayedCollections = [...displayedCollections, ...nextBatch];
    currentIndex += itemsPerLoad;
  }

  function handleScroll() {
    if (loadingMore) return;
    
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 1000) {
      loadMore();
    }
  }

  function loadMore() {
    if (currentIndex >= [...featuredCollections, ...otherCollections].length) return;
    
    loadingMore = true;
    setTimeout(() => {
      loadMoreCollections([...featuredCollections, ...otherCollections]);
      loadingMore = false;
    }, 500);
  }

  function getCollectionStatus(collection) {
    const now = Math.floor(Date.now() / 1000);
    
    // Check if any mint option is currently live
    const whitelistLive = collection.whitelistStart && collection.whitelistEnd && 
                         now >= collection.whitelistStart && now <= collection.whitelistEnd;
    const publicLive = collection.publicStart && collection.publicEnd && 
                      now >= collection.publicStart && now <= collection.publicEnd;
    
    if (whitelistLive || publicLive) {
      return 'LIVE';
    }
    
    // Check if upcoming
    const whitelistUpcoming = collection.whitelistStart && now < collection.whitelistStart;
    const publicUpcoming = collection.publicStart && now < collection.publicStart;
    
    if (whitelistUpcoming || publicUpcoming) {
      return 'UPCOMING';
    }
    
    return 'ENDED';
  }

  function getStatusClass(status) {
    switch(status) {
      case 'LIVE': return 'bg-green text-black';
      case 'UPCOMING': return 'bg-yellow text-black';
      case 'ENDED': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  }

  function formatPrice(price) {
    if (!price || price === "0") return "Free";
    try {
      return formatEther(price) + " U2U";
    } catch {
      return "TBA";
    }
  }

  function getPriceDisplay(collection) {
    const prices = [];
    if (collection.whitelistPrice) {
      prices.push(`WL: ${formatPrice(collection.whitelistPrice)}`);
    }
    if (collection.publicPrice) {
      prices.push(`Public: ${formatPrice(collection.publicPrice)}`);
    }
    return prices.join(" • ") || "TBA";
  }
</script>

<svelte:head>
  <title>Ultra Market - NFT Mint</title>
</svelte:head>
<div class="flex font-Oxanium bg-black w-full min-h-screen text-white">
    <div class="flex flex-col w-full max-w-screen-2xl mx-auto">

        <div class="flex flex-col">

        <Nav/>
        <button 
                    class="w-fit md:text-2xl px-1 py-1 mb-2  mt-4 mx-2
        bg-gradient-to-b from-amber-500 to-amber-700 hover:from-amber-400 hover:to-amber-600 
        text-white font-semibold rounded-lg border-1 
        border-amber-300 shadow-lg transform hover:scale-105 transition-all duration-200"
            on:click={()=>goto(`../launchpad/mylaunch`)}>
                Launch your NFT
        </button>
        <h2 class="text-xl md:text-2xl font-bold text-button mt-2 mb-2">Featured by team</h2>
        {#if loading}
            <div class="flex items-center justify-center min-h-screen">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-button"></div>
            </div>
        {:else}
            <!-- Featured Collection (Large Hero) -->
            {#if featuredCollection}
            <div class="relative h-96 md:h-[500px] mb-12 overflow-hidden">
                <img 
                src="{config.rpcUrl}/banner/{featuredCollection.contractAddress}"
                alt="{featuredCollection.name}"
                class="w-full h-full object-cover"
                loading="lazy"
                on:error={(e) => e.target.style.display = 'none'}
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <!-- Content Overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div class="flex items-end gap-6">
                    <img 
                        src="{config.rpcUrl}/logo/{featuredCollection.contractAddress}/200/200"
                        alt="{featuredCollection.name}"
                        class="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border-2 border-white/20"
                        loading="lazy"
                        on:error={(e) => e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" fill="%23333"/></svg>'}
                    />
                    <div>
                        <h1 class="text-2xl md:text-4xl font-bold mb-2">{featuredCollection.name}</h1>
                        <div class="flex items-center gap-4">
                        <span class="px-3 py-1 rounded-full text-xs font-bold {getStatusClass(getCollectionStatus(featuredCollection))}">
                            {getCollectionStatus(featuredCollection)}
                        </span>
                        <span class="text-sm text-gray-300">Max Supply: {featuredCollection.maxSupply || 'Unlimited'}</span>
                        </div>
                    </div>
                    </div>
                    <div class="text-right flex justify-start flex-col items-start">
                        <div class="text-lg text-gray-300 mb-1">Price</div>
                        <div class="text-lg items-center flex gap-1">
                            <span class="text-gray-400">WL: </span>
                            <span class="text-white"> {formatPrice(featuredCollection.whitelistPrice)}</span>
                            <img class="h-[16px] mb-[2px]  inline-block" src="/icons/U2Usm.png" alt="small coin icon"/>
                        </div>
                        <div class="text-lg items-center flex gap-1">
                            <span class="text-gray-400">Public: </span>
                            <span class="text-white"> {formatPrice(featuredCollection.publicPrice)}</span>
                            <img class="h-[16px] mb-[2px]  inline-block" src="/icons/U2Usm.png" alt="small coin icon"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/if}

            <div class="w-full mx-auto px-4 md:px-6 pb-12">
            <!-- Featured by team -->
            {#if featuredCollections.length > 0}
                <section class="mb-12">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {#each displayedCollections.filter(c => c.checkMark) as collection}
                            <a href={`./mint/${collection.contractAddress}`}>
                                <div class="bg-launchpadDarkMedium rounded-lg overflow-hidden hover:bg-darkCardHover transition-colors cursor-pointer">
                                    <div class="relative h-48">
                                    <img 
                                        src="{config.rpcUrl}/banner/{collection.contractAddress}"
                                        alt="{collection.name}"
                                        class="w-full h-full object-cover"
                                        loading="lazy"
                                        on:error={(e) => e.target.style.display = 'none'}
                                    />
                                    <div class="absolute top-3 right-3">
                                        <span class="px-2 py-1 rounded-full text-xs font-bold {getStatusClass(getCollectionStatus(collection))}">
                                        {getCollectionStatus(collection)}
                                        </span>
                                    </div>
                                    <div class="absolute bottom-3 left-3">
                                        <img 
                                        src="{config.rpcUrl}/logo/{collection.contractAddress}/200/200"
                                        alt="{collection.name}"
                                        class="w-12 h-12 rounded-lg object-cover border-2 border-white/20"
                                        loading="lazy"
                                        on:error={(e) => e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" fill="%23333"/></svg>'}
                                        />
                                    </div>
                                    </div>
                                    <div class="p-4">
                                    <h3 class="text-lg font-semibold mb-2 truncate">{collection.name}</h3>
                                    <div class="text-sm text-gray-300 mb-2">
                                        Max Supply: {collection.maxSupply || 'Unlimited'}
                                    </div>
                                        <div class="text-sm items-center flex gap-1">
                                            <span class="text-gray-400">WL: </span>
                                            <span class="text-white"> {formatPrice(collection.whitelistPrice)}</span>
                                            <img class="h-[16px] mb-[2px]  inline-block" src="/icons/U2Usm.png" alt="small coin icon"/>
                                        </div>
                                        <div class="text-sm items-center flex gap-1">
                                            <span class="text-gray-400">Public: </span>
                                            <span class="text-white"> {formatPrice(collection.publicPrice)}</span>
                                            <img class="h-[16px] mb-[2px]  inline-block" src="/icons/U2Usm.png" alt="small coin icon"/>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        {/each}
                    </div>
        
                </section>
            {/if}

            <!-- Created by community -->
            {#if otherCollections.length > 0}
                <section>
                <h2 class="text-2xl md:text-3xl font-bold text-button mb-8">Created by community</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {#each displayedCollections.filter(c => !c.checkMark) as collection}
                        <a href={`./mint/${collection.contractAddress}`}>
                            <div class="bg-launchpadDarkMedium rounded-lg overflow-hidden hover:bg-darkCardHover transition-colors cursor-pointer">
                                <div class="relative h-48">
                                <img 
                                    src="{config.rpcUrl}/banner/{collection.contractAddress}"
                                    alt="{collection.name}"
                                    class="w-full h-full object-cover"
                                    loading="lazy"
                                    on:error={(e) => e.target.style.display = 'none'}
                                />
                                <div class="absolute top-3 right-3">
                                    <span class="px-2 py-1 rounded-full text-xs font-bold {getStatusClass(getCollectionStatus(collection))}">
                                    {getCollectionStatus(collection)}
                                    </span>
                                </div>
                                <div class="absolute bottom-3 left-3">
                                    <img 
                                    src="{config.rpcUrl}/logo/{collection.contractAddress}/200/200"
                                    alt="{collection.name}"
                                    class="w-12 h-12 rounded-lg object-cover border-2 border-white/20"
                                    loading="lazy"
                                    on:error={(e) => e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="48" height="48" fill="%23333"/></svg>'}
                                    />
                                </div>
                                </div>
                                <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2 truncate">{collection.name}</h3>
                                <div class="text-sm text-gray-300 mb-2">
                                    Max Supply: {collection.maxSupply || 'Unlimited'}
                                </div>
                                    <div class="text-sm items-center flex gap-1">
                                        <span class="text-gray-400">WL: </span>
                                        <span class="text-white"> {formatPrice(collection.whitelistPrice)}</span>
                                        <img class="h-[16px] mb-[2px]  inline-block" src="/icons/U2Usm.png" alt="small coin icon"/>
                                    </div>
                                    <div class="text-sm items-center flex gap-1">
                                        <span class="text-gray-400">Public: </span>
                                        <span class="text-white"> {formatPrice(collection.publicPrice)}</span>
                                        <img class="h-[16px] mb-[2px]  inline-block" src="/icons/U2Usm.png" alt="small coin icon"/>
                                    </div>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
                </section>
            {/if}

            <!-- Loading More Indicator -->
            {#if loadingMore}
                <div class="flex justify-center mt-12">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-button"></div>
                </div>
            {/if}

            <!-- Empty State -->
            {#if !loading && allCollections.length === 0}
                <div class="text-center py-20">
                <div class="text-6xl mb-4">🎨</div>
                <h3 class="text-xl font-semibold mb-2">No collections available</h3>
                <p class="text-gray-400">Check back later for new NFT drops!</p>
                </div>
            {/if}
            </div>
        {/if}
        </div>
    </div>
</div>