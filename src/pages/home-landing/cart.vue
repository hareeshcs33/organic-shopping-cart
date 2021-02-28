<template>
  <div class="container">
    <h3>Cart page</h3>
    <div class="row">
      <card
        class="col-12 col-xs-6 col-sm-4 col-md-4 col-lg-3 text-center"
        v-for="(item, index) in getCartItems"
        :item="item"
        :key="index"
        :index="index"
      ></card>
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
    }
  },
  mounted() {
    console.log(this.getCartCount);
  }
};
</script>
