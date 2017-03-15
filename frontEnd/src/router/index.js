import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Profil from '@/components/Profil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/profil',
      name: 'Profil',
      component: Profil,
      meta: { requiresAuth: true }
    }
  ]
})
