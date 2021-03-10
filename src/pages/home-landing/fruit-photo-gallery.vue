<template>
  <div class="photo-gallery mb-5">
    <div class="px-3">Fruits Photo Gallery</div>
    <div class="bg-white p-4">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap gal-item-wrapper"
      >
        <li v-for="num in this.count" :key="num" class="gal-item-list">
          <img :src="'/static/img/fr-' + num + '.jpg'" class="gal-item" />
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
          :disabled="this.count >= 28"
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
.fruitsG {
  background-image: url("../../assets/fruits/fr-1.jpg");
  background-image: url("../../assets/fruits/fr-2.jpg");
  background-image: url("../../assets/fruits/fr-3.jpg");
  background-image: url("../../assets/fruits/fr-4.jpg");
  background-image: url("../../assets/fruits/fr-5.jpg");
  background-image: url("../../assets/fruits/fr-6.jpg");
  background-image: url("../../assets/fruits/fr-7.jpg");
  background-image: url("../../assets/fruits/fr-8.jpg");
  background-image: url("../../assets/fruits/fr-9.jpg");
  background-image: url("../../assets/fruits/fr-10.jpg");
  background-image: url("../../assets/fruits/fr-11.jpg");
  background-image: url("../../assets/fruits/fr-12.jpg");
  background-image: url("../../assets/fruits/fr-13.jpg");
  background-image: url("../../assets/fruits/fr-14.jpg");
  background-image: url("../../assets/fruits/fr-15.jpg");
  background-image: url("../../assets/fruits/fr-16.jpg");
  background-image: url("../../assets/fruits/fr-17.jpg");
  background-image: url("../../assets/fruits/fr-18.jpg");
  background-image: url("../../assets/fruits/fr-19.jpg");
  background-image: url("../../assets/fruits/fr-20.jpg");
  background-image: url("../../assets/fruits/fr-21.jpg");
  background-image: url("../../assets/fruits/fr-22.jpg");
  background-image: url("../../assets/fruits/fr-23.jpg");
  background-image: url("../../assets/fruits/fr-24.jpg");
  background-image: url("../../assets/fruits/fr-25.jpg");
  background-image: url("../../assets/fruits/fr-26.jpg");
  background-image: url("../../assets/fruits/fr-27.jpg");
  background-image: url("../../assets/fruits/fr-28.jpg");
}
</style>
