<template>
  <div class="card mb-3">
    <div class="card-header">
      <h5 class="text-center">{{ viewObj.product }}</h5>
    </div>
    <div class="card-body text-center">
      <div class="d-flex">
        <div
          class="d-flex flex-column align-items-center justify-content-between h-100 pr-3"
        >
          <div class="img-box">
            <img
              class="item-img item-img-view"
              :src="'/static/img/' + viewObj.src"
            />
          </div>
          <div class="py-3">
            <div>{{ viewObj.product }}</div>
            <div>Price: {{ viewObj.price }}</div>
          </div>
          <div class="d-flex align-items-center cta-wrapper">
            <div class="d-flex flex-column">
              <!-- <button
                class="btn btn-info btn-md px-5 mb-1"
                @click="addToCart(viewObj)"
                v-if="!viewObj.cart"
              >
                Add Cart
              </button>
              <button
                class="btn btn-info btn-md px-5 mb-1"
                @click="removeFromCart(viewObj)"
                v-else
              >
                Remove From Cart
              </button> -->
              <button
                class="btn btn-info btn-md px-5 mb-1"
                @click="editCard(viewObj)"
                v-if="viewObj.cart"
              >
                Edit Item
              </button>
              <p class="mb-0">{{ message }}</p>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="text-left">
            <h5 class="font-weight-bold">{{ viewObj.product }}</h5>
            <div><strong>Seed Count:</strong> {{ viewObj.seedsCount }}</div>
            <p>
              <strong>Product Details:</strong> {{ viewObj.productDetails }}
            </p>
            <div class="d-flex align-items-center mb-3">
              <strong class="pr-2">Qty:</strong>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
              </select>
            </div>
            <button
              class="btn btn-info btn-md px-5 mb-1"
              @click="addToCart(viewObj)"
              v-if="!viewObj.cart"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      id: null,
      viewObj: null,
      casheBeforeViewObj: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.viewObj = JSON.parse(localStorage.getItem("view-item"));
    this.casheBeforeViewObj = JSON.parse(JSON.stringify(this.viewObj));
    console.log(this.id);
    console.log("viewObj", this.viewObj);
  },
  methods: {
    addToCart(item) {
      item.cart = true;
      console.log(item);
      this.addRemoveCartText();
      this.$store.commit("addToCart", item.id);
    },
    removeFromCart(item) {
      item.cart = false;
      console.log(item);
      this.addRemoveCartText();
      this.$store.commit("removeFromCart", item.id);
    },
    addRemoveCartText() {
      this.message = this.item.cart
        ? "Added item to cart"
        : "Removed item from cart";
      setTimeout(() => {
        this.message = "";
      }, 3000);
      return this.message;
    },
    editCard(item) {
      this.$store.state.editItem = true;
      console.log("edit item", item);
      localStorage.setItem("vfl-edit", JSON.stringify(item));
      this.$store.state.editItem = true;
      this.$router.push("edit-item/" + item.id);
    }
  }
};
</script>
<style scoped>
.img-box {
  min-width: 400px;
  width: 400px;
  height: 400px;
}
.item-img.item-img-view {
  min-width: 400px;
  width: 400px;
  height: 400px;
  transition: 0.4s;
}
</style>
