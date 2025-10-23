<script>
    export let data;
    import Header from '$lib/Header.svelte';
</script>

<svelte:head>
    <title>{data.page.charAt(0).toUpperCase() + data.page.slice(1)} - Wavetable Project</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
    <!-- <a href="/" class="text-blue-600 hover:underline mb-4 inline-block">← Back to home</a> -->
    <Header />
    
    <div class="prose prose-lg max-w-none">
        <svelte:component this={data.component} />
    </div>
</div>