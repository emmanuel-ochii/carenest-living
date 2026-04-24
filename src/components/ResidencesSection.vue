<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">Our Residences</p>
          <h2 class="text-4xl font-bold text-stone-800 mb-6">A Real Home, Not a Facility</h2>
          <p class="text-stone-500 text-lg mb-8 leading-relaxed">
            Our residences are designed to feel like a true home — private, spacious, and tailored to changing needs.
            Every detail reflects dignity and comfort.
          </p>
          <ul class="space-y-4">
            <li v-for="feature in features" :key="feature" class="flex items-center gap-3 text-stone-700">
              <span class="text-emerald-600 text-xl">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <a href="#tour" class="inline-block mt-10 bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition">
            View Available Suites
          </a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop" class="rounded-2xl w-full h-48 object-cover" alt="Comfortable living room" />
          <img src="https://images.unsplash.com/photo-1560440021-33f9b867899d?w=600&auto=format&fit=crop" class="rounded-2xl w-full h-48 object-cover mt-8" alt="Senior relaxing outdoors" />
          <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop" class="rounded-2xl w-full h-48 object-cover" alt="Modern kitchen" />
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop" class="rounded-2xl w-full h-48 object-cover mt-8" alt="Garden walkway" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Private entrances and personal outdoor space',
  'Full kitchenettes or optional meal plans',
  'Accessible bathrooms with walk-in showers',
  'Large windows and natural lighting',
  'Emergency pull-cord and intercom system',
  'Broadband internet and cable TV included',
]
</script>
