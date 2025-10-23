<script>
    import hero from '$lib/assets/hero/hero.png';
    import build_img from '$lib/assets/nav_buttons/exploded_render.png';
    import use_img from '$lib/assets/nav_buttons/usage.png';
    import learn_img from '$lib/assets/nav_buttons/experiments_spread.png';
    import Mainpage from '$lib/text/mainpage.svx';
</script>

<div class="flex flex-col">
    <!-- hero -->
    <div class="md:h-[60vh] rounded-md relative w-full md:w-max mx-auto">
        <img src={hero} alt="Wavetable and experiments" class="h-full rounded-md" />
        <div class="absolute left-0 bottom-0 md:max-w-1/3 space-y-2 md:space-y-4 translate-y-8 md:translate-y-0">
            <h1 class="text-2xl xs:text-4xl sm:text-[2.5rem] md:text-5xl font-bold">The<br>Wavetable<br>Project</h1>
            <h2 class="text-xs md:text-xl">
                <span class="inline-block">$120 ocean/atmosphere</span>
                <span class="inline-block">physics simulator</span>
            </h2>
        </div>
    </div>
    <!-- nav buttons -->
    <div class="grid grid-cols-3 gap-4 mt-12 md:mt-12 max-w-[79ch] mx-auto">
        <a href="/build" class="bg-amber-100 w-full aspect-[3/2] overflow-hidden border-2 rounded-md relative">
            <img src={build_img} alt="build a wavetable" class="m-auto -translate-y-[20%] scale-90 opacity-10 hover:opacity-30 transition-all relative" />
            <h3 class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-bold pointer-events-none">Build&nbsp;⮕</h3>
        </a>
        <a href="/use" class="bg-green-100 w-full aspect-[3/2] overflow-hidden border-2 rounded-md relative">
            <img src={use_img} alt="build a wavetable" class="m-auto -translate-y-[15%] opacity-10 hover:opacity-30 transition-all relative" />
            <h3 class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-bold pointer-events-none">Use&nbsp;⮕</h3>
        </a>
        <a href="/learn" class="bg-blue-100 w-full aspect-[3/2] overflow-hidden border-2 rounded-md relative">
            <img src={learn_img} alt="build a wavetable" class="m-auto slate-y-[20%] scale-90 opacity-10 hover:opacity-30 transition-all relative" />
            <h3 class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-bold pointer-events-none">Learn&nbsp;⮕</h3>
        </a>
        <!-- TODO: big nav buttons with pictures: exploded view for construction, photo of experiments/ppl for usage, and experients-->
    </div>

    <div class="prose max-w-none mt-8">
        <Mainpage />
    </div>
</div>