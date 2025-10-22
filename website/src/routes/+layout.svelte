<script>
	import '../app.css';
	import favicon from '$lib/assets/wavetable_logo.png';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>The Wavetable Project</title>
</svelte:head>

{@render children?.()}
