<template>
  <section class="bg-stone-900 text-white py-16 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid md:grid-cols-2 gap-12 items-center">

        <!-- Left: Animated Stats -->
        <div>
          <p class="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
            By The Numbers
          </p>
          <h2 class="text-3xl font-bold mb-10" style="font-family:'Playfair Display',serif">
            Trusted by Canadian Families Since 2009
          </h2>
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="border border-stone-700 rounded-2xl p-5 hover:border-emerald-600 transition-colors group"
            >
              <p class="text-4xl font-bold text-emerald-400 mb-1 group-hover:text-emerald-300 transition-colors"
                style="font-family:'Playfair Display',serif">
                {{ stat.value }}
              </p>
              <p class="text-stone-300 text-sm font-medium leading-tight">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right: Trust Signals -->
        <div class="space-y-4">
          <p class="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Commitments
          </p>
          <div
            v-for="trust in trustSignals"
            :key="trust.title"
            class="flex items-start gap-4 bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-emerald-700 rounded-xl px-5 py-4 transition-all duration-200 group"
          >
            <!-- Icon Circle -->
            <div class="w-10 h-10 rounded-full bg-emerald-700/30 border border-emerald-600/30 flex items-center justify-center shrink-0 group-hover:bg-emerald-700/50 transition">
              <span class="text-emerald-400 text-lg leading-none">{{ trust.icon }}</span>
            </div>
            <div>
              <p class="text-white font-semibold text-sm mb-0.5">{{ trust.title }}</p>
              <p class="text-stone-400 text-xs leading-relaxed">{{ trust.description }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Strip: Province Badges -->
      <div class="border-t border-stone-800 mt-14 pt-10 flex flex-wrap items-center justify-between gap-6">
        <p class="text-stone-400 text-sm font-medium">
          🇨🇦 &nbsp;Currently serving residents across:
        </p>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="province in provinces"
            :key="province"
            class="bg-stone-800 border border-stone-700 text-stone-300 text-xs font-semibold px-4 py-2 rounded-full tracking-wide hover:border-emerald-600 hover:text-emerald-300 transition-colors cursor-default"
          >
            {{ province }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '15+', label: 'Years serving Canadian seniors' },
  { value: '400+', label: 'Residents across Canada' },
  { value: '98%', label: 'Family satisfaction rate' },
  { value: '24/7', label: 'Professional staff on-site' },
]

const trustSignals = [
  {
    icon: '🏅',
    title: 'Accredited Senior Living Provider',
    description: 'Recognised by the Canadian Senior Living Network for standards of care and resident wellbeing.'
  },
  {
    icon: '💳',
    title: 'Government Subsidy Accepted',
    description: 'Alberta Seniors Benefit and BC Seniors\' Supplement accepted — we help you navigate the process.'
  },
  {
    icon: '🔒',
    title: 'Privacy & Safety Certified',
    description: 'Fully compliant with PIPEDA privacy standards and Canadian provincial health and safety regulations.'
  },
  {
    icon: '⭐',
    title: 'Top-Rated on Google Reviews',
    description: 'Consistently rated 4.9/5 across all our communities by residents and their families.'
  },
]

const provinces = [
  'British Columbia',
  'Alberta',
  'Ontario',
]
</script>
