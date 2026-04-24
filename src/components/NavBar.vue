<template>
  <div>
    <!-- Accessibility: Skip to content -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <nav class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <!-- Logo -->
<RouterLink to="/" class="flex items-center group" aria-label="CareNest Living Home">
  <div class="flex items-baseline gap-0.5 select-none">
    <!-- "Care" in dark serif -->
    <span
      class="text-2xl font-bold tracking-tight text-stone-800 group-hover:text-stone-700 transition-colors"
      style="font-family:'Playfair Display',serif; letter-spacing:-0.5px"
    >
      Care
    </span>
    <!-- "Nest" in emerald serif -->
    <span
      class="text-2xl font-bold tracking-tight text-emerald-700 group-hover:text-emerald-600 transition-colors"
      style="font-family:'Playfair Display',serif; letter-spacing:-0.5px"
    >
      Nest
    </span>
    <!-- Separator dot -->
    <span class="text-emerald-400 mx-1 text-xl font-bold leading-none" aria-hidden="true">·</span>
    <!-- "Living" in small caps Inter -->
    <span
      class="text-xs font-bold text-stone-400 tracking-[0.25em] uppercase self-center group-hover:text-emerald-600 transition-colors"
      style="font-family:'Inter',sans-serif"
    >
      Living
    </span>
  </div>
</RouterLink>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8 text-stone-600 font-medium text-sm">
          <RouterLink to="/" class="hover:text-emerald-700 transition-colors" active-class="text-emerald-700 font-semibold">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-emerald-700 transition-colors" active-class="text-emerald-700 font-semibold">About</RouterLink>
          <RouterLink to="/services" class="hover:text-emerald-700 transition-colors" active-class="text-emerald-700 font-semibold">Services</RouterLink>
          <RouterLink to="/locations" class="hover:text-emerald-700 transition-colors" active-class="text-emerald-700 font-semibold">Locations</RouterLink>
          <RouterLink to="/contact" class="hover:text-emerald-700 transition-colors" active-class="text-emerald-700 font-semibold">Contact</RouterLink>
          <RouterLink to="/contact"
            class="bg-emerald-700 text-white px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-colors text-sm font-semibold shadow-sm">
            Book a Tour
          </RouterLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button @click="menuOpen = !menuOpen"
          class="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation menu">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Dropdown -->
      <transition name="slide-down">
        <div v-if="menuOpen" class="md:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-3">
          <RouterLink @click="menuOpen = false" to="/" class="block py-2 text-stone-700 font-medium hover:text-emerald-700">Home</RouterLink>
          <RouterLink @click="menuOpen = false" to="/about" class="block py-2 text-stone-700 font-medium hover:text-emerald-700">About</RouterLink>
          <RouterLink @click="menuOpen = false" to="/services" class="block py-2 text-stone-700 font-medium hover:text-emerald-700">Services</RouterLink>
          <RouterLink @click="menuOpen = false" to="/locations" class="block py-2 text-stone-700 font-medium hover:text-emerald-700">Locations</RouterLink>
          <RouterLink @click="menuOpen = false" to="/contact" class="block py-2 text-stone-700 font-medium hover:text-emerald-700">Contact</RouterLink>
          <RouterLink @click="menuOpen = false" to="/contact"
            class="block text-center bg-emerald-700 text-white py-3 rounded-full font-semibold mt-2">
            Book a Tour
          </RouterLink>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
