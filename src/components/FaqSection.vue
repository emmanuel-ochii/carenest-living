<template>
  <section class="py-24 bg-white">
    <div class="max-w-3xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-stone-800 text-center mb-14">Frequently Asked Questions</h2>
      <div class="space-y-4">
        <div v-for="(faq, i) in faqs" :key="i"
          class="border border-stone-200 rounded-2xl overflow-hidden">
          <button @click="toggle(i)"
            class="w-full text-left px-6 py-5 font-semibold text-stone-800 flex justify-between items-center hover:bg-stone-50 transition">
            {{ faq.question }}
            <span class="text-emerald-600 text-xl">{{ open === i ? '−' : '+' }}</span>
          </button>
          <div v-if="open === i" class="px-6 pb-5 text-stone-500 leading-relaxed">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(null)
const toggle = (i) => { open.value = open.value === i ? null : i }

const faqs = [
  { question: "Is this assisted living or a nursing home?", answer: "No. CareNest Living is supportive living — you maintain full independence while having professional support services available. We do not provide on-site medical or nursing-home-level care." },
  { question: "Can I bring my own furniture?", answer: "Absolutely. Your suite is your home. You are encouraged to bring personal furniture, decorations, and belongings to make it feel completely yours." },
  { question: "What happens if my care needs increase?", answer: "Our team will help coordinate with external home-care providers and health professionals so your support evolves with your needs without requiring an immediate move." },
  { question: "Are meals included in the price?", answer: "A daily dining plan is included in most packages. Residents with kitchenettes also have the option to cook independently." },
  { question: "Can family visit any time?", answer: "Yes. Family and friends are always welcome. There are no restricted visiting hours. This is your home." },
]
</script>
