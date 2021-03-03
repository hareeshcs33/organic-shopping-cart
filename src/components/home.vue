<template>
  <div class="container mb-5">
    <div class="d-flex align-items-center justify-content-center">
      <a
        class="p-2 link"
        @click="getSeedsFilter('all')"
        :class="getActiveClass('all')"
        ><i class="fas fa-home"></i>All Seeds</a
      >
      <a
        class="p-2 link"
        @click="getSeedsFilter('flower')"
        :class="getActiveClass('flower')"
        >Flower Seeds</a
      >
      <a
        class="p-2 link"
        @click="getSeedsFilter('vegetable')"
        :class="getActiveClass('vegetable')"
        >Vegetable Seeds</a
      >
      <a
        class="p-2 link"
        @click="getSeedsFilter('fruit')"
        :class="getActiveClass('fruit')"
        >Fruit Seeds</a
      >
    </div>
    <div class="row">
      <card
        class="col-12 col-xs-6 col-sm-4 col-md-4 col-lg-3 text-center"
        v-for="(item, index) in filteredItems"
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
    return {
      seedType: "all",
      filteredItems: []
    };
  },
  computed: {
    getItemLists() {
      return this.$store.state.items;
    }
  },
  created() {
    this.getSeedsFilter("all");
  },
  methods: {
    getSeedsFilter(seedType) {
      if (this.seedType == seedType) {
        this.filteredItems = this.getItemLists;
      } else {
        this.filteredItems = this.getItemLists.filter(
          item => item.seedType == seedType
        );
      }
      this.seedType = seedType;
      console.log(this.seedType);
    },
    getActiveClass(val) {
      return this.seedType == val ? "active" : "";
    }
  },
  components: {
    Card
  }
};
</script>
<style scoped>
.link.active {
  background-color: #b1bbff52;
}
</style>
