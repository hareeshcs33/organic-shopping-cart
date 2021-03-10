<template>
  <div class="photo-gallery mb-5">
    <div>Flowers Photo Gallery</div>
    <div class="bg-white p-4">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap gal-item-wrapper"
      >
        <li v-for="num in this.count" :key="num" class="gal-item-list">
          <img :src="'/static/img/img-' + num + '.jpg'" class="gal-item" />
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
.flowersG {
  background-image: url("../../assets/flowers/img-1.jpg");
  background-image: url("../../assets/flowers/img-2.jpg");
  background-image: url("../../assets/flowers/img-3.jpg");
  background-image: url("../../assets/flowers/img-4.jpg");
  background-image: url("../../assets/flowers/img-5.jpg");
  background-image: url("../../assets/flowers/img-6.jpg");
  background-image: url("../../assets/flowers/img-7.jpg");
  background-image: url("../../assets/flowers/img-8.jpg");
  background-image: url("../../assets/flowers/img-9.jpg");
  background-image: url("../../assets/flowers/img-10.jpg");
  background-image: url("../../assets/flowers/img-11.jpg");
  background-image: url("../../assets/flowers/img-12.jpg");
  background-image: url("../../assets/flowers/img-13.jpg");
  background-image: url("../../assets/flowers/img-14.jpg");
  background-image: url("../../assets/flowers/img-15.jpg");
  background-image: url("../../assets/flowers/img-16.jpg");
  background-image: url("../../assets/flowers/img-17.jpg");
  background-image: url("../../assets/flowers/img-18.jpg");
  background-image: url("../../assets/flowers/img-19.jpg");
  background-image: url("../../assets/flowers/img-20.jpg");
  background-image: url("../../assets/flowers/img-21.jpg");
  background-image: url("../../assets/flowers/img-22.jpg");
  background-image: url("../../assets/flowers/img-23.jpg");
  background-image: url("../../assets/flowers/img-24.jpg");
  background-image: url("../../assets/flowers/img-25.jpg");
  background-image: url("../../assets/flowers/img-26.jpg");
  background-image: url("../../assets/flowers/img-27.jpg");
  background-image: url("../../assets/flowers/img-28.jpg");
  background-image: url("../../assets/flowers/img-29.jpg");
  background-image: url("../../assets/flowers/img-30.jpg");
  background-image: url("../../assets/flowers/img-31.jpg");
  background-image: url("../../assets/flowers/img-32.jpg");
  background-image: url("../../assets/flowers/img-33.jpg");
  background-image: url("../../assets/flowers/img-34.jpg");
  background-image: url("../../assets/flowers/img-35.jpg");
  background-image: url("../../assets/flowers/img-36.jpg");
  background-image: url("../../assets/flowers/img-37.jpg");
  background-image: url("../../assets/flowers/img-38.jpg");
}
</style>
