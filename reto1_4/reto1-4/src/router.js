import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './components/Inicio.vue'


const routes = [
  { path: '/', name: 'inicio', component: Inicio},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

