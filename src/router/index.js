import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import CoC from '@/components/CoC.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/coc',
      name: 'CoC',
      component: CoC
    }
  ]
})
