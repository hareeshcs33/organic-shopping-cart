import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Cart from '../pages/home-landing/cart.vue';
import EditItem from '../pages/home-landing/edit-item.vue';
import ViewItem from '../pages/home-landing/view-item.vue';
import Likes from '../pages/home-landing/likes.vue';
import Checkout from '../pages/home-landing/checkout.vue';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/view-item',
      name: 'view-item',
      component: ViewItem,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      children: [
        {
          path: '/edit-item/:id',
          component: EditItem,
          props: (route) => ({
              ...route.params
          })
        },
      ]
    },
    {
      path: '/likes',
      name: 'likes',
      component: Likes,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
  ]
})
