import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ConfigurationsPage from '../views/ConfigurationsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/configurations',
      name: 'configurations',
      component: ConfigurationsPage
    }
  ]
})

export default router
