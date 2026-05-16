<template>
  <div class="pt-20">
    <!-- ===================== HERO ===================== -->
    <section class="relative isolate overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=85"
        alt="Northern mountain landscape"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/75 to-stone-900/35"
      ></div>

      <div
        class="relative mx-auto grid min-h-[520px] max-w-7xl items-end gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_22rem]"
      >
        <div class="max-w-3xl">
          <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-300">
            Guidance for Families
          </p>
          <h1
            class="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl"
            style="font-family: 'Playfair Display', serif"
          >
            Thoughtful guidance for aging well, staying connected, and planning with dignity.
          </h1>
          <p class="max-w-2xl text-lg leading-relaxed text-stone-200 md:text-xl">
            Evidence-informed reading for Elders, families, and caregivers across the Sahtú Region.
            Practical, respectful, and grounded in what matters most: safety, belonging, and choice.
          </p>
        </div>

        <aside
          class="rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm"
        >
          <p class="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-200">
            Why these topics matter
          </p>
          <dl class="space-y-5">
            <div v-for="stat in evidenceStats" :key="stat.label">
              <dt
                class="text-3xl font-bold text-white"
                style="font-family: 'Playfair Display', serif"
              >
                {{ stat.value }}
              </dt>
              <dd class="mt-1 text-sm leading-relaxed text-stone-200">{{ stat.label }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- ===================== INTRO ===================== -->
    <section class="bg-white py-16">
      <div
        class="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start"
      >
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Sahtú Living Journal
          </p>
          <h2
            class="mb-5 text-3xl font-bold leading-tight text-stone-800 md:text-4xl"
            style="font-family: 'Playfair Display', serif"
          >
            Clear information, without alarm or pressure.
          </h2>
          <p class="max-w-3xl text-lg leading-relaxed text-stone-500">
            Families often begin researching care long before they need to make a decision. These
            articles are designed to help readers notice meaningful changes, ask better questions,
            and understand the supports that can help older adults remain safe, nourished, and
            connected.
          </p>
        </div>

        <div class="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
          <p class="font-semibold text-emerald-900">A gentle note</p>
          <p class="mt-2 text-sm leading-relaxed text-emerald-800">
            This page is for general education, not medical advice. When health, medication, or
            changing care needs are involved, speak with a qualified health professional who knows
            the individual situation.
          </p>
        </div>
      </div>
    </section>

    <!-- ===================== FEATURED POST ===================== -->
    <section class="bg-stone-50 py-20" aria-labelledby="featured-post-title">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Featured Post
            </p>
            <h2
              id="featured-post-title"
              class="text-3xl font-bold text-stone-800 md:text-4xl"
              style="font-family: 'Playfair Display', serif"
            >
              {{ featuredPost.title }}
            </h2>
          </div>
          <p class="text-sm font-medium text-stone-400">{{ featuredPost.readTime }}</p>
        </div>

        <article class="overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm">
          <div class="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div class="relative min-h-[320px]">
              <img
                :src="featuredPost.image"
                :alt="featuredPost.imageAlt"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="p-7 md:p-10">
              <div class="mb-5 flex flex-wrap items-center gap-3">
                <span
                  class="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700"
                >
                  {{ featuredPost.category }}
                </span>
                <time :datetime="featuredPost.isoDate" class="text-sm text-stone-400">
                  {{ featuredPost.date }}
                </time>
              </div>

              <p class="mb-6 text-lg leading-relaxed text-stone-600">
                {{ featuredPost.summary }}
              </p>

              <ul class="mb-7 space-y-3">
                <li
                  v-for="takeaway in featuredPost.takeaways"
                  :key="takeaway"
                  class="flex items-start gap-3 text-sm leading-relaxed text-stone-600"
                >
                  <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-600"></span>
                  <span>{{ takeaway }}</span>
                </li>
              </ul>

              <div class="rounded-2xl bg-stone-50 p-5">
                <p class="mb-3 text-xs font-bold uppercase tracking-widest text-stone-400">
                  Sources consulted
                </p>
                <ul class="space-y-2">
                  <li v-for="source in featuredPost.sources" :key="source.label">
                    <a
                      :href="source.url"
                      target="_blank"
                      rel="noreferrer"
                      class="text-sm font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 transition hover:text-emerald-800"
                    >
                      {{ source.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- ===================== POST GRID ===================== -->
    <section class="bg-white py-24" aria-labelledby="latest-posts-title">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 max-w-2xl">
          <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Latest Reading
          </p>
          <h2
            id="latest-posts-title"
            class="text-3xl font-bold text-stone-800 md:text-4xl"
            style="font-family: 'Playfair Display', serif"
          >
            Practical posts for real family decisions
          </h2>
        </div>

        <div class="grid gap-8 lg:grid-cols-2">
          <article
            v-for="post in supportingPosts"
            :key="post.title"
            class="group overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                :src="post.image"
                :alt="post.imageAlt"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-900/10 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                <span
                  class="rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700"
                >
                  {{ post.category }}
                </span>
              </div>
            </div>

            <div class="p-7">
              <div class="mb-4 flex flex-wrap items-center gap-3 text-sm text-stone-400">
                <time :datetime="post.isoDate">{{ post.date }}</time>
                <span aria-hidden="true">•</span>
                <span>{{ post.readTime }}</span>
              </div>

              <h3
                class="mb-4 text-2xl font-bold leading-tight text-stone-800 transition-colors group-hover:text-emerald-700"
                style="font-family: 'Playfair Display', serif"
              >
                {{ post.title }}
              </h3>

              <p class="mb-6 leading-relaxed text-stone-500">{{ post.summary }}</p>

              <ul class="mb-6 space-y-3">
                <li
                  v-for="takeaway in post.takeaways"
                  :key="takeaway"
                  class="flex items-start gap-3 text-sm leading-relaxed text-stone-600"
                >
                  <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-600"></span>
                  <span>{{ takeaway }}</span>
                </li>
              </ul>

              <details class="rounded-2xl bg-stone-50 p-4">
                <summary class="cursor-pointer text-sm font-semibold text-stone-700">
                  View sources
                </summary>
                <ul class="mt-3 space-y-2">
                  <li v-for="source in post.sources" :key="source.label">
                    <a
                      :href="source.url"
                      target="_blank"
                      rel="noreferrer"
                      class="text-sm font-semibold text-emerald-700 underline decoration-emerald-200 underline-offset-4 transition hover:text-emerald-800"
                    >
                      {{ source.label }}
                    </a>
                  </li>
                </ul>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===================== FAMILY QUESTIONS ===================== -->
    <section class="bg-stone-900 py-20 text-white">
      <div
        class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start"
      >
        <div>
          <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-300">
            Before a Tour
          </p>
          <h2
            class="mb-5 text-3xl font-bold leading-tight md:text-4xl"
            style="font-family: 'Playfair Display', serif"
          >
            Good questions protect dignity.
          </h2>
          <p class="leading-relaxed text-stone-300">
            The best conversations are specific. Instead of asking only whether a residence is
            “good,” ask how it supports the routines, relationships, and safety needs that matter to
            the person moving in.
          </p>
        </div>

        <ol class="grid gap-4 md:grid-cols-2">
          <li
            v-for="question in familyQuestions"
            :key="question"
            class="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm leading-relaxed text-stone-100"
          >
            {{ question }}
          </li>
        </ol>
      </div>
    </section>

    <!-- ===================== CTA ===================== -->
    <section class="bg-white py-24">
      <div class="mx-auto max-w-4xl px-6 text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Need a conversation, not a sales pitch?
        </p>
        <h2
          class="mb-6 text-4xl font-bold leading-tight text-stone-800 md:text-5xl"
          style="font-family: 'Playfair Display', serif"
        >
          We’re here to help families think clearly about next steps.
        </h2>
        <p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-stone-500">
          If you are comparing options for an Elder or loved one, our team can walk through the
          practical questions with care and without pressure.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink
            to="/contact"
            class="rounded-full bg-emerald-700 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-800"
          >
            Speak With Our Team
          </RouterLink>
          <RouterLink
            to="/services"
            class="rounded-full bg-stone-100 px-8 py-4 text-lg font-semibold text-stone-800 transition hover:bg-stone-200"
          >
            Explore Services
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const evidenceStats = [
  {
    value: '1 in 4',
    label: 'older people are affected by social isolation or loneliness worldwide.',
  },
  {
    value: '89%',
    label: 'of injury-related hospitalizations among older adults are caused by falls in Canada.',
  },
  {
    value: '400 IU',
    label: 'of vitamin D daily is recommended by Health Canada for adults aged 51+.',
  },
]

const featuredPost = {
  category: 'Community Life',
  title: 'Connection Is Part of Care',
  date: 'May 16, 2026',
  isoDate: '2026-05-16',
  readTime: '6 min read',
  image:
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=85',
  imageAlt: 'Older adults laughing together during a community gathering',
  summary:
    'Social life is not an optional extra in later life. The World Health Organization reports that social isolation and loneliness affect about a quarter of older people, and that meaningful social activities can improve mental health, life satisfaction, and quality of life.',
  takeaways: [
    'Look for everyday opportunities to connect, not only occasional events.',
    'Creative arts, shared meals, education, and volunteering can all support belonging.',
    'When comparing residences, ask how new residents are welcomed into daily community life.',
  ],
  sources: [
    {
      label: 'World Health Organization — Mental health of older adults',
      url: 'https://www.who.int/en/news-room/fact-sheets/detail/mental-health-of-older-adults',
    },
    {
      label: 'Government of the Northwest Territories — Seniors Month',
      url: 'https://www.hss.gov.nt.ca/en/seniors-month',
    },
  ],
}

const supportingPosts = [
  {
    category: 'Safety',
    title: 'A Safer Home Is an Independence Tool',
    date: 'May 9, 2026',
    isoDate: '2026-05-09',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1604881991575-dfb1003d8811?w=900&auto=format&fit=crop&q=85',
    imageAlt: 'Accessible outdoor walkway beside a landscaped garden',
    summary:
      'Falls are not an inevitable part of aging. Public Health Agency of Canada guidance highlights practical ways to reduce risk, including strength and balance activity, clear walkways, and handrails or grab bars where they are needed.',
    takeaways: [
      'Check lighting, footwear, clutter, and uneven surfaces before small hazards become daily risks.',
      'In northern climates, snow and ice removal are part of fall prevention, not just maintenance.',
      'Ask whether a residence builds prevention into both private suites and shared spaces.',
    ],
    sources: [
      {
        label: 'Public Health Agency of Canada — Preventing falls and injuries for older adults',
        url: 'https://www.canada.ca/en/public-health/services/health-promotion/aging-seniors/preventing-falls-injuries-older-adults.html',
      },
      {
        label: 'Public Health Agency of Canada — Falls among older adults in Canada',
        url: 'https://health-infobase.canada.ca/falls-in-older-adults/',
      },
    ],
  },
  {
    category: 'Dining',
    title: 'Eating Well Later in Life: Small Habits That Matter',
    date: 'May 2, 2026',
    isoDate: '2026-05-02',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&fit=crop&q=85',
    imageAlt: 'A thoughtfully prepared shared meal on a dining table',
    summary:
      'Healthy eating in later life is less about perfection and more about consistency: varied foods, regular fluids, and meals that are enjoyable enough to keep eating well sustainable.',
    takeaways: [
      'Health Canada recommends a variety of vegetables, fruits, whole grains, and protein foods.',
      'Because thirst may decline with age, regular drinking throughout the day becomes especially important.',
      'Shared dining can support nutrition and social connection at the same time.',
    ],
    sources: [
      {
        label: 'Health Canada — Healthy eating for seniors',
        url: 'https://www.canada.ca/en/health-canada/services/food-guide/eating-support/life-stages/seniors.html',
      },
    ],
  },
  {
    category: 'Northern Living',
    title: 'What Aging in Place Means in the North',
    date: 'April 25, 2026',
    isoDate: '2026-04-25',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&auto=format&fit=crop&q=85',
    imageAlt: 'Mountain landscape under a wide northern sky',
    summary:
      'Aging in place does not have to mean aging alone. In the Sahtú, the long-term care facility was created as part of a wider effort to support wellness, safety, and the ability for seniors to remain close to community.',
    takeaways: [
      'The right support can preserve local ties while reducing avoidable strain on families.',
      'Rural aging often depends on both services and nearby relationships.',
      'When discussing care, proximity to culture, family, and familiar place deserves weight alongside clinical needs.',
    ],
    sources: [
      {
        label: 'Government of the Northwest Territories — Grand opening of the Sahtú facility',
        url: 'https://www.gov.nt.ca/en/newsroom/news/grand-opening-sahtu%CC%81-gotin%C3%A9-regional-health-and-social-services-centre-and-sahtu%CC%81-dene',
      },
      {
        label:
          'Employment and Social Development Canada — Enabling older adults to age in community',
        url: 'https://www.canada.ca/en/employment-social-development/corporate/seniors-forum-federal-provincial-territorial/reports/age-community.html',
      },
    ],
  },
  {
    category: 'Family Guidance',
    title: 'How to Talk About Future Support Without Taking Away Independence',
    date: 'April 18, 2026',
    isoDate: '2026-04-18',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1569508926450-cd832544c4ae?w=900&auto=format&fit=crop&q=85',
    imageAlt: 'Older couple smiling together outdoors',
    summary:
      'The strongest planning conversations begin with the person’s goals: what they want to keep doing, what feels harder now, and what support would help them remain themselves for longer.',
    takeaways: [
      'Start with routines and preferences before discussing buildings or labels.',
      'Use specific observations—missed meals, winter safety, transportation—not vague judgments.',
      'Return to the conversation over time; planning is usually a process, not a single decision.',
    ],
    sources: [
      {
        label:
          'Employment and Social Development Canada — Enabling older adults to age in community',
        url: 'https://www.canada.ca/en/employment-social-development/corporate/seniors-forum-federal-provincial-territorial/reports/age-community.html',
      },
      {
        label: 'World Health Organization — Mental health of older adults',
        url: 'https://www.who.int/en/news-room/fact-sheets/detail/mental-health-of-older-adults',
      },
    ],
  },
  {
    category: 'Care Planning',
    title: 'Supportive Living, Long-Term Care, and the Questions Families Should Ask',
    date: 'April 11, 2026',
    isoDate: '2026-04-11',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=900&auto=format&fit=crop&q=85',
    imageAlt: 'Care professional speaking with an older adult',
    summary:
      'Names can vary by jurisdiction, so the most useful comparison is not the label on the brochure. It is the exact support available day to day, what is coordinated externally, and what happens if needs change.',
    takeaways: [
      'Ask who is on site, at what hours, and what they are trained to do.',
      'Clarify meals, housekeeping, transportation, emergency response, and care coordination separately.',
      'Request a plain-language explanation of how changing needs are reviewed over time.',
    ],
    sources: [
      {
        label: 'Government of the Northwest Territories — Sahtú facility services overview',
        url: 'https://www.gov.nt.ca/en/newsroom/news/grand-opening-sahtu%CC%81-gotin%C3%A9-regional-health-and-social-services-centre-and-sahtu%CC%81-dene',
      },
      {
        label: 'Public Health Agency of Canada — Falls among older adults in Canada',
        url: 'https://health-infobase.canada.ca/falls-in-older-adults/',
      },
    ],
  },
  {
    category: 'Home Design',
    title: 'What Makes a Residence Feel Like Home?',
    date: 'April 4, 2026',
    isoDate: '2026-04-04',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&auto=format&fit=crop&q=85',
    imageAlt: 'Warm, bright living room with comfortable seating',
    summary:
      'A well-designed residence supports both safety and identity. Private space, natural light, room for familiar belongings, and easy access to shared areas can help daily life feel personal rather than institutional.',
    takeaways: [
      'Look beyond décor: ask how the layout supports mobility, rest, visitors, and personal routines.',
      'Private space and community space should work together, not compete with each other.',
      'The most successful environments make support easy to reach without making it the centre of every moment.',
    ],
    sources: [
      {
        label: 'World Health Organization — Mental health of older adults',
        url: 'https://www.who.int/en/news-room/fact-sheets/detail/mental-health-of-older-adults',
      },
      {
        label:
          'Employment and Social Development Canada — Enabling older adults to age in community',
        url: 'https://www.canada.ca/en/employment-social-development/corporate/seniors-forum-federal-provincial-territorial/reports/age-community.html',
      },
    ],
  },
]

const familyQuestions = [
  'What does a normal weekday look like here, from breakfast to evening?',
  'How do you help a new resident build relationships after moving in?',
  'What safety features are built into suites, bathrooms, and winter walkways?',
  'Which services are provided on site, and which are coordinated with outside professionals?',
  'How are cultural practices, food preferences, and family involvement respected?',
  'What happens if a resident’s needs change over time?',
]
</script>
