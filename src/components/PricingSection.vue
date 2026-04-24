<template>
  <section class="py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-16">
        <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">
          Transparent Pricing
        </p>
        <h2 class="text-4xl font-bold text-stone-800">Choose Your Plan</h2>
        <p class="text-stone-500 mt-4 max-w-xl mx-auto text-lg">
          All plans include your private suite, 24/7 on-site staff, housekeeping,
          and full access to community facilities across Canada.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="plan in plans"
          :key="plan.name"
          :class="[
            'rounded-2xl p-8 border-2 transition duration-300',
            plan.featured
              ? 'border-emerald-600 bg-emerald-700 text-white shadow-2xl scale-105'
              : 'border-stone-100 bg-white text-stone-800 shadow-sm hover:shadow-md'
          ]"
        >
          <!-- Badge -->
          <div v-if="plan.featured" class="mb-4">
            <span class="bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Most Popular
            </span>
          </div>

          <p :class="['text-sm font-semibold uppercase tracking-widest mb-2', plan.featured ? 'text-emerald-200' : 'text-emerald-600']">
            {{ plan.name }}
          </p>

          <div class="flex items-end gap-1 mb-1">
            <span class="text-4xl font-bold">{{ plan.price }}</span>
          </div>
          <p :class="['text-sm mb-8', plan.featured ? 'text-emerald-200' : 'text-stone-400']">
            per month · all inclusive
          </p>

          <ul class="space-y-3 mb-10">
            <li
              v-for="feature in plan.features"
              :key="feature"
              :class="['flex items-start gap-3 text-sm', plan.featured ? 'text-emerald-100' : 'text-stone-600']"
            >
              <span :class="['mt-0.5 shrink-0 font-bold', plan.featured ? 'text-emerald-300' : 'text-emerald-500']">✓</span>
              {{ feature }}
            </li>
          </ul>

          <RouterLink
            to="/contact"
            :class="[
              'block text-center py-3.5 rounded-full font-semibold transition text-sm',
              plan.featured
                ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                : 'bg-emerald-700 text-white hover:bg-emerald-800'
            ]"
          >
            Get Started
          </RouterLink>
        </div>
      </div>

      <!-- Footnote -->
      <p class="text-center text-stone-400 text-sm mt-10">
        🇨🇦 Alberta Seniors Benefit and BC Seniors' Supplement accepted. &nbsp;|&nbsp;
        Subsidised plans available — <RouterLink to="/contact" class="text-emerald-600 hover:underline">contact us</RouterLink> to discuss your situation.
      </p>

    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    name: 'Essential',
    price: 'CA$2,800',
    featured: false,
    features: [
      'Private studio suite',
      'Daily dining — 3 meals per day',
      'Weekly housekeeping service',
      '24/7 trained staff on-site',
      'Access to all communal areas',
      'Emergency call system included',
    ]
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
      'Broadband internet + cable TV',
    ]
  },
  {
    name: 'Premium',
    price: 'CA$4,500',
    featured: false,
    features: [
      'Spacious 2-bedroom suite',
      'All meals + private dining available',
      'Daily housekeeping service',
      'Priority care coordination',
      'Personal lifestyle concierge',
      'All Comfort plan features included',
      'Dedicated family liaison contact',
    ]
  },
]
</script>
