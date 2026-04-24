<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Section Label -->
      <div class="text-center mb-16">
        <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">
          Why Families Choose CareNest
        </p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-800 max-w-3xl mx-auto leading-tight"
          style="font-family:'Playfair Display',serif">
          Over 400 Canadian Families Trust Us
          <span class="text-emerald-700"> With What Matters Most</span>
        </h2>
      </div>

      <!-- Three Column Layout -->
      <div class="grid lg:grid-cols-3 gap-6 items-stretch mb-16">

        <!-- Column 1: Trust Pillars -->
        <div class="bg-stone-50 rounded-3xl p-8 flex flex-col gap-6">
          <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="flex items-start gap-4 group"
          >
            <div class="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-emerald-600 transition-colors">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <p class="text-stone-800 font-semibold text-sm leading-snug mb-1">{{ pillar.title }}</p>
              <p class="text-stone-400 text-xs leading-relaxed">{{ pillar.description }}</p>
            </div>
          </div>
        </div>

        <!-- Column 2: Real Photo Stack -->
        <div class="relative rounded-3xl overflow-hidden min-h-[520px] shadow-xl">
          <!-- Main photo — verified Unsplash ID of senior couple smiling -->
          <img
            src="https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&auto=format&fit=crop&q=85"
            alt="Happy senior couple enjoying life at CareNest community"
            class="absolute inset-0 w-full h-full object-cover object-top"
          />
          <!-- Bottom gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/20 to-transparent"></div>

          <!-- Floating review card -->
          <div class="absolute top-5 right-5 bg-white rounded-2xl shadow-xl p-4 w-44">
            <div class="flex gap-0.5 mb-2">
              <span v-for="i in 5" :key="i" class="text-amber-400 text-sm">★</span>
            </div>
            <p class="text-stone-700 text-xs font-semibold leading-snug mb-1">
              "The staff feel like family."
            </p>
            <p class="text-stone-400 text-xs">— James T., Kelowna BC</p>
          </div>

          <!-- Bottom content -->
          <div class="absolute bottom-0 left-0 right-0 p-7">
            <!-- Resident avatars -->
            <div class="flex items-center mb-4">
              <div class="flex -space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&auto=format&fit=crop&q=85"
                  alt="Resident"
                  class="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=85"
                  alt="Resident"
                  class="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=80&auto=format&fit=crop&q=85"
                  alt="Resident"
                  class="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <div class="w-10 h-10 rounded-full border-2 border-white bg-emerald-700 flex items-center justify-center">
                  <span class="text-white text-xs font-bold">+397</span>
                </div>
              </div>
              <p class="text-white text-xs ml-3 leading-tight font-medium">
                Happy residents<br/>across Canada
              </p>
            </div>
            <p class="text-white text-xl font-bold leading-snug mb-1"
              style="font-family:'Playfair Display',serif">
              "Finally, a place that feels like home."
            </p>
            <p class="text-emerald-300 text-sm font-medium">Dorothy M. — Resident since 2021</p>
          </div>
        </div>

        <!-- Column 3: Stats + Accreditations -->
        <div class="flex flex-col gap-5">

          <!-- Stats cards -->
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-stone-50 rounded-2xl px-6 py-5 flex items-center gap-5 hover:bg-emerald-50 hover:border-emerald-200 border border-transparent transition-all duration-200 group"
          >
            <div class="w-12 h-12 rounded-xl bg-emerald-700/10 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:border-emerald-700 transition-all">
              <span class="text-emerald-700 group-hover:text-white text-xl transition-colors">{{ stat.icon }}</span>
            </div>
            <div>
              <p class="text-3xl font-bold text-stone-800 leading-none mb-1"
                style="font-family:'Playfair Display',serif">
                {{ stat.value }}
              </p>
              <p class="text-stone-400 text-xs font-medium leading-tight">{{ stat.label }}</p>
            </div>
          </div>

          <!-- Divider -->
          <div class="border-t border-stone-100 pt-4">
            <p class="text-stone-400 text-xs font-semibold uppercase tracking-widest mb-3">
              Certifications & Partners
            </p>
            <div class="flex flex-col gap-2">
              <div
                v-for="cert in certs"
                :key="cert.label"
                class="flex items-center gap-3 bg-stone-50 border border-stone-100 rounded-xl px-4 py-3"
              >
                <span class="text-emerald-600 font-bold text-base">{{ cert.icon }}</span>
                <span class="text-stone-600 text-xs font-semibold">{{ cert.label }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom Province Strip -->
      <div class="bg-emerald-700 rounded-3xl px-8 py-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-white font-bold text-lg" style="font-family:'Playfair Display',serif">
            🇨🇦 &nbsp;Proudly serving seniors across Canada
          </p>
          <p class="text-emerald-200 text-sm mt-0.5">
            Communities in British Columbia · Alberta · Ontario
          </p>
        </div>
        <RouterLink
          to="/locations"
          class="bg-white text-emerald-700 hover:bg-emerald-50 font-bold px-6 py-3 rounded-full text-sm transition-colors shrink-0"
        >
          View Our Locations →
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup>
const pillars = [
  {
    title: 'Independence First — Always',
    description: 'Our support enhances your life, not replaces your autonomy or decision-making.'
  },
  {
    title: 'Transparent, All-Inclusive Pricing',
    description: 'No hidden fees. Every plan is clearly priced and we help navigate government subsidies.'
  },
  {
    title: 'Professionally Trained Staff, 24/7',
    description: 'Every staff member undergoes rigorous senior care training and background screening.'
  },
  {
    title: 'Families Are Partners, Not Visitors',
    description: 'Open-door policy — families are welcomed and involved at every step of the journey.'
  },
  {
    title: 'Government Benefits Accepted',
    description: 'We work directly with Alberta and BC seniors benefit programs on your behalf.'
  },
]

const stats = [
  { icon: '🏡', value: '400+', label: 'Happy residents across Canada' },
  { icon: '⭐', value: '98%',  label: 'Family satisfaction rate' },
  { icon: '🕐', value: '24/7', label: 'Professional staff on-site' },
  { icon: '📅', value: '15+',  label: 'Years of trusted service' },
]

const certs = [
  { icon: '🏅', label: 'CSLA Accredited Provider' },
  { icon: '🔒', label: 'PIPEDA Privacy Compliant' },
  { icon: '💳', label: 'AB Seniors Benefit Partner' },
  { icon: '💳', label: 'BC Seniors Supplement Partner' },
  { icon: '⭐', label: '4.9 / 5 on Google Reviews' },
]
</script>
