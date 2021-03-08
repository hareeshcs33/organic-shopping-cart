<template>
  <div class="photo-gallery">
    <h3 class="text-center">Featured Products</h3>
    <div>Photo Gallery</div>
    <div class="bg-white p-4">
      <ul
        class="d-flex align-items-center justify-content-center flex-wrap flowers-wrapper"
      >
        <li v-for="num in this.count" :key="num" class="flowers-list">
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
ul li {
  list-style: none;
}
.flowers-wrapper {
  max-height: 500px;
  overflow: auto;
}
.flowers-list {
  width: 250px;
  height: 250px;
  overflow: hidden;
  transition: 0.3s;
}
.gal-item {
  width: 250px;
  height: 250px;
  border: 1px solid #fff;
  transition: 0.4s;
}
.flowers-list:hover .gal-item {
  transform: scale(1.5);
}
</style>
