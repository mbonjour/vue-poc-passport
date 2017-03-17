import axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

let router = new Router(routes)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    loggedIn((logged) => {
      console.log(to)
      if (!logged) {
        window.location.replace('/login/facebook?url=' + to.fullPath)
      } else {
        next()
      }
    })
  } else {
    next()
  }
})

let loggedIn = (next) => {
  axios.get('/me').then((response) => {
    next(response.data.logged)
  })
}

export default router
