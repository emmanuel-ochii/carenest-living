<template>
  <footer class="bg-stone-900 text-stone-400 py-12">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
      <div>
        <!-- Footer logo -->
        <div class="flex items-baseline gap-0.5 mb-3 select-none">
          <span class="text-2xl font-bold text-white"
            style="font-family: 'Playfair Display', serif; letter-spacing: -0.5px">Sahtú Dene</span>
          <span class="text-2xl font-bold text-emerald-400"
            style="font-family: 'Playfair Display', serif; letter-spacing: -0.5px">Nechá Kǫ́</span>
          <span class="text-emerald-500 mx-1 text-xl font-bold" aria-hidden="true">·</span>
          <span class="text-xs font-bold text-stone-500 tracking-[0.25em] uppercase self-center"
            style="font-family: 'Inter', sans-serif">LTC</span>
        </div>
        <p class="leading-relaxed">
          Independent supportive senior living across Canada — dignified, warm, and always
          professional.
        </p>
        <p class="mt-4 text-sm text-stone-500">Serving Sahtu Region, Northwest Territories</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3">Quick Links</h4>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/" class="hover:text-emerald-400 transition">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-emerald-400 transition">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/services" class="hover:text-emerald-400 transition">Services</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-emerald-400 transition">Contact</RouterLink>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-3">Contact Us</h4>
        <p>📍 P O BOX 190. 26 Woodland Ave, Norman Wells, NT X0E OVO.</p>
        <p class="mt-2">📞 +1 (867) 587-0192</p>
        <p class="mt-2">✉️ hello@sahtuliving.ca</p>
        <p class="mt-4 text-xs text-stone-600">Registered in Canada.</p> 
      </div>
    </div>
    <p class="text-center mt-10 text-stone-600 text-sm">
      © 2026 Sahtú Dene Nechá Kǫ́ Long Term Care. All rights reserved. Norman Wells, Northwest Territories
    </p>
  </footer>
</template>
