<template>
  <section id="tour" class="py-24 bg-stone-800 text-white">
    <div class="max-w-3xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">Book a Tour or Get in Touch</h2>
        <p class="text-stone-300 text-lg">
          We'd love to show you around. No pressure, just a warm conversation.
        </p>
      </div>
      <form @submit.prevent="submitForm" class="grid md:grid-cols-2 gap-6">
        <input
          v-model="form.name"
          type="text"
          placeholder="Your Name"
          class="col-span-2 md:col-span-1 bg-stone-700 border border-stone-600 rounded-xl px-5 py-4 text-white placeholder-stone-400 focus:outline-none focus:border-emerald-500"
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Email Address"
          class="col-span-2 md:col-span-1 bg-stone-700 border border-stone-600 rounded-xl px-5 py-4 text-white placeholder-stone-400 focus:outline-none focus:border-emerald-500"
        />
        <input
          v-model="form.phone"
          type="tel"
          placeholder="+1 (604) 555-0000"
          class="col-span-2 bg-stone-700 border border-stone-600 rounded-xl px-5 py-4 text-white placeholder-stone-400 focus:outline-none focus:border-emerald-500"
        />
        <select
          v-model="form.interest"
          class="col-span-2 bg-stone-700 border border-stone-600 rounded-xl px-5 py-4 text-stone-300 focus:outline-none focus:border-emerald-500"
        >
          <option value="">I am interested in...</option>
          <option>Booking a tour</option>
          <option>Suite availability and pricing</option>
          <option>Care coordination options</option>
          <option>General enquiry</option>
        </select>
        <textarea
          v-model="form.message"
          rows="4"
          placeholder="Tell us a little about your situation (optional)"
          class="col-span-2 bg-stone-700 border border-stone-600 rounded-xl px-5 py-4 text-white placeholder-stone-400 focus:outline-none focus:border-emerald-500"
        ></textarea>
        <button
          type="submit"
          class="col-span-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-full text-lg transition"
        >
          Send Message
        </button>
        <p v-if="submitted" class="col-span-2 text-center text-emerald-400 font-semibold">
          ✅ Thank you! We'll be in touch within 24 hours.
        </p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
const submitted = ref(false);
const form = reactive({ name: "", email: "", phone: "", interest: "", message: "" });
const submitForm = () => {
  submitted.value = true;
};
</script>
