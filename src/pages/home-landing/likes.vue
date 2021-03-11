<template>
  <div class="container">
    <h3 v-if="getLikesItemsList.length > 0">Like Items</h3>
    <div class="row">
      <template v-if="getLikesItemsList.length > 0">
        <card
          class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center"
          v-for="(item, index) in getLikesItemsList"
          :item="item"
          :key="index"
          :index="index"
        ></card>
      </template>
      <div class="col-12 bg-white p-5" v-else>
        <h2 class="text-center mb-3">
          Your <i class="fas fa-heart"></i> Items are empty!
        </h2>
        <div class="fa-3x text-center">
          <i class="fas fa-spinner fa-spin"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "./card.vue";

export default {
  computed: {
    getLikesItemsList() {
      return this.$store.getters.getLikesItemsList;
    }
  },
  components: {
    Card
  }
};
</script>
