import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { routes } from './router/index'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
