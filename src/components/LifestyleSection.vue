<template>
  <section class="py-24 bg-stone-50">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="grid md:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <p class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3">Community Life</p>
          <h2 class="text-4xl font-bold text-stone-800 mb-5">Life at CareNest Is Always Full</h2>
          <p class="text-stone-500 text-lg leading-relaxed">
            Our lifestyle team curates a rich monthly calendar of activities — from gentle morning
            yoga to afternoon art sessions, guest speakers, and community outings across Canada.
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop"
            alt="Seniors enjoying group activities"
            class="w-full h-64 object-cover"
          />
        </div>
      </div>

      <!-- Sample Monthly Calendar -->
      <div class="bg-white rounded-2xl shadow-sm overflow-hidden">

        <!-- Calendar Header -->
        <div class="bg-emerald-700 text-white px-8 py-5 flex items-center justify-between">
          <h3 class="text-xl font-bold">April 2026 — Activity Calendar</h3>
          <span class="text-emerald-200 text-sm">Kelowna, BC Community</span>
        </div>

        <!-- Days Grid -->
        <div class="grid grid-cols-7 bg-stone-50 border-b border-stone-100">
          <div v-for="day in ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']" :key="day"
            class="text-center py-3 text-xs font-bold text-stone-400 uppercase tracking-widest">
            {{ day }}
          </div>
        </div>

        <div class="grid grid-cols-7 divide-x divide-y divide-stone-100">
          <div v-for="cell in calendarCells" :key="cell.id"
            :class="['min-h-[90px] p-2 text-sm', cell.empty ? 'bg-stone-50' : 'bg-white hover:bg-emerald-50/30 transition-colors']">
            <span v-if="!cell.empty" class="font-bold text-stone-500 text-xs block mb-1">{{ cell.date }}</span>
            <div v-for="event in cell.events" :key="event.name"
              :class="['text-xs px-2 py-1 rounded-md mb-1 font-medium truncate', event.color]">
              {{ event.name }}
            </div>
          </div>
        </div>

      </div>

      <!-- Legend -->
      <div class="flex flex-wrap gap-4 mt-6 justify-center">
        <div v-for="legend in legends" :key="legend.label" class="flex items-center gap-2">
          <span :class="['w-3 h-3 rounded-sm', legend.color]"></span>
          <span class="text-stone-500 text-sm">{{ legend.label }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const legends = [
  { label: 'Fitness & Wellness', color: 'bg-blue-200' },
  { label: 'Arts & Creativity', color: 'bg-purple-200' },
  { label: 'Social & Community', color: 'bg-emerald-200' },
  { label: 'Outings & Excursions', color: 'bg-amber-200' },
  { label: 'Health & Education', color: 'bg-rose-200' },
]

const calendarCells = [
  { id: 1, empty: true },
  { id: 2, date: '1', events: [{ name: 'Morning Yoga', color: 'bg-blue-100 text-blue-700' }] },
  { id: 3, date: '2', events: [{ name: 'Watercolour Class', color: 'bg-purple-100 text-purple-700' }] },
  { id: 4, date: '3', events: [{ name: 'Coffee & Connect', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 5, date: '4', events: [{ name: 'Garden Club', color: 'bg-emerald-100 text-emerald-700' }, { name: 'Gentle Stretch', color: 'bg-blue-100 text-blue-700' }] },
  { id: 6, date: '5', events: [{ name: 'Farmers Market Trip', color: 'bg-amber-100 text-amber-700' }] },
  { id: 7, date: '6', events: [{ name: 'Family Visit Day', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 8, date: '7', events: [{ name: 'Chair Fitness', color: 'bg-blue-100 text-blue-700' }] },
  { id: 9, date: '8', events: [{ name: 'Nutrition Talk', color: 'bg-rose-100 text-rose-700' }] },
  { id: 10, date: '9', events: [{ name: 'Photography Club', color: 'bg-purple-100 text-purple-700' }] },
  { id: 11, date: '10', events: [{ name: 'Movie Afternoon', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 12, date: '11', events: [{ name: 'Walking Group', color: 'bg-blue-100 text-blue-700' }, { name: 'Book Club', color: 'bg-purple-100 text-purple-700' }] },
  { id: 13, date: '12', events: [{ name: 'Kelowna Winery Tour', color: 'bg-amber-100 text-amber-700' }] },
  { id: 14, date: '13', events: [{ name: 'Bingo & Brunch', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 15, date: '14', events: [{ name: 'Morning Yoga', color: 'bg-blue-100 text-blue-700' }] },
  { id: 16, date: '15', events: [{ name: 'Health Screening', color: 'bg-rose-100 text-rose-700' }] },
  { id: 17, date: '16', events: [{ name: 'Knitting Circle', color: 'bg-purple-100 text-purple-700' }] },
  { id: 18, date: '17', events: [{ name: 'BBQ Social', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 19, date: '18', events: [{ name: 'Chair Fitness', color: 'bg-blue-100 text-blue-700' }] },
  { id: 20, date: '19', events: [{ name: 'Stanley Park Day Trip', color: 'bg-amber-100 text-amber-700' }] },
  { id: 21, date: '20', events: [{ name: 'Trivia Afternoon', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 22, date: '21', events: [{ name: 'Morning Yoga', color: 'bg-blue-100 text-blue-700' }, { name: 'Painting Class', color: 'bg-purple-100 text-purple-700' }] },
  { id: 23, date: '22', events: [{ name: 'Pharmacist Visit', color: 'bg-rose-100 text-rose-700' }] },
  { id: 24, date: '23', events: [{ name: 'Music & Memories', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 25, date: '24', events: [{ name: 'Walking Group', color: 'bg-blue-100 text-blue-700' }] },
  { id: 26, date: '25', events: [{ name: 'ANZAC Day Tribute', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 27, date: '26', events: [{ name: 'Kelowna Lake Outing', color: 'bg-amber-100 text-amber-700' }] },
  { id: 28, date: '27', events: [{ name: 'Family Sunday Lunch', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 29, date: '28', events: [{ name: 'Chair Fitness', color: 'bg-blue-100 text-blue-700' }] },
  { id: 30, date: '29', events: [{ name: 'Cooking Demo', color: 'bg-rose-100 text-rose-700' }] },
  { id: 31, date: '30', events: [{ name: 'April Social Closing', color: 'bg-emerald-100 text-emerald-700' }] },
  { id: 32, empty: true },
  { id: 33, empty: true },
  { id: 34, empty: true },
  { id: 35, empty: true },
]
</script>
