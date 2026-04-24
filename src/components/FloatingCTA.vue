<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

    <!-- Expanded Options -->
    <transition name="pop-up">
      <div v-if="expanded" class="flex flex-col gap-2 mb-1">
        <a href="tel:+12505550192"
          class="flex items-center gap-3 bg-white shadow-lg border border-stone-100 text-stone-800 px-4 py-3 rounded-full font-semibold text-sm hover:bg-stone-50 transition-all">
          <span class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">📞</span>
          Call Us Now
        </a>
        <RouterLink to="/contact"
          class="flex items-center gap-3 bg-white shadow-lg border border-stone-100 text-stone-800 px-4 py-3 rounded-full font-semibold text-sm hover:bg-stone-50 transition-all">
          <span class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">📅</span>
          Book a Tour
        </RouterLink>
        <a href="mailto:hello@carenestliving.ca"
          class="flex items-center gap-3 bg-white shadow-lg border border-stone-100 text-stone-800 px-4 py-3 rounded-full font-semibold text-sm hover:bg-stone-50 transition-all">
          <span class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">✉️</span>
          Send Email
        </a>
      </div>
    </transition>

    <!-- Toggle Button -->
    <button
      @click="expanded = !expanded"
      class="w-14 h-14 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300"
      :aria-label="expanded ? 'Close contact options' : 'Open contact options'"
      :aria-expanded="expanded"
    >
      <svg v-if="!expanded" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const expanded = ref(false)
</script>

<style scoped>
.pop-up-enter-active {
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pop-up-leave-active {
  transition: all 0.15s ease-in;
}
.pop-up-enter-from,
.pop-up-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.95);
}
</style>
