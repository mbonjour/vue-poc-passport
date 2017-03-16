import Hello from '@/components/Hello'
import Profil from '@/components/Profil'
import Success from '@/components/SuccessLogin'

export default {
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
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
      meta: { requiresAuth: true }
    }
  ]
}
