<template>
  <div class="container">
    <h3 v-if="!getEditCardStatus && getCartItems.length > 0">Cart page</h3>
    <div class="mx-auto" v-if="getCartItems.length == 0 && !getEditCardStatus">
      <div class="empty-text text-center mb-3">Your Cart is empty!</div>
      <div class="cart-icon-arrow-down">
        <i class="fas fa-cart-arrow-down"></i>
      </div>
      <div class="add-empty-text text-center mb-4">add items to it now.</div>
      <button class="btn btn-primary px-5 d-block mx-auto shop-link">
        <router-link to="/">shop now</router-link>
      </button>
    </div>
    <div
      class="row position-relative"
      v-if="!getEditCardStatus && getCartItems.length > 0"
    >
      <button
        class="btn btn-success d-block ml-auto checkout-cta"
        @click="goToCheckout"
      >
        go to checkout
      </button>
      <card
        class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center"
        v-for="(item, index) in getCartItems"
        :item="item"
        :key="index"
        :index="index"
      ></card>
      <div
        class="col-12 col-xs-6 col-md-4 col-lg-3 mb-3 card align-items-center justify-content-center"
      >
        <span @click="$router.push('/')" title="add more" class="p-5"
          ><i class="fas fa-plus plus-icon"></i
        ></span>
      </div>
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
  methods: {
    goToCheckout() {
      console.log("goToCheckout");
      this.$router.push("/checkout");
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
.shop-link a {
  color: #fff;
}
.plus-icon {
  color: #ccc;
  font-size: 120px;
  transition: 0.2s;
}
.plus-icon:hover {
  color: #a3a3a3;
}
.checkout-cta {
  position: absolute;
  top: -50px;
  right: 0px;
  margin-right: 15px;
}
</style>
