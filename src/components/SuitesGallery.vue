<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">
        <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">Inside CareNest</p>
        <h2 class="text-4xl font-bold text-stone-800">Tour Our Suites</h2>
        <p class="text-stone-500 mt-4 max-w-xl mx-auto text-lg leading-relaxed">
          Every suite is designed to feel like your own home — private, spacious, and accessible.
          Click any photo to explore.
        </p>
      </div>

      <!-- Suite Type Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-10">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="activeTab = tab"
          :class="[
            'px-5 py-2 rounded-full text-sm font-semibold transition-all',
            activeTab === tab
              ? 'bg-emerald-700 text-white shadow-md'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <button
          v-for="(photo, index) in filteredPhotos"
          :key="index"
          @click="openModal(index)"
          class="relative group overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500"
          :aria-label="`View photo: ${photo.caption}`"
        >
          <img
            :src="photo.src"
            :alt="photo.caption"
            class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <span class="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm bg-black/50 px-4 py-2 rounded-full">
              View Photo
            </span>
          </div>
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p class="text-white text-sm font-medium">{{ photo.caption }}</p>
          </div>
        </button>
      </div>

      <!-- Lightbox Modal -->
      <Teleport to="body">
        <transition name="fade">
          <div
            v-if="modalOpen"
            class="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            @click.self="closeModal"
            role="dialog"
            aria-modal="true"
            :aria-label="filteredPhotos[currentIndex]?.caption"
          >
            <!-- Close Button -->
            <button @click="closeModal"
              class="absolute top-5 right-5 text-white bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition"
              aria-label="Close gallery">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- Prev Button -->
            <button @click="prev"
              class="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition"
              aria-label="Previous photo">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <!-- Image -->
            <transition name="photo-swap" mode="out-in">
              <div :key="currentIndex" class="max-w-4xl w-full">
                <img
                  :src="filteredPhotos[currentIndex]?.src"
                  :alt="filteredPhotos[currentIndex]?.caption"
                  class="w-full max-h-[75vh] object-contain rounded-xl"
                />
                <p class="text-white text-center mt-4 font-medium text-lg">
                  {{ filteredPhotos[currentIndex]?.caption }}
                </p>
                <p class="text-stone-400 text-center text-sm mt-1">
                  {{ currentIndex + 1 }} / {{ filteredPhotos.length }}
                </p>
              </div>
            </transition>

            <!-- Next Button -->
            <button @click="next"
              class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 rounded-full p-3 transition"
              aria-label="Next photo">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </transition>
      </Teleport>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const tabs = ['All Suites', 'Studio', '1-Bedroom', '2-Bedroom', 'Common Areas']
const activeTab = ref('All Suites')
const modalOpen = ref(false)
const currentIndex = ref(0)

const photos = [
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&auto=format&fit=crop', caption: 'Bright studio suite living area', type: 'Studio' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&auto=format&fit=crop', caption: 'Modern kitchenette with full appliances', type: 'Studio' },
  { src: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?w=900&auto=format&fit=crop', caption: 'Private patio with garden view', type: '1-Bedroom' },
  { src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop', caption: '1-bedroom suite — bedroom', type: '1-Bedroom' },
  { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&auto=format&fit=crop', caption: 'Accessible walk-in bathroom', type: '1-Bedroom' },
  { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&auto=format&fit=crop', caption: 'Spacious 2-bedroom suite living room', type: '2-Bedroom' },
  { src: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=900&auto=format&fit=crop', caption: '2-bedroom suite — dining area', type: '2-Bedroom' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop', caption: 'Community dining room', type: 'Common Areas' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop', caption: 'Activity and wellness studio', type: 'Common Areas' },
  { src: 'https://images.unsplash.com/photo-1447452001526-abe8a6bd7ac5?w=900&auto=format&fit=crop', caption: 'Landscaped gardens and walking path', type: 'Common Areas' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&auto=format&fit=crop', caption: 'Outdoor lounge and seating area', type: 'Common Areas' },
  { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=900&auto=format&fit=crop', caption: 'Cosy reading and library lounge', type: 'Common Areas' },
]

const filteredPhotos = computed(() =>
  activeTab.value === 'All Suites' ? photos : photos.filter(p => p.type === activeTab.value)
)

const openModal = (index) => { currentIndex.value = index; modalOpen.value = true }
const closeModal = () => { modalOpen.value = false }
const prev = () => { currentIndex.value = (currentIndex.value - 1 + filteredPhotos.value.length) % filteredPhotos.value.length }
const next = () => { currentIndex.value = (currentIndex.value + 1) % filteredPhotos.value.length }
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.photo-swap-enter-active, .photo-swap-leave-active { transition: all 0.2s ease; }
.photo-swap-enter-from { opacity: 0; transform: scale(0.97); }
.photo-swap-leave-to { opacity: 0; transform: scale(1.03); }
</style>
