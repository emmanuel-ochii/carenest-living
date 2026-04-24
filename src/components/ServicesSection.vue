<template>
  <section id="services" class="py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
        <h2 class="text-4xl font-bold text-stone-800">Support Built Around You</h2>
        <p class="text-stone-500 mt-4 max-w-2xl mx-auto text-lg">
          Every resident receives personalised support while maintaining full independence and dignity.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title"
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition group">
          <div class="text-4xl mb-4">{{ service.icon }}</div>
          <h3 class="text-xl font-bold text-stone-800 mb-2 group-hover:text-emerald-700 transition">
            {{ service.title }}
          </h3>
          <p class="text-stone-500 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: '🍽️', title: 'Daily Dining', description: 'Chef-prepared nutritious meals served in a warm communal dining room, with menu variety and dietary accommodations.' },
  { icon: '🏠', title: 'Private Residences', description: 'Spacious suites with full kitchenettes, private entrances, accessible bathrooms, and personal patios or balconies.' },
  { icon: '🌿', title: 'Outdoor Spaces', description: 'Walking paths, vegetable gardens, and beautifully maintained grounds for daily fresh air and gentle activity.' },
  { icon: '🤝', title: '24/7 Staff Support', description: 'Friendly, professional staff on-site around the clock — never intrusive, always available when you need them.' },
  { icon: '🧹', title: 'Housekeeping', description: 'Weekly housekeeping and linen service keeps your home fresh so you can focus on what you enjoy.' },
  { icon: '🎨', title: 'Lifestyle Programs', description: 'Art classes, fitness sessions, social events, and learning programs to keep life engaging and connected.' },
  { icon: '💊', title: 'Care Coordination', description: 'Optional coordination with external home-care providers and health professionals as your needs evolve.' },
  { icon: '💳', title: 'Affordable Plans', description: 'Flexible pricing models and subsidised living options to ensure quality care is accessible to everyone.' },
  { icon: '🔒', title: 'Safe & Secure', description: 'Secure building access, emergency call systems, and a watchful community environment for total peace of mind.' },
]
</script>
