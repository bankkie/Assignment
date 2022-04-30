import { createWebHistory, createRouter } from 'vue-router'
import HomeAssignment from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeAssignment
  },
  {
    path: '/questionI',
    name: 'QuestionI',
    component: () => import('../views/QuestionI.vue')
  },
  {
    path: '/questionII',
    name: 'QuestionII',
    component: () => import('../views/QuestionI.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
