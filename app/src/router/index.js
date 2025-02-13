import { createRouter, createWebHistory } from 'vue-router'
import TheBet from '../views/TheBet.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheBet',
      component: TheBet,
    },
  ],
})

export default router
