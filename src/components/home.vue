<template>
  <div>
    <div class="container mb-5">
      <div class="d-flex align-items-center justify-content-center mb-3">
        <button
          class="btn p-2 px-md-4 filter-link"
          @click="getSeedsFilter('all')"
          :class="getActiveClass('all')"
        >
          <i class="fas fa-store"></i> All Seeds
        </button>
        <button
          class="btn p-2 px-md-4 filter-link"
          @click="getSeedsFilter('flower')"
          :class="getActiveClass('flower')"
        >
          Flower Seeds
        </button>
        <button
          class="btn p-2 px-md-4 filter-link"
          @click="getSeedsFilter('vegetable')"
          :class="getActiveClass('vegetable')"
        >
          Vegetable Seeds
        </button>
        <button
          class="btn p-2 px-md-4 filter-link"
          @click="getSeedsFilter('fruit')"
          :class="getActiveClass('fruit')"
        >
          Fruit Seeds
        </button>
      </div>
      <div
        class="d-flex align-items-center justify-content-center flex-wrap gal-item-wrapper filter-img-block my-4 my-md-5"
      >
        <div
          class="gal-item-list position-relative"
          @click="getSeedsFilter('all')"
        >
          <img src="../assets/mixed-all.png" class="gal-item" alt="All" />
          <div class="gal-item-text">ALL</div>
        </div>
        <div
          class="gal-item-list position-relative"
          @click="getSeedsFilter('flower')"
        >
          <img
            src="../assets/mixed-flowers.png"
            class="gal-item"
            alt="Flowers"
          />
          <div class="gal-item-text">Flowers</div>
        </div>
        <div
          class="gal-item-list position-relative"
          @click="getSeedsFilter('vegetable')"
        >
          <img
            src="../assets/mixed-vegetables.png"
            class="gal-item"
            alt="Vegetables"
          />
          <div class="gal-item-text">Vegetables</div>
        </div>
        <div
          class="gal-item-list position-relative"
          @click="getSeedsFilter('fruit')"
        >
          <img src="../assets/mixed-fruits.png" class="gal-item" alt="Fruits" />
          <div class="gal-item-text">Fruits</div>
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
    <div
      class="d-flex align-items-center justify-content-center flex-column flex-md-row"
    >
      <button
        class="btn filter-link m-3 px-4"
        :class="
          this.selectedPhotoGallery == 'flower-photo-gallery' ? 'active' : ''
        "
        @click="setSelectedPhotoGallery('flower-photo-gallery')"
      >
        Flower Photo Gallery
      </button>
      <button
        class="btn filter-link m-3 px-4"
        :class="
          this.selectedPhotoGallery == 'vegetable-photo-gallery' ? 'active' : ''
        "
        @click="setSelectedPhotoGallery('vegetable-photo-gallery')"
      >
        Vegetable Photo Gallery
      </button>
      <button
        class="btn filter-link m-3 px-4"
        :class="
          this.selectedPhotoGallery == 'fruit-photo-gallery' ? 'active' : ''
        "
        @click="setSelectedPhotoGallery('fruit-photo-gallery')"
      >
        Fruit Photo Gallery
      </button>
    </div>
    <keep-alive>
      <component :is="selectedPhotoGallery"></component>
    </keep-alive>
  </div>
</template>

<script>
import Card from "../pages/home-landing/card.vue";
import FlowerPhotoGallery from "../pages/home-landing/flower-photo-gallery.vue";
import FruitPhotoGallery from "../pages/home-landing/fruit-photo-gallery.vue";
import VegetablePhotoGallery from "../pages/home-landing/vegetable-photo-gallery.vue";

export default {
  name: "home",
  data() {
    return {
      category: "all",
      filteredItems: [],
      count: 0,
      selectedPhotoGallery: "flower-photo-gallery"
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
    },
    setSelectedPhotoGallery(selectedVal) {
      this.selectedPhotoGallery = selectedVal;
    }
  },
  components: {
    Card,
    FlowerPhotoGallery,
    VegetablePhotoGallery,
    FruitPhotoGallery
  }
};
</script>
<style scoped>
.filter-link {
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  margin-right: 3px;
}
.filter-link:hover {
  color: blue;
  background-color: #b1bbff52;
  border-left: 1px solid blue;
  border-top: 1px solid blue;
  border-right: 1px solid blue;
  border-bottom: 3px solid blue;
  transition: 0.4s;
}
.filter-link.active {
  color: blue;
  background-color: #b1bbff52;
  border-bottom: 3px solid blue;
}

.gal-item-text {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  transition: 0.4s;
}
.gal-item-list:hover .gal-item-text {
  top: 90%;
}
</style>
