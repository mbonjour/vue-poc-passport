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
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    auth.loggedIn(axios, (logged) => {
      if (!logged) {
        console.log('pas log ' + logged)
        // config header pour que facebook l'autorise !
        axios.get('/login/facebook').then((response) => {
          next()
        })
      } else {
        console.log('log ' + logged)
        next()
      }
    })
  } else {
    next() // make sure to always call next()!
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
