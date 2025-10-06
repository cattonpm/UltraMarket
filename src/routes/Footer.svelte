<script>

    import { goto } from '$app/navigation';
</script>
<style>
.hide-scrollbar {
  -ms-overflow-style: none;  
  scrollbar-width: none; 
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; 
}
.orange-text {
    background-image: linear-gradient(to bottom, #FD8900, #F9BC20);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.shrink-self-hover:hover {
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
}

.shrink-self-hover-sm:hover {
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
}

</style>
<!---->

<div class="flex flex-wrap justify-between items-end text-white lg:gap-[30px] gap-[10px] pb-2 z-30 ">
    <div class="flex flex-col gap-[5px]">
        <!--Logo-->
        <button class="flex items-center gap-[5px]" on:click={() =>goto('/')}>
            <img class="h-10 inline-block" src="/logo.png" alt="Ultra Market logo"/>
            <span class="text-xl font-semibold">
                Ultra Market
            </span>
        </button>
        <span class="text-sm">
            The truly permissionless Marketplace & Launchpad for NFTs on U2U
        </span>
    </div>  
    <div class="flex flex-col gap-[5px] justfity-start items-start">
        <span class=" ">
            Contact
        </span>
        <span class="text-sm"> npmtns99@gmail.com</span>
    </div>

</div>
<div class="flex flex-wrap justify-center items-end text-lightGray lg:gap-[30px] gap-[10px] pb-2 z-30 ">
    <span class="text-sm">&copy; 2025 ultramarket.cc . All rights reserved.</span>
</div>
