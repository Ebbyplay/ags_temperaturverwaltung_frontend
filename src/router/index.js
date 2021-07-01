import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sensors from '../views/Sensors.vue'
import Temperatures from '../views/Temperatures.vue'


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
    path: '/temperaturen',
    name: 'Temperatures',
    component: Temperatures,
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
