<template>
  <div class="card mb-3">
    <div class="card-header">
      <h5>{{ item.product }}</h5>
    </div>
    <div class="card-body text-center">
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="img-box">
          <img class="item-img" :src="'/static/img/' + item.src" />
        </div>
        <div class="py-3">
          <div>Product: {{ item.product }}</div>
          <div>Price: {{ item.price }}</div>
        </div>
        <div class="d-flex align-items-center cta-wrapper">
          <div class="d-flex flex-column">
            <button
              class="btn btn-info btn-md px-5 mb-1"
              @click="addToCart(item)"
              v-if="!item.cart"
            >
              Add Cart
            </button>
            <button
              class="btn btn-info btn-md px-5 mb-1"
              @click="removeFromCart(item)"
              v-else
            >
              Remove From Cart
            </button>
            <button
              class="btn btn-info btn-md px-5 mb-1"
              @click="editCard(item)"
              v-if="item.cart"
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
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      message: ""
    };
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
      console.log("edit item", item);
      localStorage.setItem("vfl-edit", JSON.stringify(item));
      this.$store.state.editItem = true;
      this.$router.push("edit-item/" + item.id);
    }
  }
};
</script>
