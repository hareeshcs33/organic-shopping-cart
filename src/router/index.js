import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Cart from '../pages/home-landing/cart.vue';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
  ]
})
