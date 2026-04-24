<template>
  <main class="pt-20">

    <!-- Hero Banner -->
    <section class="relative h-[420px] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&auto=format&fit=crop&q=85"
        class="absolute inset-0 w-full h-full object-cover scale-105"
        alt="Seniors enjoying a group activity at CareNest"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-stone-900/50 to-transparent"></div>
      <div class="relative z-10 text-left max-w-7xl w-full mx-auto px-6">
        <p class="text-emerald-400 uppercase tracking-widest font-semibold text-sm mb-3">Everything You Need</p>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4"
          style="font-family:'Playfair Display',serif">
          Our Services
        </h1>
        <p class="text-stone-300 text-xl max-w-xl leading-relaxed">
          Every service at CareNest is designed to support your independence, not replace it.
        </p>
      </div>
    </section>

    <!-- What Is Supportive Living -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1604881991575-dfb1003d8811?w=900&auto=format&fit=crop&q=85"
              class="w-full h-[420px] object-cover"
              alt="Peaceful garden walkway at CareNest community"
            />
          </div>
          <div>
            <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">Our Approach</p>
            <h2 class="text-4xl font-bold text-stone-800 mb-6 leading-tight"
              style="font-family:'Playfair Display',serif">
              What Is Supportive Living?
            </h2>
            <p class="text-stone-500 text-lg leading-relaxed mb-5">
              Supportive living sits between fully independent home living and full-time nursing care.
              It is designed for adults who are largely independent but benefit from daily services,
              a safe environment, and caring staff nearby.
            </p>
            <p class="text-stone-500 text-lg leading-relaxed mb-6">
              At CareNest, <strong class="text-stone-700 font-semibold">we do not provide on-site medical care.</strong>
              Instead we provide structured lifestyle support — dining, housekeeping, social programming,
              and 24/7 staff presence — while coordinating with external health professionals as needed.
            </p>
            <div class="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
              <p class="text-emerald-800 font-medium leading-relaxed">
                ✅ Perfect for seniors who want independence, community, and the reassurance of
                support — without the clinical feel of a care home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Categories — Alternating Layout -->
    <section class="bg-stone-50 py-24">
      <div class="max-w-7xl mx-auto px-6 space-y-28">

        <div
          v-for="(category, index) in serviceCategories"
          :key="category.title"
          :class="['grid md:grid-cols-2 gap-16 items-center', index % 2 !== 0 ? 'md:flex md:flex-row-reverse' : '']"
        >
          <!-- Image -->
          <div class="relative rounded-2xl overflow-hidden shadow-xl group">
            <img
              :src="category.image"
              :alt="category.title"
              class="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <span class="absolute bottom-4 left-4 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              {{ category.tag }}
            </span>
          </div>

          <!-- Content -->
          <div :class="index % 2 !== 0 ? 'md:pr-4' : 'md:pl-4'">
            <p class="text-emerald-600 font-semibold uppercase tracking-widest text-xs mb-3">{{ category.tag }}</p>
            <h3 class="text-3xl font-bold text-stone-800 mb-4 leading-tight"
              style="font-family:'Playfair Display',serif">
              {{ category.title }}
            </h3>
            <p class="text-stone-500 text-base leading-relaxed mb-7">{{ category.description }}</p>
            <ul class="space-y-3">
              <li
                v-for="item in category.items"
                :key="item"
                class="flex items-start gap-3"
              >
                <svg class="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-stone-600 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- Pricing Section (reused component) -->
    <PricingSection />

    <!-- Bottom CTA -->
    <section class="relative py-28 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=1600&auto=format&fit=crop&q=80"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Caring staff with senior resident"
      />
      <div class="absolute inset-0 bg-stone-950/70"></div>
      <div class="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-6" style="font-family:'Playfair Display',serif">
          Ready to See CareNest in Person?
        </h2>
        <p class="text-stone-300 text-xl mb-10 leading-relaxed">
          Book a no-pressure tour and let us show you what life at CareNest truly feels like.
          No obligation, just a warm conversation.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/contact"
            class="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg">
            Book a Free Tour
          </RouterLink>
          <a href="tel:+12505550192"
            class="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg transition backdrop-blur-sm">
            📞 Call Us Directly
          </a>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import PricingSection from '../components/PricingSection.vue'

const serviceCategories = [
  {
    tag: 'Dining',
    title: 'Chef-Prepared Daily Dining',
    description: 'Our culinary team creates nutritious, flavourful meals served in a warm communal dining room. Every meal is an opportunity for connection.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=85',
    items: [
      'Three chef-prepared meals served daily',
      'Cultural and dietary accommodations available',
      'Private kitchenette for residents who prefer to self-cater',
      'In-suite dining available when preferred',
      'Seasonal and local Canadian produce prioritised',
    ]
  },
  {
    tag: 'Residences',
    title: 'Private Suites Designed for Real Life',
    description: 'Every suite is thoughtfully designed to feel like home — private, accessible, and filled with natural light. Your space, completely yours.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&auto=format&fit=crop&q=85',
    items: [
      'Private entrance to every suite',
      'Full kitchenette with modern appliances',
      'Accessible walk-in bathroom with safety features',
      'Large windows and personal patio or balcony',
      'Emergency call system built into every room',
    ]
  },
  {
    tag: 'Housekeeping',
    title: 'Housekeeping & Home Maintenance',
    description: 'A clean, well-maintained home is something everyone deserves. Our housekeeping team handles everything so you can enjoy life.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=900&auto=format&fit=crop&q=85',
    items: [
      'Weekly full housekeeping and linen service',
      'Laundry service included in all plans',
      'Dedicated maintenance team for all repairs',
      'Suite deep-cleaning available on request',
      'Pest control and building upkeep managed fully',
    ]
  },
  {
    tag: 'Lifestyle',
    title: 'Activities, Wellness & Social Life',
    description: 'An active, connected life is one of the greatest gifts. Our full-time lifestyle team curates a rich calendar of events every month.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&auto=format&fit=crop&q=85',
    items: [
      'Daily fitness, yoga, and gentle mobility classes',
      'Art, photography, and creative arts sessions',
      'Group outings across BC, Alberta, and Ontario',
      'Monthly themed community social events',
      'Guest speakers, cultural programmes, and music nights',
    ]
  },
  {
    tag: 'Support',
    title: '24/7 On-Site Staff & Safety',
    description: 'Our trained professionals are on-site around the clock — not as wardens, but as trusted community members who are simply there when needed.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900&auto=format&fit=crop&q=85',
    items: [
      '24/7 trained, background-screened staff on site',
      'Emergency call systems in every suite and bathroom',
      'Secure building access and CCTV coverage',
      'Optional coordination with external home-care nurses',
      'Memory-care and mobility-friendly community design',
    ]
  },
  {
    tag: 'Transport',
    title: 'Transport & Practical Services',
    description: 'Getting around should never be a source of stress. CareNest provides scheduled transport and a full range of on-site practical services.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&auto=format&fit=crop&q=85',
    items: [
      'Scheduled transport to medical appointments',
      'Group shuttle for shopping and excursions',
      'On-site hair and beauty salon',
      'Pharmacy delivery coordination',
      'On-site library, lounge, and visitor parking',
    ]
  },
]
</script>
