<template>
  <div class="container">
    <div class="card mb-3">
      <div class="card-header d-flex align-items-center justify-content-center">
        <router-link to="/"
          ><i class="fas fa-fast-backward backward-icon"></i
        ></router-link>
        <h5 class="text-center mb-0">{{ viewObj.product }}</h5>
      </div>
      <div class="card-body text-center">
        <div class="d-flex flex-column flex-md-row">
          <div
            class="d-flex flex-column align-items-center justify-content-between h-100 pr-3"
          >
            <div class="img-box">
              <img
                class="item-img item-img-view"
                :src="'/static/img/' + viewObj.src"
              />
            </div>
            <div class="d-flex my-2">
              <div class="small-img-box mr-2">
                <img
                  class="small-item-img-view"
                  :src="'/static/img/' + viewObj.seedPath"
                />
              </div>
              <div class="small-img-box">
                <img
                  class="small-item-img-view"
                  :src="'/static/img/' + viewObj.src"
                />
              </div>
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
                  Remove Cart
                </button>
                <button
                  class="btn btn-info btn-md px-5 mb-1"
                  @click="editCard(viewObj)"
                  v-if="viewObj.cart"
                >
                  Edit Item
                </button>
                <p class="mb-0 cart-notify-text">{{ message }}</p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <div class="text-left">
              <table class="table w-100 table-responsive item-details-table">
                <tbody>
                  <tr>
                    <td colspan="2">
                      <h5>{{ viewObj.product }}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>Seed Count:</td>
                    <td>{{ viewObj.seedsCount }} Seeds</td>
                  </tr>
                  <tr>
                    <td>Product Details:</td>
                    <td>{{ viewObj.productDetails }}</td>
                  </tr>
                  <tr>
                    <td>Sunlight:</td>
                    <td>{{ viewObj.Sunlight }}</td>
                  </tr>
                  <tr>
                    <td>Time Till Harvest:</td>
                    <td>{{ viewObj.TimeTillHarvest }}</td>
                  </tr>
                  <tr>
                    <td>Qty:</td>
                    <td>
                      <select v-model="viewObj.qty">
                        <option v-for="num in 20" :key="num">{{ num }}</option>
                      </select>
                      <span v-if="viewObj.qty == 1"
                        >Buy more, save more,
                        <a
                          class="link"
                          title="see offer details"
                          @click="showOfferDetails"
                        >
                          Offers</a
                        ></span
                      >
                    </td>
                  </tr>
                  <tr v-if="viewObj.qty > 1">
                    <td>discount:</td>
                    <td>{{ viewObj.discount }}</td>
                  </tr>
                  <tr>
                    <td>Price:</td>
                    <td>{{ viewObj.price }}</td>
                  </tr>
                  <tr>
                    <td>Total Price:</td>
                    <td>
                      <span v-if="viewObj.qty == 1"
                        >₹{{ actualPriceValue }}</span
                      >
                      <span v-if="viewObj.qty > 1">₹{{ priceValue }}</span>
                      <span v-if="viewObj.qty > 1" class="actual-price-value"
                        >₹{{ actualPriceValue }}</span
                      >
                      <!-- <i class="fas fa-rupee-sign"></i> -->
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <button
              class="btn btn-info btn-md px-5 mb-1"
              @click="addToCart(viewObj)"
              v-if="!viewObj.cart"
            >
              Add Cart
            </button> -->
            </div>
          </div>
        </div>
      </div>
      <offer-details
        class="offer-details"
        :class="showOffer ? 'show' : ''"
        :showOffer="showOffer"
        @closeOffer="closeOffer"
      ></offer-details>
    </div>
  </div>
</template>
<script>
import OfferDetails from "./offer-details.vue";

export default {
  data() {
    return {
      message: "",
      id: null,
      viewObj: null,
      casheBeforeViewObj: null,
      showOffer: false
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.viewObj = JSON.parse(localStorage.getItem("view-item"));
    this.casheBeforeViewObj = JSON.parse(JSON.stringify(this.viewObj));
    console.log(this.id);
    console.log("viewObj", this.viewObj);
  },
  mounted() {
    console.log("priceValue", this.priceValue);
  },
  computed: {
    priceValue() {
      const price = parseInt(this.viewObj.price.slice(1, 3));
      const discount = parseInt(this.viewObj.discount.slice(1, 2));
      return (price * this.viewObj.qty - discount).toFixed(2);
    },
    actualPriceValue() {
      const price = parseInt(this.viewObj.price.slice(1, 3));
      return (price * this.viewObj.qty).toFixed(2);
    }
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
      this.message = this.viewObj.cart
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
    },
    showOfferDetails() {
      this.showOffer = !this.showOffer;
      setTimeout(() => {
        this.showOffer = false;
      }, 15000);
    },
    closeOffer() {
      this.showOffer = false;
    }
  },
  components: {
    OfferDetails
  }
};
</script>
<style scoped>
.img-box {
  min-width: 320px;
  width: 320px;
  height: 320px;
}
.item-img.item-img-view {
  min-width: 320px;
  width: 320px;
  height: 320px;
  transition: 0.4s;
}

.item-details-table tbody tr td:first-child {
  white-space: nowrap;
}
.actual-price-value {
  color: #a3a3a3;
  text-decoration: line-through;
  padding-left: 5px;
}
.offer-details {
  background-color: #fff;
  max-width: 350px;
  position: fixed;
  top: 21%;
  right: -350px;
  z-index: 1;
  transition: 1s;
  border-right: 2px solid red;
}
.offer-details.show {
  right: 0;
}
.backward-icon {
  position: absolute;
  top: 25px;
  left: 20px;
}
@media (max-width: 767px) {
  .img-box {
    min-width: 250px;
    width: 250px;
    height: 250px;
  }
  .item-img.item-img-view {
    min-width: 250px;
    width: 250px;
    height: 250px;
    transition: 0.4s;
  }
  .backward-icon {
    position: static;
    margin-right: 10px;
  }
}
</style>
