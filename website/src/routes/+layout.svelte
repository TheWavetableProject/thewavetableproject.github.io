<script>
	import '../app.css';
	import favicon from '$lib/assets/wavetable_logo.png';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>The Wavetable Project</title>
</svelte:head>

<main class="max-w-[79ch] mx-auto bg-bg fg-fg p-4 md:p-0 space-y-8">
	{@render children?.()}
</main>