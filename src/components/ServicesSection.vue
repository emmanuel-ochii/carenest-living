<template>
  <section id="services" class="py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">
        <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
        <h2 class="text-4xl font-bold text-stone-800">Support Built Around You</h2>
        <p class="text-stone-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Every resident receives personalised support while maintaining full independence and dignity.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="service in services"
          :key="service.title"
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
        >
          <!-- Photo Header -->
          <div class="relative h-52 overflow-hidden">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <span class="absolute bottom-3 left-4 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {{ service.tag }}
            </span>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-stone-500 leading-relaxed text-sm">{{ service.description }}</p>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    tag: 'Dining',
    title: 'Chef-Prepared Daily Dining',
    description: 'Three nutritious meals daily in a warm communal dining room, with special dietary and cultural meal accommodations.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop'
  },
  {
    tag: 'Residence',
    title: 'Private Suites & Apartments',
    description: 'Spacious suites with full kitchenettes, private entrances, accessible bathrooms, and personal patios or balconies.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop'
  },
  {
    tag: 'Outdoors',
    title: 'Gardens & Walking Paths',
    description: 'Beautifully maintained grounds with walking paths, vegetable gardens, and outdoor seating for daily fresh air.',
    image: 'https://images.unsplash.com/photo-1447452001526-abe8a6bd7ac5?w=600&auto=format&fit=crop'
  },
  {
    tag: 'Safety',
    title: '24/7 Professional Staff',
    description: 'Friendly, trained staff on-site around the clock — never intrusive, always available when you need them.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop'
  },
  {
    tag: 'Lifestyle',
    title: 'Activities & Social Programs',
    description: 'Art classes, fitness sessions, social events, and learning programs to keep life engaging and deeply connected.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop'
  },
  {
    tag: 'Housekeeping',
    title: 'Weekly Housekeeping',
    description: 'Weekly housekeeping and full linen service keeps your home fresh so you can focus on what you truly enjoy.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&auto=format&fit=crop'
  },
  {
    tag: 'Care',
    title: 'Care Coordination',
    description: 'Optional coordination with external home-care providers and health professionals as your needs evolve.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop'
  },
  {
    tag: 'Transport',
    title: 'Scheduled Transportation',
    description: 'Reliable transport for medical appointments, errands, and group outings across the local area.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop'
  },
  {
    tag: 'Affordability',
    title: 'Flexible & Subsidised Plans',
    description: 'Transparent pricing with BC and Alberta government subsidy acceptance, making quality care accessible to all.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop'
  },
]
</script>
