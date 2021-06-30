import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sensors from '../views/Sensors.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sensoren',
    name: 'Sensors',
    component: Sensors,
  },
  {
    path: "/:catchAll(.*)",  
    component: Home, //TODO NotFound Component
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
