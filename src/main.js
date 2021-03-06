import Vue from 'vue'
import vuetify from 'vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login/Login.vue'
import Index from './components/Index/Index.vue'
import Dashboard from './components/Dashboard/Dashboard.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter)
Vue.use(vuetify)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
  ],
})

Vue.config.productionTip = false

new Vue({
  mode: 'history',
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
