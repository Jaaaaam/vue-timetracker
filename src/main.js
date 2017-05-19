// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

import Home from './components/Home'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  made: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
