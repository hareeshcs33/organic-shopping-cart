<template>
  <div class="mx-auto edit-item-block">
    <h2>Edit item: {{ $route.params.id }}</h2>
    <div class="edit-form">
      <form v-if="editObj" class="row">
        <input-text
          class="col-6"
          label="Product"
          placeholder="Product"
          v-model="editObj.product"
          :disabled="true"
        ></input-text>
        <input-text
          class="col-6"
          label="Quantity"
          type="number"
          placeholder="Quantity"
          v-model="editObj.qty"
        ></input-text>
        <input-text
          class="col-6"
          label="Price"
          type="number"
          placeholder="Price"
          v-model="editObj.price"
          :disabled="true"
        ></input-text>
        <input-text
          class="col-6"
          label="Discount"
          type="number"
          placeholder="Discount"
          v-model="editObj.discount"
          :disabled="true"
        ></input-text>
        <div class="col-12">
          <div class="d-flex">
            <button class="btn btn-success col-6 mx-1" @click="editDone">
              Save
            </button>
            <button class="btn btn-success col-6 mx-1" @click="editCancel">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import DropDown from "../../shared/drop-down.vue";
import inputText from "../../shared/input-text.vue";

export default {
  components: {
    inputText,
    DropDown
  },
  props: {},
  data() {
    return {
      editObj: null,
      editValObj: null,
      casheBeforeEdit: null,
      coupon: null,
      totalAmount: null,
      src: null,
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.editObj = JSON.parse(localStorage.getItem("vfl-edit"));
    this.casheBeforeEditObj = JSON.parse(JSON.stringify(this.editObj));
  },
  methods: {
    editDone() {
      this.editValObj = {
        product: this.editObj.product,
        qty: this.editObj.qty,
        price: this.editObj.price,
        discount: this.editObj.discount,
        coupon: this.editObj.coupon,
        totalAmount: this.editObj.totalAmount,
        src: this.editObj.src,
        id: this.editObj.id
      };
      localStorage.setItem("vfl-edit", JSON.stringify(this.editValObj));
      console.log("saved items", this.editValObj);
      this.$store.state.editItem = false;
      this.$store.commit("editDone", this.editValObj);
      this.$router.push("/cart");
    },
    editCancel() {
      this.editObj = this.casheBeforeEditObj;
      console.log("cancelled", this.editObj);
      this.$store.state.editItem = false;
      this.$router.push("/cart");
    }
  }
};
</script>
