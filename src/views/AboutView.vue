<template>
  <main class="pt-20">

    <!-- ===================== HERO ===================== -->
    <section class="relative h-[520px] flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=1600&auto=format&fit=crop&q=85"
        class="absolute inset-0 w-full h-full object-cover object-top scale-105"
        alt="CareNest professional care team"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/50 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent"></div>
      <div class="relative z-10 max-w-7xl w-full mx-auto px-6 pb-16">
        <p class="text-emerald-400 uppercase tracking-widest font-semibold text-sm mb-3">Our Story</p>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          style="font-family:'Playfair Display',serif">
          About CareNest Living
        </h1>
        <p class="text-stone-300 text-xl max-w-xl leading-relaxed">
          Proudly Canadian. Built on dignity, driven by genuine care.
        </p>
      </div>
    </section>

    <!-- ===================== MISSION ===================== -->
    <section class="py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-20 items-center">

          <!-- Left: Story -->
          <div>
            <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-4">Who We Are</p>
            <h2 class="text-4xl md:text-5xl font-bold text-stone-800 mb-8 leading-tight"
              style="font-family:'Playfair Display',serif">
              Built on Respect,<br/>
              <span class="text-emerald-700">Driven by Care</span>
            </h2>
            <div class="space-y-5 text-stone-500 text-lg leading-relaxed">
              <p>
                CareNest Living was founded on a single belief: that older Canadians deserve
                to live with full dignity, independence, and professional support — in a place
                that truly feels like home.
              </p>
              <p>
                We combine the warmth of a private residence with the reassurance of on-site
                staff, structured daily services, and an active community lifestyle. We are
                proudly Canadian — not a nursing home, not a hospital, but a home that cares.
              </p>
              <p>
                With communities in British Columbia, Alberta, and Ontario, CareNest Living is
                here to walk that journey with you and your family — wherever you call home.
              </p>
            </div>

            <!-- Milestone timeline -->
            <div class="mt-10 border-l-2 border-emerald-200 pl-6 space-y-6">
              <div v-for="milestone in milestones" :key="milestone.year" class="relative">
                <span class="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white shadow"></span>
                <p class="text-emerald-700 font-bold text-sm">{{ milestone.year }}</p>
                <p class="text-stone-600 text-sm leading-relaxed">{{ milestone.event }}</p>
              </div>
            </div>
          </div>

          <!-- Right: Photo collage -->
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <div class="rounded-2xl overflow-hidden shadow-lg h-56">
                <img
                  src="https://images.unsplash.com/photo-1624292591580-54245e5f68ff?w=600&auto=format&fit=crop&q=85"
                  alt="Happy senior couple at CareNest"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="rounded-2xl overflow-hidden shadow-lg h-44">
                <img
                  src="https://images.unsplash.com/photo-1587556930720-58ec521056a5?w=600&auto=format&fit=crop&q=85"
                  alt="Seniors enjoying group activities"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div class="rounded-2xl overflow-hidden shadow-lg h-44">
                <img
                  src="https://images.unsplash.com/photo-1762955911431-4c44c7c3f408?w=600&auto=format&fit=crop&q=85"
                  alt="Beautiful garden at CareNest community"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div class="rounded-2xl overflow-hidden shadow-lg h-56">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=85"
                  alt="Residents enjoying wellness activities"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===================== CORE VALUES ===================== -->
    <section class="py-28 bg-stone-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <!-- Left: Full-bleed image -->
          <div class="relative rounded-3xl overflow-hidden shadow-2xl h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=85"
              alt="Senior resident feeling at home"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
            <!-- Floating quote -->
            <div class="absolute bottom-6 left-6 right-6 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-5">
              <p class="text-white text-base font-medium leading-relaxed italic mb-3">
                "I never felt like a patient here. I feel like a neighbour, a friend, a person."
              </p>
              <p class="text-emerald-300 text-sm font-semibold">— Harold Stevens, Resident since 2022</p>
            </div>
          </div>

          <!-- Right: Values list -->
          <div>
            <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-4">What Guides Us</p>
            <h2 class="text-4xl md:text-5xl font-bold text-stone-800 mb-10 leading-tight"
              style="font-family:'Playfair Display',serif">
              Our Core Values
            </h2>
            <div class="space-y-6">
              <div
                v-for="value in values"
                :key="value.title"
                class="flex items-start gap-5 p-5 rounded-2xl bg-white border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all duration-200 group"
              >
                <!-- Icon with image background -->
                <div class="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-sm">
                  <img
                    :src="value.image"
                    :alt="value.title"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 class="text-stone-800 font-bold text-base mb-1 group-hover:text-emerald-700 transition-colors">
                    {{ value.title }}
                  </h3>
                  <p class="text-stone-400 text-sm leading-relaxed">{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ===================== TEAM ===================== -->
    <section class="py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <div class="text-center mb-16">
          <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">
            The People Behind CareNest
          </p>
          <h2 class="text-4xl md:text-5xl font-bold text-stone-800 mb-4"
            style="font-family:'Playfair Display',serif">
            Meet Our Team
          </h2>
          <p class="text-stone-400 max-w-xl mx-auto text-lg leading-relaxed">
            Our staff are trained professionals who bring genuine warmth and
            dedication to every interaction — every single day.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="group bg-stone-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-emerald-200"
          >
            <!-- Photo -->
            <div class="relative h-80 overflow-hidden">
              <img
                :src="member.photo"
                :alt="member.name"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
              <!-- Role badge -->
              <span class="absolute top-4 left-4 bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {{ member.role }}
              </span>
            </div>
            <!-- Content -->
            <div class="p-7">
              <h3 class="text-xl font-bold text-stone-800 mb-1"
                style="font-family:'Playfair Display',serif">
                {{ member.name }}
              </h3>
              <p class="text-stone-400 text-sm leading-relaxed mb-5">{{ member.bio }}</p>
              <!-- Credential tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in member.tags"
                  :key="tag"
                  class="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===================== STATS ===================== -->
    <section class="relative py-28 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Beautiful Canadian landscape"
      />
      <div class="absolute inset-0 bg-emerald-900/85"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-emerald-300 font-semibold uppercase tracking-widest text-sm mb-3">
            Our Track Record
          </p>
          <h2 class="text-4xl font-bold text-white"
            style="font-family:'Playfair Display',serif">
            Numbers That Speak for Themselves
          </h2>
        </div>
        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors group"
          >
            <p class="text-5xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors"
              style="font-family:'Playfair Display',serif">
              {{ stat.value }}
            </p>
            <p class="text-emerald-200 text-sm font-medium leading-tight">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-4">Ready to Learn More?</p>
        <h2 class="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight"
          style="font-family:'Playfair Display',serif">
          Come See CareNest<br/>
          <span class="text-emerald-700">for Yourself</span>
        </h2>
        <p class="text-stone-400 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          No pressure, no obligation — just a warm conversation and a guided tour
          of your future home.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/contact"
            class="bg-emerald-700 hover:bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-emerald-900/20">
            Book a Free Tour
          </RouterLink>
          <RouterLink to="/services"
            class="bg-stone-100 hover:bg-stone-200 text-stone-800 px-10 py-4 rounded-full font-semibold text-lg transition">
            Explore Our Services
          </RouterLink>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
const milestones = [
  { year: '2009', event: 'CareNest Living founded in Kelowna, British Columbia with our first 40-suite community.' },
  { year: '2014', event: 'Expanded to Alberta — our Edmonton community opened to 80 new residents.' },
  { year: '2019', event: 'Launched our Ontario community in Ottawa. Reached 300+ residents nationwide.' },
  { year: '2024', event: 'Awarded Best Supportive Living Provider by the Canadian Senior Living Association.' },
]

const values = [
  {
    title: 'Dignity Above Everything',
    description: 'Every resident is treated as a full, capable adult deserving of complete respect and personal autonomy at all times.',
    image: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=200&auto=format&fit=crop&q=85'
  },
  {
    title: 'True Belonging',
    description: 'We create genuine community — neighbours who know each other, staff who remember your name and your story.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&auto=format&fit=crop&q=85'
  },
  {
    title: 'Safety & Peace of Mind',
    description: 'Families rest easier knowing trained staff, secure buildings, and emergency systems are always in place.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&auto=format&fit=crop&q=85'
  },
  {
    title: 'Growth & Fulfilment',
    description: 'Lifestyle programs, creative arts, social events, and lifelong learning keep every day stimulating and meaningful.',
    image: 'https://images.unsplash.com/photo-1447452001526-abe8a6bd7ac5?w=200&auto=format&fit=crop&q=85'
  },
]

const team = [
  {
    name: 'Dr. Patricia Nolan',
    role: 'Director of Care',
    bio: 'Over 20 years in senior care management across Canada. Patricia ensures every resident receives professional, compassionate support tailored to their needs.',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=85',
    tags: ['Registered Nurse', '20+ Years Experience', 'Dementia Care Certified']
  },
  {
    name: 'James Calloway',
    role: 'Community Manager',
    bio: 'James curates our monthly activity calendar and ensures the CareNest community remains vibrant, welcoming, and deeply connected.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=85',
    tags: ['Rec Therapy Diploma', 'Community Builder', 'Mental Wellness First Aid']
  },
  {
    name: 'Aoife Murphy',
    role: 'Resident Support Lead',
    bio: 'Aoife is the first point of contact for new residents and families, guiding everyone through a smooth, reassuring, and dignified transition.',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&auto=format&fit=crop&q=85',
    tags: ['Social Work Degree', 'Family Liaison', 'Certified Care Advisor']
  },
]

const stats = [
  { value: '15+', label: 'Years Serving Canadians' },
  { value: '400+', label: 'Residents Across Canada' },
  { value: '98%', label: 'Family Satisfaction Rate' },
  { value: '24/7', label: 'Professional Staff On-Site' },
]
</script>
