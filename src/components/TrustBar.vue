<template>
  <section class="relative overflow-hidden">

    <!-- Full bleed two-column layout -->
    <div class="grid lg:grid-cols-2 min-h-[600px]">

      <!-- LEFT: Full-bleed photo with quote overlay -->
      <div class="relative min-h-[400px] lg:min-h-full">
        <img
          src="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=1000&auto=format&fit=crop&q=85"
          alt="Senior resident enjoying a warm moment at CareNest"
          class="absolute inset-0 w-full h-full object-cover object-center"
        />
        <!-- Dark gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/30 to-transparent"></div>
        <!-- Quote card at bottom -->
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
            <p class="text-white text-lg leading-relaxed italic mb-4">
              "Moving into CareNest was the best decision our family made.
              Mum feels at home, respected, and truly cared for every day."
            </p>
            <div class="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop"
                alt="Margaret O'Brien"
                class="w-10 h-10 rounded-full object-cover border-2 border-emerald-400"
              />
              <div>
                <p class="text-white font-semibold text-sm">Margaret O'Brien</p>
                <p class="text-emerald-300 text-xs">Daughter of Resident — Kelowna, BC</p>
              </div>
              <!-- Star rating -->
              <div class="ml-auto flex gap-0.5">
                <span v-for="i in 5" :key="i" class="text-amber-400 text-sm">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT: Trust Content -->
      <div class="bg-stone-50 flex flex-col justify-center px-10 py-16 lg:px-16">

        <p class="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-3">
          Why Families Choose CareNest
        </p>
        <h2 class="text-4xl font-bold text-stone-800 leading-tight mb-4"
          style="font-family:'Playfair Display',serif">
          Canada's Most Trusted<br />
          <span class="text-emerald-700">Supportive Living</span> Provider
        </h2>
        <p class="text-stone-500 text-base leading-relaxed mb-10">
          For over 15 years, CareNest Living has helped hundreds of Canadian families
          find the right balance of independence and care — without compromise.
        </p>

        <!-- Trust Pillars -->
        <div class="space-y-5 mb-10">
          <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="flex items-start gap-4 group"
          >
            <!-- Checkmark circle -->
            <div class="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:border-emerald-700 transition-all duration-200">
              <svg class="w-5 h-5 text-emerald-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <p class="text-stone-800 font-semibold text-sm">{{ pillar.title }}</p>
              <p class="text-stone-400 text-xs leading-relaxed mt-0.5">{{ pillar.description }}</p>
            </div>
          </div>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-3 gap-4 border-t border-stone-200 pt-8 mb-10">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-3xl font-bold text-emerald-700 mb-0.5"
              style="font-family:'Playfair Display',serif">
              {{ stat.value }}
            </p>
            <p class="text-stone-400 text-xs font-medium leading-tight">{{ stat.label }}</p>
          </div>
        </div>

        <!-- Certification Row -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="cert in certs"
            :key="cert"
            class="inline-flex items-center gap-1.5 bg-white border border-stone-200 text-stone-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            {{ cert }}
          </span>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
const pillars = [
  {
    title: 'Independence First — Always',
    description: 'We never take over. Our support enhances your life, not replaces your autonomy or decision-making.'
  },
  {
    title: 'Transparent, All-Inclusive Pricing',
    description: 'No hidden fees. Every plan is clearly priced and we help families access available government subsidies.'
  },
  {
    title: 'Professionally Trained Staff, On-Site 24/7',
    description: 'Every staff member undergoes rigorous senior care training and background screening before joining CareNest.'
  },
  {
    title: 'Families Are Partners, Not Visitors',
    description: 'Open-door policy — families are welcomed, updated, and involved in the care of their loved ones at every step.'
  },
  {
    title: 'Government Benefits & Subsidies Accepted',
    description: 'We work directly with Alberta Seniors Benefit and BC Seniors\' Supplement programs on your behalf.'
  },
]

const stats = [
  { value: '400+', label: 'Residents across Canada' },
  { value: '98%', label: 'Family satisfaction rate' },
  { value: '15+', label: 'Years of trusted service' },
]

const certs = [
  'CSLA Accredited',
  'PIPEDA Compliant',
  'AB Seniors Benefit Partner',
  'BC Seniors Supplement Partner',
  '4.9★ Google Reviews',
]
</script>
