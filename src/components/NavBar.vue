<template>
  <nav class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2">
        <span class="text-2xl font-bold text-emerald-700">CareNest</span>
        <span class="text-sm text-stone-500 font-medium">Living</span>
      </RouterLink>
      <div class="hidden md:flex items-center gap-8 text-stone-600 font-medium">
        <RouterLink to="/" class="hover:text-emerald-700 transition">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-emerald-700 transition">About</RouterLink>
        <RouterLink to="/services" class="hover:text-emerald-700 transition">Services</RouterLink>
        <RouterLink to="/contact" class="hover:text-emerald-700 transition">Contact</RouterLink>
        <a href="#tour" class="bg-emerald-700 text-white px-5 py-2 rounded-full hover:bg-emerald-800 transition text-sm">
          Book a Tour
        </a>
      </div>
    </div>
  </nav>
</template>
