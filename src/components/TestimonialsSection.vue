<template>
  <section class="py-24 bg-emerald-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-14">
        <h2 class="text-4xl font-bold text-stone-800">What Families Say</h2>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="t in testimonials" :key="t.name"
          class="bg-white rounded-2xl p-8 shadow-sm">
          <p class="text-stone-600 leading-relaxed mb-6 italic">"{{ t.quote }}"</p>
          <div class="flex items-center gap-3">
            <img :src="t.avatar" class="w-12 h-12 rounded-full object-cover" :alt="t.name" />
            <div>
              <p class="font-bold text-stone-800">{{ t.name }}</p>
              <p class="text-sm text-stone-400">{{ t.relation }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "Moving Mum to CareNest was the best decision we made. She feels completely at home and the staff are genuinely caring.",
    name: "Margaret O'Brien",
    relation: "Daughter of Resident",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop"
  },
  {
    quote: "I was nervous about leaving my house, but my apartment here feels completely like mine. I have my patio, my kitchen, and I'm never lonely.",
    name: "Harold Stevens",
    relation: "Resident since 2023",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
  },
  {
    quote: "The staff never make Dad feel like a patient. He's treated with full respect and dignity every single day.",
    name: "Claire Donnelly",
    relation: "Son of Resident",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop"
  },
]
</script>
