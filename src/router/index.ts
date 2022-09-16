import { createRouter, createWebHistory } from 'vue-router'
import TodoOptionsApi from '../views/TodoOptionsApi.vue'
import TodoCompositionApi from '../views/TodoCompositionApi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'optionsAPi',
      component: TodoOptionsApi
    },
    {
      path: '/composition-api',
      name: 'compositionAPi',
      component: TodoCompositionApi
    }
  ]
})

export default router
