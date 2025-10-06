<script>
  import { page } from '$app/stores';
  import { derived } from 'svelte/store';

  // Default values
  let defaultTitle = "Ultra Market - a permissionless Marketplace & Launchpad for NFT";
  let defaultDescription = "Ultra Market is the permissionless Marketplace & Launchpad for NFTs";
  let defaultKeyword = "U2U NFT Marketplace, U2U NFT Launchpad, AI"
  // Base URL for your site
  const baseUrl = "https://ultramarket.cc";

  // Derive the full URL for the current page
  const url = derived(page, $page => `${baseUrl}${$page.url.pathname}`);

  // Reactive variables for SEO
  export let title;
  export let description;
  export let keywords;
  // Update values based on the page
  $: {
    title = title || defaultTitle;
    description = description || defaultDescription;
    keywords  = keywords || defaultKeyword;
  }
</script>

<svelte:head>
  <!-- Canonical Tag -->
  <link rel="canonical" href={$url} />

  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
</svelte:head>

