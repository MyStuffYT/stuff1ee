<script lang="ts">
    import { preloadMedia } from './preload'
    import { fade } from 'svelte/transition';
    import bootimg from '../assets/boot.png';

    let assets: string[] = [bootimg]

    async function preloadAll() {
        Promise.all(assets.map(preloadMedia))
    }
    let boot = $state(true)
    
    let bootstate = $state('loading assets...')

    // preloading!!!! imf inally done with the bootscreen work

    preloadAll().then(() => {
        setTimeout(() => {
            // we should do this later, first i need to code the normal windows ui at least
            // alert("play song.")
            boot = false
        }, 10000)
    })
</script>

{#if boot}
    <div transition:fade={{duration: 750}} class="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center text-center">
        <img src={bootimg} alt="stuff1ee OS logo" class="h-32 w-auto -translate-y-full -mb-24">
        <p class="text-red-400">{bootstate}</p>
    </div>
{/if}