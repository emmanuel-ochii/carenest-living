import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/services', component: () => import('../views/ServicesView.vue') },
    { path: '/locations', component: () => import('../views/LocationsView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
