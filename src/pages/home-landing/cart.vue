<template>
  <div class="container">
    <h3 v-if="!getEditCardStatus">Cart page</h3>
    <div class="mx-auto" v-if="getCartItems.length == 0 && !getEditCardStatus">
      <div class="empty-text text-center mb-3">Your Cart is empty!</div>
      <div class="cart-icon-arrow-down">
        <i class="fas fa-cart-arrow-down"></i>
      </div>
      <div class="add-empty-text text-center mb-4">add items to it now.</div>
      <button class="btn btn-dark px-5 d-block mx-auto">
        <router-link to="/">shop now</router-link>
      </button>
    </div>
    <div class="row" v-if="!getEditCardStatus">
      <card
        class="col-12 col-xs-6 col-sm-4 col-md-4 col-lg-3 text-center"
        v-for="(item, index) in getCartItems"
        :item="item"
        :key="index"
        :index="index"
      ></card>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Card from "./card.vue";
export default {
  components: {
    Card
  },
  computed: {
    getCartItems() {
      return this.$store.getters.getCartItems;
    },
    getEditCardStatus() {
      return this.$store.state.editItem;
    }
  },
  mounted() {
    console.log(this.getCartCount);
  }
};
</script>

<style scoped>
.empty-text {
  color: #000;
  font-size: 18px;
  font-weight: bold;
}
.add-empty-text {
  font-size: 14px;
}
.cart-icon-arrow-down {
  color: #a3a3a3;
  font-size: 80px;
  text-align: center;
}
</style>
