<template>
  <main class="pt-20">
    <!-- Hero Banner -->
    <section class="relative h-80 flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=1600&auto=format&fit=crop"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Caring staff with senior resident"
      />
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="relative z-10 text-center text-white px-6">
        <p class="text-emerald-400 uppercase tracking-widest font-semibold text-sm mb-3">
          Our Story
        </p>
        <h1 class="text-5xl font-bold">About CareNest Living</h1>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p
            class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3"
          >
            Who We Are
          </p>
          <h2 class="text-4xl font-bold text-stone-800 mb-6">
            Built on Respect, Driven by Care
          </h2>
          <p class="text-stone-500 text-lg leading-relaxed mb-5">
            CareNest Living was founded on a single belief: that older Canadians deserve
            to live with full dignity, independence, and professional support — in a place
            that truly feels like home.
          </p>
          <p class="text-stone-500 text-lg leading-relaxed mb-5">
            We combine the warmth of a private residence with the reassurance of on-site
            staff, structured daily services, and an active community lifestyle. We are
            proudly Canadian — not a nursing home, not a hospital, but a home that cares.
          </p>
          <p class="text-stone-500 text-lg leading-relaxed">
            With communities in British Columbia, Alberta, and Ontario, CareNest Living is
            here to walk that journey with you and your family — wherever you call home.
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?w=800&auto=format&fit=crop"
            class="w-full h-full object-cover"
            alt="Senior resident enjoying outdoors"
          />
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-24 bg-stone-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p
            class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3"
          >
            What Guides Us
          </p>
          <h2 class="text-4xl font-bold text-stone-800">Our Core Values</h2>
        </div>
        <div class="grid md:grid-cols-4 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
          >
            <div class="text-5xl mb-4">{{ value.icon }}</div>
            <h3 class="text-xl font-bold text-stone-800 mb-2">{{ value.title }}</h3>
            <p class="text-stone-500 text-sm leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p
            class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3"
          >
            The People Behind CareNest
          </p>
          <h2 class="text-4xl font-bold text-stone-800">Meet Our Team</h2>
          <p class="text-stone-500 mt-4 max-w-xl mx-auto text-lg">
            Our staff are trained professionals who bring genuine warmth and dedication to
            every interaction.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="member in team" :key="member.name" class="text-center group">
            <div class="relative overflow-hidden rounded-2xl mb-5">
              <img
                :src="member.photo"
                :alt="member.name"
                class="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <h3 class="text-xl font-bold text-stone-800">{{ member.name }}</h3>
            <p class="text-emerald-600 font-medium">{{ member.role }}</p>
            <p class="text-stone-500 text-sm mt-2 px-4">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Banner -->
    <section class="py-20 bg-emerald-700 text-white">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <p class="text-5xl font-bold mb-2">{{ stat.value }}</p>
          <p class="text-emerald-200 text-lg">{{ stat.label }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const values = [
  {
    icon: "🤍",
    title: "Dignity",
    description:
      "Every resident is treated as a full, capable adult deserving of respect and autonomy at all times.",
  },
  {
    icon: "🏡",
    title: "Belonging",
    description:
      "We create genuine community — neighbours who know each other, staff who remember your name.",
  },
  {
    icon: "🛡️",
    title: "Safety",
    description:
      "Peace of mind for residents and families through careful staffing, secure buildings, and emergency systems.",
  },
  {
    icon: "🌱",
    title: "Growth",
    description:
      "Lifestyle programs, social events, and learning opportunities to keep life stimulating and meaningful.",
  },
];

const team = [
  {
    name: "Dr. Patricia Nolan",
    role: "Director of Care",
    bio:
      "Over 20 years in senior care management. Patricia ensures every resident receives professional, compassionate support.",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop",
  },
  {
    name: "James Calloway",
    role: "Community Manager",
    bio:
      "James runs our daily lifestyle programmes and ensures the CareNest community remains vibrant, social, and welcoming.",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop",
  },
  {
    name: "Aoife Murphy",
    role: "Resident Support Lead",
    bio:
      "Aoife is the first point of contact for new residents and families, guiding everyone through a smooth, reassuring transition.",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop",
  },
];

const stats = [
  { value: "15+", label: "Years Serving Canadians" },
  { value: "400+", label: "Residents Across Canada" },
  { value: "98%", label: "Family Satisfaction Rate" },
  { value: "24/7", label: "Staff On-Site" },
];
</script>
