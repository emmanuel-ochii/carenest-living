<template>
  <main class="pt-20">
    <!-- Hero Banner -->
    <section class="relative h-80 flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&auto=format&fit=crop"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Seniors enjoying activities"
      />
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="relative z-10 text-center text-white px-6">
        <p class="text-emerald-400 uppercase tracking-widest font-semibold text-sm mb-3">
          Everything You Need
        </p>
        <h1 class="text-5xl font-bold">Our Services</h1>
      </div>
    </section>

    <!-- What Is Supportive Living -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1447452001526-abe8a6bd7ac5?w=800&auto=format&fit=crop"
            class="w-full h-96 object-cover"
            alt="Peaceful garden walkway"
          />
        </div>
        <div>
          <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Understanding Our Model
          </p>
          <h2 class="text-4xl font-bold text-stone-800 mb-6">What Is Supportive Living?</h2>
          <p class="text-stone-500 text-lg leading-relaxed mb-5">
            Supportive living sits between fully independent home living and full-time nursing care.
            It is designed for adults who are largely independent but benefit from having daily
            services, a safe environment, and caring staff nearby.
          </p>
          <p class="text-stone-500 text-lg leading-relaxed mb-5">
            At CareNest,
            <strong class="text-stone-700">we do not provide on-site medical care</strong>. Instead,
            we provide structured lifestyle support — dining, housekeeping, social programming, and
            24/7 staff presence — while coordinating with external health professionals as needed.
          </p>
          <div class="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-xl">
            <p class="text-emerald-800 font-medium">
              ✅ Perfect for seniors who want independence, community, and the reassurance of
              support — without the clinical feel of a care home.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Full Services Grid -->
    <section class="py-24 bg-stone-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Full Service List
          </p>
          <h2 class="text-4xl font-bold text-stone-800">Everything Included</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="category in serviceCategories"
            :key="category.title"
            class="bg-white rounded-2xl p-8 shadow-sm"
          >
            <div class="flex items-center gap-4 mb-6">
              <span class="text-4xl">{{ category.icon }}</span>
              <h3 class="text-2xl font-bold text-stone-800">{{ category.title }}</h3>
            </div>
            <ul class="space-y-3">
              <li
                v-for="item in category.items"
                :key="item"
                class="flex items-start gap-3 text-stone-600"
              >
                <span class="text-emerald-500 mt-1 shrink-0">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Transparent Pricing
          </p>
          <h2 class="text-4xl font-bold text-stone-800">Choose Your Plan</h2>
          <p class="text-stone-500 mt-4 max-w-xl mx-auto text-lg">
            All plans include private suite, 24/7 staff, housekeeping, and full access to community
            facilities.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="plan in plans"
            :key="plan.name"
            :class="[
              'rounded-2xl p-8 shadow-sm border-2 transition',
              plan.featured
                ? 'border-emerald-600 bg-emerald-700 text-white'
                : 'border-stone-100 bg-white text-stone-800',
            ]"
          >
            <p
              :class="[
                'text-sm font-semibold uppercase tracking-widest mb-2',
                plan.featured ? 'text-emerald-200' : 'text-emerald-600',
              ]"
            >
              {{ plan.name }}
            </p>
            <p class="text-4xl font-bold mb-1">{{ plan.price }}</p>
            <p :class="['text-sm mb-6', plan.featured ? 'text-emerald-200' : 'text-stone-400']">
              per month
            </p>
            <ul class="space-y-3 mb-8">
              <li
                v-for="feature in plan.features"
                :key="feature"
                :class="[
                  'flex items-start gap-3 text-sm',
                  plan.featured ? 'text-emerald-100' : 'text-stone-600',
                ]"
              >
                <span :class="plan.featured ? 'text-emerald-300' : 'text-emerald-500'">✓</span>
                {{ feature }}
              </li>
            </ul>
            <a
              href="#tour"
              :class="[
                'block text-center py-3 rounded-full font-semibold transition',
                plan.featured
                  ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800',
              ]"
            >
              Get Started
            </a>
          </div>
        </div>
        <p class="text-center text-stone-400 text-sm mt-8">
          Alberta Seniors Benefit and BC Senior's Supplement accepted. Subsidised plans available.
          Contact us to discuss your options.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-stone-800 text-white text-center px-6">
      <h2 class="text-4xl font-bold mb-4">Ready to See CareNest in Person?</h2>
      <p class="text-stone-300 text-lg mb-8 max-w-xl mx-auto">
        Book a no-pressure tour and let us show you what life at CareNest truly feels like.
      </p>
      <RouterLink
        to="/contact"
        class="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg transition"
      >
        Book a Tour
      </RouterLink>
    </section>
  </main>
</template>

<script setup>
const serviceCategories = [
  {
    icon: '🍽️',
    title: 'Dining & Nutrition',
    items: [
      'Three chef-prepared meals daily in communal dining room',
      'Special dietary and cultural meal accommodations',
      'Private kitchenette for residents who prefer self-catering',
      'Snacks and beverages available throughout the day',
      'In-suite dining available when needed',
    ],
  },
  {
    icon: '🏠',
    title: 'Residence & Housekeeping',
    items: [
      'Private suite with personal entrance',
      'Weekly full housekeeping service',
      'Linen and laundry service included',
      'Maintenance team for all repairs',
      'Broadband internet and cable TV',
    ],
  },
  {
    icon: '🎨',
    title: 'Lifestyle & Activities',
    items: [
      'Daily recreational and social programmes',
      'Art, music, and crafts sessions',
      'Gentle fitness and mobility classes',
      'Excursions and group outings',
      'Spiritual and cultural events',
    ],
  },
  {
    icon: '🤝',
    title: 'Support & Safety',
    items: [
      '24/7 trained staff on-site (non-medical)',
      'Emergency pull-cord system in every suite',
      'Secure building access and CCTV',
      'Coordination with home-care providers',
      'Memory care and mobility-friendly environment',
    ],
  },
  {
    icon: '🌿',
    title: 'Outdoor & Community',
    items: [
      'Private patios and balconies per suite',
      'Landscaped gardens and walking paths',
      'Vegetable and flower garden areas',
      'Outdoor seating and social spaces',
      'Pet-friendly grounds policy',
    ],
  },
  {
    icon: '🚗',
    title: 'Practical Services',
    items: [
      'Scheduled transport for medical appointments',
      'On-site hair and beauty salon',
      'Library and reading lounge',
      'Visitor parking and accessible drop-off',
      'Pharmacy delivery coordination',
    ],
  },
]

const plans = [
  {
    name: 'Essential',
    price: 'CA$2,800',
    featured: false,
    features: [
      'Private studio suite',
      'Daily dining (3 meals)',
      'Weekly housekeeping',
      '24/7 staff presence',
      'Access to all communal areas',
    ],
  },
  {
    name: 'Comfort',
    price: 'CA$3,600',
    featured: true,
    features: [
      'Private 1-bedroom suite with patio',
      'Daily dining + in-suite dining option',
      'Full housekeeping and laundry',
      '24/7 staff + care coordination',
      'Full lifestyle programme access',
      'Transport to medical appointments',
    ],
  },
  {
    name: 'Premium',
    price: 'CA$4,500',
    featured: false,
    features: [
      'Spacious 2-bedroom suite',
      'All meals + private dining available',
      'Daily housekeeping',
      'Priority care coordination',
      'Personal lifestyle concierge',
      'All Comfort features included',
    ],
  },
]
</script>
