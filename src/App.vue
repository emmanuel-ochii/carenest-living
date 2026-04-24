<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <NavBar />
  <main id="main-content">
    <RouterView />
  </main>
  <FooterSection />
  <FloatingCTA />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import FloatingCTA from './components/FloatingCTA.vue'
</script>
