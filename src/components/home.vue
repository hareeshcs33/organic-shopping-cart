<template>
  <div class="container mb-5">
    <div class="d-flex align-items-center justify-content-center mb-3">
      <div
        class="p-2 link text-center filter-link"
        @click="getSeedsFilter('all')"
        :class="getActiveClass('all')"
      >
        <i class="fas fa-store"></i> All Seeds
      </div>
      <div
        class="p-2 link text-center filter-link"
        @click="getSeedsFilter('flower')"
        :class="getActiveClass('flower')"
      >
        Flower Seeds
      </div>
      <div
        class="p-2 link text-center filter-link"
        @click="getSeedsFilter('vegetable')"
        :class="getActiveClass('vegetable')"
      >
        Vegetable Seeds
      </div>
      <div
        class="p-2 link text-center filter-link"
        @click="getSeedsFilter('fruit')"
        :class="getActiveClass('fruit')"
      >
        Fruit Seeds
      </div>
    </div>
    <div class="row">
      <template v-if="filteredItems.length > 0">
        <card
          class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 text-center"
          v-for="(item, index) in filteredItems"
          :item="item"
          :key="index"
          :index="index"
        ></card>
      </template>
      <div class="col-12" v-else>
        <div class="fa-3x text-center">
          <i class="fas fa-spinner fa-spin"></i>
        </div>
      </div>
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
        <button
          class="btn btn-primary btn-sm px-3"
          :disabled="false"
          @click="moreItems"
        >
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
      category: "all",
      filteredItems: [],
      count: 0
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
    getSeedsFilter(category) {
      if (category == "all") {
        this.filteredItems = this.getItemLists;
      } else {
        this.filteredItems = this.getItemLists.filter(
          item => item.category == category
        );
      }
      this.category = category;
    },
    getActiveClass(val) {
      return this.category == val ? "active" : "";
    },
    moreItems() {
      this.count += 4;
      console.log("show more items", this.count);
    }
  },
  components: {
    Card
  }
};
</script>
<style scoped>
.filter-link {
  border-bottom: 3px solid transparent;
  cursor: pointer;
  margin-right: 3px;
}
.filter-link:hover {
  color: blue;
  background-color: #b1bbff52;
  border-bottom: 3px solid blue;
  transition: 0.4s;
}
.filter-link.active {
  color: blue;
  background-color: #b1bbff52;
  border-bottom: 3px solid blue;
}
</style>
