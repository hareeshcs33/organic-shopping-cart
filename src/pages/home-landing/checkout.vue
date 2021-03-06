<template>
  <div class="container">
    <div>
      checkout page
    </div>
    <div class="checkout-list-wrapper">
      <ul class="checkout-list">
        <li
          v-for="item in cartItemsToCheckout"
          :key="item.id"
          class="d-flex bg-white"
        >
          <div class="p-3 d-flex w-100">
            <div class="small-img-box">
              <img
                class="small-item-img-view"
                :src="'/static/img/' + item.src"
              />
            </div>
            <div class="pl-3 w-100">
              <div
                class="d-flex align-items-center justify-content-between mb-3"
              >
                <span>{{ item.product }}</span>
                <span class="close-icon ">&times;</span>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <span>Qty: {{ item.qty }}</span>
                <span>price: {{ item.price }}</span>
              </div>
            </div>
          </div>
        </li>
        <li class="d-flex flex-column bg-white">
          <div class="p-3 d-flex w-100">
            <div class="pl-3 w-100">
              <div
                class="d-flex align-items-center justify-content-between mb-3"
              >
                <span>Subtotal</span>
                <span>₹60.00</span>
              </div>
              <div
                class="d-flex align-items-center justify-content-between mb-3"
              >
                <span>Shipping or delivery</span>
                <span>₹99.00</span>
              </div>
              <div
                class="d-flex align-items-center justify-content-between total-text"
              >
                <span>TOTAL</span>
                <span>₹159.00</span>
              </div>
            </div>
          </div>
          <div class="p-3">
            <div class="p-3 w-100" v-if="!coupon" @click="couponOrGift">
              <div>Have a promo coupon or gift card?</div>
              <a class="link">Redeem your code</a>
            </div>
            <div v-else>
              <div class="p-3 w-100">
                <div class="d-flex">
                  <input
                    type="text"
                    placeholder="Enter your coupon code"
                    class="form-control"
                    @keydown.enter="couponCheck"
                    @keydown.esc="couponCheck"
                    @blur="couponCheck"
                    v-focus
                  />
                  <input
                    type="button"
                    value="apply"
                    class="form-control input-cta"
                    @click="couponCheck"
                  />
                </div>
                <div class="d-flex">
                  <input
                    type="text"
                    placeholder="Enter your gift card code"
                    class="form-control"
                    @keydown.enter="couponCheck"
                    @keydown.esc="couponCheck"
                    @blur="couponCheck"
                  />
                  <input
                    type="button"
                    value="apply"
                    class="form-control input-cta"
                    @click="couponCheck"
                  />
                </div>
              </div>
            </div>
            <div class="p-3 w-100">
              <div>Looking for more?</div>
              <router-link to="/">Continue shopping</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coupon: false
    };
  },
  computed: {
    cartItemsToCheckout() {
      return this.$store.getters.getCartItems;
    }
  },
  methods: {
    couponOrGift() {
      console.log("couponOrGift");
      this.coupon = true;
    },
    couponCheck() {
      console.log("couponCheck");
      this.coupon = false;
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>
<style scoped>
.checkout-list-wrapper {
  display: flex;
}
.checkout-list {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
}
.checkout-list li {
  border-bottom: 1px solid #999;
}
.small-img-box {
  min-width: 90px;
  height: 90px;
}
.total-text {
  color: #000;
  font-size: 18px;
  font-weight: 600;
}
.input-cta {
  display: inline-block;
  width: 120px;
  margin: 0 0 10px 10px;
}
</style>
