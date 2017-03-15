// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import auth from './authentication'

Vue.prototype.$http = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    auth.loggedIn(axios, (logged) => {
      if (!logged) {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
