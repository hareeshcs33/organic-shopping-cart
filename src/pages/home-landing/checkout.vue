<template>
  <div class="container">
    <div>
      checkout page
    </div>
    <div
      class="d-flex flex-column flex-md-row"
      v-if="cartItemsToCheckout.length > 0"
    >
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
                <span class="close-icon" @click="removeItemFromCart(item)"
                  >&times;</span
                >
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
            <div class="w-100">
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
            <div class="pb-3 w-100" v-if="!coupon" @click="couponOrGift">
              <div>Have a promo coupon or gift card?</div>
              <a class="link">Redeem your code</a>
            </div>
            <div v-else>
              <div class="pb-3 w-100">
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
            <div class="pb-3 w-100">
              <div>Looking for more?</div>
              <router-link to="/">Continue shopping</router-link>
            </div>
          </div>
        </li>
      </ul>
      <ul class="ml-0 ml-md-4 bg-white">
        <li>
          <div class="p-3">
            <h2>Checkout</h2>
            <p>
              Enter your email address. This address will be used to send you
              order status updates.
            </p>
            <div class="mb-3">
              <input
                type="text"
                placeholder="Your Email Address"
                class="form-control"
                :disabled="false"
              />
            </div>
            <div class="d-flex align-items-center mb-3">
              <input type="checkbox" checked :disabled="false" />
              <label class="pl-2 mb-0"
                >Keep me up to date on news and exclusive offers</label
              >
            </div>
            <div class="d-flex align-items-center">
              <button class="btn btn-primary px-5 mr-3">Checkout</button>
              <div class="d-flex align-items-center encrypted-text">
                <i class="fas fa-lock"></i>
                <span class="ml-2">
                  All data is transmitted encrypted via a secure TLS connection
                </span>
              </div>
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
      this.coupon = true;
      console.log("couponOrGift");
    },
    couponCheck() {
      this.coupon = false;
      console.log("couponCheck");
    },
    removeItemFromCart(item) {
      item.cart = false;
      this.$store.commit("removeFromCart", item.id);
      if (this.cartItemsToCheckout.length == 0) {
        this.$router.push("/cart");
      }
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
.checkout-list {
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  list-style: none;
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
ul {
  list-style: none;
}
.encrypted-text {
  color: #ccc;
  font-size: 13px;
  cursor: not-allowed;
}
</style>
