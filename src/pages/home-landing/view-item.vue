<template>
  <div class="card mb-3">
    <div class="card-header">
      <h5>{{ viewObj.product }}</h5>
    </div>
    <div class="card-body text-center">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="img-box">
          <img class="item-img" :src="'/static/img/' + viewObj.src" />
        </div>
        <div class="py-3">
          <div>Product: {{ viewObj.product }}</div>
          <div>Price: {{ viewObj.price }}</div>
        </div>
        <div class="d-flex align-items-center cta-wrapper">
          <div class="d-flex flex-column">
            <button
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
            </button>
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
