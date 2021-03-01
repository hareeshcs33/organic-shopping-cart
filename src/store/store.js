import Vue from 'vue';
import Vuex from 'vuex';
import { items } from '../data/items';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    myName: "Hareesh",
    items: items,
    counter: 0,
    cartItems: [],
    editItem: false,
    viewItem: null,
  },
  getters: {
    filterItems(state) {
      console.log(state.items);
    },
    getCartCount(state) {
      return state.cartItems.length;
    },
    getCartItems(state, payload) {
      return state.cartItems;
    },
  },
  mutations: {
    increaseCount(state) {
      return state.counter++;
    },
    editDone(state, payload) {
      console.log('payload', payload);
      console.log('state.items', state.items);
      state.items = state.items.filter(item => item.id !== payload.id);
      console.log('filtered items', state.items);
      state.items.push(payload);
      console.log('edit item added to state item', state.items);
    },
    addToCart(state, payload) {
      const itemArr = state.items.filter(item => item.id == payload);
      itemArr.forEach(item => {
        state.cartItems.push(item);
      });
    },
    removeFromCart(state, payload) {
      state.cartItems = state.cartItems.filter(item => item.id !== payload);
    },
    viewItem(state, payload) {
      state.viewItem = state.items.filter(item => item.id == payload);;
      // console.log(state.viewItem);
    }
  },
  actions: {

  }
})