<template>
  <div class="container">
    <div class="row">
      <card
        class="col-12 col-xs-6 col-sm-4 col-md-4 col-lg-3 text-center"
        v-for="(item, index) in getItemLists"
        :item="item"
        :key="index"
        :index="index"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "../pages/home-landing/card.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    getItemLists() {
      return this.$store.state.items;
    }
  },
  components: {
    Card
  }
};
</script>
