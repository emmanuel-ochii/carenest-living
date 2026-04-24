<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">

    <!-- Background Image with Ken Burns effect -->
    <img
      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=90"
      class="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-slow-zoom"
      alt="Happy seniors enjoying community life in Canada"
    />

    <!-- Gradient overlay — stronger left, fades right -->
    <div class="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/60 to-transparent"></div>

    <!-- Bottom fade for smooth section transition -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

    <!-- Hero Content — vertically and horizontally aligned -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-32">
      <div class="max-w-2xl">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-500/40 rounded-full px-4 py-2 mb-6">
          <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span class="text-emerald-300 text-sm font-semibold tracking-wide uppercase">
            Proudly Serving Canadians Since 2009
          </span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
          Your Home.
          <br />
          <span class="text-emerald-400">Your Life.</span>
          <br />
          Your Way.
        </h1>

        <!-- Subheading -->
        <p class="text-xl md:text-2xl text-stone-300 leading-relaxed mb-10 max-w-xl">
          Independent supportive living across Canada — where comfort, dignity, and
          professional care come together in a place that feels like home.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 mb-14">
          <RouterLink to="/contact"
            class="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-emerald-900/40">
            Book a Free Tour
          </RouterLink>
          <RouterLink to="/services"
            class="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition backdrop-blur-sm">
            Explore Services
          </RouterLink>
        </div>

        <!-- Trust Indicators -->
        <div class="flex flex-wrap gap-6 text-stone-300 text-sm">
          <span class="flex items-center gap-2">
            <span class="text-emerald-400 text-lg">✓</span> BC, Alberta & Ontario locations
          </span>
          <span class="flex items-center gap-2">
            <span class="text-emerald-400 text-lg">✓</span> Alberta Seniors Benefit accepted
          </span>
          <span class="flex items-center gap-2">
            <span class="text-emerald-400 text-lg">✓</span> 24/7 on-site staff
          </span>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
        <div class="w-1.5 h-3 bg-white/60 rounded-full"></div>
      </div>
    </div>

  </section>
</template>

<style scoped>
@keyframes slow-zoom {
  from { transform: scale(1.05); }
  to   { transform: scale(1.15); }
}
.animate-slow-zoom {
  animation: slow-zoom 20s ease-in-out infinite alternate;
}
</style>
