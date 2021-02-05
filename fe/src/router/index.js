import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Users from '../views/users.vue'
// import Help from '../views/help.vue'
// import About from '../views/about.vue'
// import E404 from '../views/e404.vue'
import Embed from 'v-video-embed'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(Embed)
Vue.use(VueYouTubeEmbed)
Vue.use(VueYouTubeEmbed, { global: false })
// if you want to install the component globally with a different name
Vue.use(VueYouTubeEmbed, { global: true, componentId: 'youtube-media' })
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/help.vue')
  },
  {
    path: '/crud',
    name: 'CRUD',
    component: () => import('../views/crud.vue')
  },
  {
    path: '/userdb',
    name: 'userdb',
    component: () => import('../views/userdb.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/about.vue')
  },
  {
    path: '*',
    name: 'e404',
    component: () => import('../views/e404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
