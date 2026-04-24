<template>
  <main class="pt-20">
    <!-- Hero Banner -->
    <section class="relative h-72 flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&auto=format&fit=crop"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Friendly reception area"
      />
      <div class="absolute inset-0 bg-black/55"></div>
      <div class="relative z-10 text-center text-white px-6">
        <p class="text-emerald-400 uppercase tracking-widest font-semibold text-sm mb-3">
          We'd Love to Hear From You
        </p>
        <h1 class="text-5xl font-bold">Contact Us</h1>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <!-- Left: Info + Map -->
        <div>
          <p
            class="text-emerald-600 font-semibold uppercase tracking-widest text-sm mb-3"
          >
            Get in Touch
          </p>
          <h2 class="text-4xl font-bold text-stone-800 mb-6">We're Always Here</h2>
          <p class="text-stone-500 text-lg mb-10 leading-relaxed">
            Whether you'd like to book a tour, ask about availability, or simply have a
            chat about your options, our team is happy to help with no pressure and no
            obligation.
          </p>

          <div class="space-y-6 mb-10">
            <div
              v-for="info in contactInfo"
              :key="info.label"
              class="flex items-start gap-5"
            >
              <div
                class="bg-emerald-100 text-emerald-700 rounded-xl p-3 text-2xl shrink-0"
              >
                {{ info.icon }}
              </div>
              <div>
                <p class="font-bold text-stone-800">{{ info.label }}</p>
                <p class="text-stone-500">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <!-- Embedded Map Placeholder -->
          <div class="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20427.77064738295!2d-119.49701!3d49.888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8cb6e3d47c69%3A0x5cf6b93bbb4a5c72!2sKelowna%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="280"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full"
            ></iframe>
          </div>
        </div>

        <!-- Right: Full Form -->
        <div class="bg-stone-50 rounded-2xl p-10 shadow-sm">
          <h3 class="text-2xl font-bold text-stone-800 mb-8">Send Us a Message</h3>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="grid grid-cols-2 gap-5">
              <div>
                <label class="text-sm font-semibold text-stone-600 mb-1 block"
                  >First Name</label
                >
                <input
                  v-model="form.firstName"
                  type="text"
                  placeholder="Mary"
                  class="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label class="text-sm font-semibold text-stone-600 mb-1 block"
                  >Last Name</label
                >
                <input
                  v-model="form.lastName"
                  type="text"
                  placeholder="Doyle"
                  class="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
            <div>
              <label class="text-sm font-semibold text-stone-600 mb-1 block"
                >Email Address</label
              >
              <input
                v-model="form.email"
                type="email"
                placeholder="mary@example.com"
                class="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label class="text-sm font-semibold text-stone-600 mb-1 block"
                >Phone Number</label
              >
              <input
                v-model="form.phone"
                type="tel"
                placeholder="+1 (250) 555-0000"
                class="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label class="text-sm font-semibold text-stone-600 mb-1 block"
                >I am enquiring as a...</label
              >
              <select
                v-model="form.role"
                class="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-600 focus:outline-none focus:border-emerald-500"
              >
                <option value="">Select...</option>
                <option>Prospective resident</option>
                <option>Family member of a prospective resident</option>
                <option>Healthcare professional / referrer</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label class="text-sm font-semibold text-stone-600 mb-1 block"
                >I would like to...</label
              >
              <select
                v-model="form.interest"
                class="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-600 focus:outline-none focus:border-emerald-500"
              >
                <option value="">Select...</option>
                <option>Book a tour</option>
                <option>Ask about suite availability</option>
                <option>Discuss pricing and plans</option>
                <option>Learn about care coordination</option>
                <option>General enquiry</option>
              </select>
            </div>
            <div>
              <label class="text-sm font-semibold text-stone-600 mb-1 block"
                >Your Message (optional)</label
              >
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us a little about your situation or what you're looking for..."
                class="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:border-emerald-500 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-full text-lg transition"
            >
              Send Message
            </button>
            <div
              v-if="submitted"
              class="text-center bg-emerald-50 border border-emerald-200 rounded-xl p-4"
            >
              <p class="text-emerald-700 font-semibold">
                ✅ Thank you, {{ form.firstName }}! We'll be in touch within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Book a Tour Strip -->
    <section class="py-20 bg-emerald-700 text-white text-center px-6">
      <h2 class="text-4xl font-bold mb-4">Come Visit Us in Kelowna</h2>
      <p class="text-emerald-100 text-lg mb-4 max-w-xl mx-auto">
        Our doors are open Monday to Friday, 8:30am–5pm PST, and Saturdays by appointment.
        Walk-ins are always welcome.
      </p>
      <p class="text-emerald-200 font-semibold text-lg">
        📍 450 Harmony Drive, Kelowna, BC, Canada
      </p>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive } from "vue";

const submitted = ref(false);
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
  interest: "",
  message: "",
});

const submitForm = () => {
  submitted.value = true;
};

const contactInfo = [
  {
    icon: "📍",
    label: "Main Office",
    value: "450 Harmony Drive, Kelowna, BC V1Y 6H4, Canada",
  },
  { icon: "📞", label: "Phone", value: "+1 (250) 555-0192" },
  { icon: "✉️", label: "Email", value: "hello@carenestliving.ca" },
  {
    icon: "🕘",
    label: "Office Hours",
    value: "Monday – Friday: 8:30am – 5:00pm PST | Saturday by appointment",
  },
];
</script>
