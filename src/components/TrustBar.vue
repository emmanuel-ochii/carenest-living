<template>
  <section class="bg-white border-y border-stone-100 py-10">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Animated Stats Row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center">
        <div v-for="stat in stats" :key="stat.label" class="group">
          <p class="text-4xl font-bold text-emerald-700 mb-1" style="font-family:'Playfair Display',serif">
            {{ stat.value }}
          </p>
          <p class="text-stone-500 text-sm font-medium">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-stone-100 mb-8"></div>

      <!-- Trust Badges Row -->
      <div class="flex flex-wrap items-center justify-center gap-8">
        <div v-for="badge in badges" :key="badge.text"
          class="flex items-center gap-3 bg-stone-50 border border-stone-100 rounded-full px-5 py-2.5">
          <img :src="badge.icon" :alt="badge.text" class="w-7 h-7 object-contain rounded-full" />
          <span class="text-stone-600 text-sm font-semibold">{{ badge.text }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '15+', label: 'Years Serving Canadians' },
  { value: '400+', label: 'Residents Across Canada' },
  { value: '98%', label: 'Family Satisfaction Rate' },
  { value: '24/7', label: 'Professional Staff On-Site' },
]

const badges = [
  {
    text: 'Canadian Accredited',
    icon: 'https://images.unsplash.com/photo-1518826778770-a729fb53327c?w=100&auto=format&fit=crop'
  },
  {
    text: 'Best of Senior Living 2024',
    icon: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&auto=format&fit=crop'
  },
  {
    text: 'BC Seniors Supplement Accepted',
    icon: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=100&auto=format&fit=crop'
  },
  {
    text: 'Alberta Seniors Benefit Partner',
    icon: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=100&auto=format&fit=crop'
  },
]
</script>
