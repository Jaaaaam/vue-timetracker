// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store/store'

import Home from './components/Home'
import TimeEntries from './components/TimeEntries'
import LogTime from './components/LogTime'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', component: Home },
  { path: '/time-entries',
    component: TimeEntries,
    children: [
            { path: 'logtime', component: LogTime }
    ]
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes,
  made: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
