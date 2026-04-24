<template>
  <footer class="bg-stone-900 text-stone-400 py-12">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
      <div>
        <h3 class="text-white text-xl font-bold mb-3">CareNest Living</h3>
        <p class="leading-relaxed">
          Independent supportive senior living across Canada — dignified, warm, and always professional.
        </p>
        <p class="mt-4 text-sm text-stone-500">Serving British Columbia, Alberta, and Ontario</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3">Quick Links</h4>
        <ul class="space-y-2">
          <li><RouterLink to="/" class="hover:text-emerald-400 transition">Home</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-emerald-400 transition">About</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-emerald-400 transition">Services</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-emerald-400 transition">Contact</RouterLink></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3">Contact Us</h4>
        <p>📍 450 Harmony Drive, Kelowna, BC V1Y 6H4</p>
        <p class="mt-2">📞 +1 (250) 555-0192</p>
        <p class="mt-2">✉️ hello@carenestliving.ca</p>
        <p class="mt-4 text-xs text-stone-600">Registered in Canada · GST/HST #123456789</p>
      </div>
    </div>
    <p class="text-center mt-10 text-stone-600 text-sm">
      © 2026 CareNest Living Inc. All rights reserved. · Kelowna, BC, Canada
    </p>
  </footer>
</template>
