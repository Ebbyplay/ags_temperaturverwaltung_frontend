import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /*
  { //How to add a new route with component
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },*/

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
