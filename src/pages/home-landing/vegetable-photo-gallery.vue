<template>
  <div class="photo-gallery">
    <h3 class="text-center">Featured Products</h3>
    <div>Vegetables Photo Gallery</div>
    <div class="bg-white p-4">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap gal-item-wrapper"
      >
        <li v-for="num in this.count" :key="num" class="gal-item-list">
          <img :src="'/static/img/' + num + '.jpg'" class="gal-item" />
        </li>
      </ul>
      <div class="d-flex align-items-center justify-content-center">
        <button
          class="btn btn-primary btn-sm px-3 mr-3"
          :disabled="this.count <= 10"
          @click="prevItems"
        >
          Prev
        </button>
        <button
          class="btn btn-primary btn-sm px-3"
          :disabled="this.count >= 38"
          @click="nextItems"
        >
          NEXT >>>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 10
    };
  },
  methods: {
    nextItems() {
      this.count += 5;
      console.log("show next items", this.count);
    },
    prevItems() {
      this.count -= 5;
      console.log("show prev items", this.count);
    }
  }
};
</script>
<style scoped>
.vegetablesG {
  background-image: url("../../assets/vegitables/1.jpg");
  background-image: url("../../assets/vegitables/2.jpg");
  background-image: url("../../assets/vegitables/3.jpg");
  background-image: url("../../assets/vegitables/4.jpg");
  background-image: url("../../assets/vegitables/5.jpg");
  background-image: url("../../assets/vegitables/6.jpg");
  background-image: url("../../assets/vegitables/7.jpg");
  background-image: url("../../assets/vegitables/8.jpg");
  background-image: url("../../assets/vegitables/9.jpg");
  background-image: url("../../assets/vegitables/10.jpg");
  background-image: url("../../assets/vegitables/11.jpg");
  background-image: url("../../assets/vegitables/12.jpg");
  background-image: url("../../assets/vegitables/13.jpg");
  background-image: url("../../assets/vegitables/14.jpg");
  background-image: url("../../assets/vegitables/15.jpg");
  background-image: url("../../assets/vegitables/16.jpg");
  background-image: url("../../assets/vegitables/17.jpg");
  background-image: url("../../assets/vegitables/18.jpg");
  background-image: url("../../assets/vegitables/19.jpg");
  background-image: url("../../assets/vegitables/20.jpg");
  background-image: url("../../assets/vegitables/21.jpg");
  background-image: url("../../assets/vegitables/22.jpg");
  background-image: url("../../assets/vegitables/23.jpg");
  background-image: url("../../assets/vegitables/24.jpg");
  background-image: url("../../assets/vegitables/25.jpg");
  background-image: url("../../assets/vegitables/26.jpg");
  background-image: url("../../assets/vegitables/27.jpg");
  background-image: url("../../assets/vegitables/28.jpg");
  background-image: url("../../assets/vegitables/29.jpg");
}
</style>
