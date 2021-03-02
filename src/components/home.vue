<template>
  <div class="container mb-5">
    <div class="row">
      <card
        class="col-12 col-xs-6 col-sm-4 col-md-4 col-lg-3 text-center"
        v-for="(item, index) in getItemLists"
        :item="item"
        :key="index"
        :index="index"
      ></card>
    </div>
    <div class="d-flex align-items-center justify-content-center flex-column">
      <div class="m-3">1 - 10 of {{ getItemLists.length }} items</div>
      <div class="cta-wrapper">
        <button class="btn btn-primary btn-sm px-3" :disabled="false">
          1
        </button>
        <button class="btn btn-primary btn-sm px-3 mx-3" :disabled="true">
          2
        </button>
        <button class="btn btn-primary btn-sm px-3" :disabled="true">
          NEXT >>>
        </button>
      </div>
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
