<template>
  <div class="container">
    <h3>Checkout page {{ this.qtyPrice }}</h3>
    <div
      class="d-flex flex-column flex-lg-row mb-5"
      v-if="cartItemsToCheckout.length > 0"
    >
      <div class="d-flex flex-column">
        <ul class="checkout-list mb-0 w-100">
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
                  <span
                    >Qty:
                    <select
                      v-model="item.qty"
                      @change="updatePriceValue(item, $event.target.value)"
                    >
                      <option v-for="num in 20" :key="num">{{ num }}</option>
                    </select>
                  </span>
                  <span>price: {{ item.price }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li class="d-flex flex-column bg-white">
            <div class="p-3 d-flex w-100">
              <div class="w-100">
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <span>Subtotal</span>
                  <span
                    :class="
                      this.getSubtotal > this.minOrder
                        ? 'green-text'
                        : 'red-text'
                    "
                    >₹ {{ getSubtotal }}</span
                  >
                </div>
                <div
                  class="d-flex align-items-center justify-content-between mb-3"
                >
                  <span>Shipping or delivery</span>
                  <span :class="!shippingChargeStatus ? 'text-strike' : ''"
                    >₹99.00</span
                  >
                </div>
                <div
                  class="d-flex align-items-center justify-content-between total-text mb-2"
                >
                  <span>TOTAL</span>
                  <div class="d-flex flex-column">
                    <span>Total: ₹{{ totalAmount }}</span>
                  </div>
                </div>
                <div>Free Shipping above Rs 149.99 order.</div>
                <a
                  class="link"
                  @click="$router.push('/')"
                  v-if="this.getSubtotal < this.minOrder"
                  >More Shipping
                </a>
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
      </div>
      <ul class="ml-0 ml-lg-4 bg-white">
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
            <div class="d-flex align-items-center mb-3">
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
      coupon: false,
      shippingCharge: 99,
      shippingChargeStatus: Boolean,
      minOrder: 149.99,
      qtyPrice: null
    };
  },
  computed: {
    cartItemsToCheckout() {
      return (this.cartItems = this.$store.getters.getCartItems);
    },
    getSubtotal() {
      return this.$store.getters.getCartItems
        .map(item => parseInt(item.price.slice(1, 3)))
        .reduce((price, totalPrice) => (totalPrice += price))
        .toFixed(2);
    },
    getSubtotaltWithShipping() {
      return (parseInt(this.getSubtotal) + this.shippingCharge).toFixed(2);
    },
    totalAmount() {
      if (this.getSubtotal > this.minOrder) {
        this.shippingChargeStatus = false;
        return this.getSubtotal;
      } else {
        this.shippingChargeStatus = true;
        return this.getSubtotaltWithShipping;
      }
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
    },
    updatePriceValue(item) {
      this.qtyPrice = (parseInt(item.price.slice(1, 3)) * item.qty).toFixed(2);
      console.log("qtyPrice", this.qtyPrice);
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
  max-height: 370px;
  overflow: auto;
}
@media (max-width: 991px) {
  .checkout-list {
    max-width: 100%;
  }
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
.text-strike {
  color: #ccc;
  font-weight: normal;
  text-decoration: line-through;
  padding-left: 5px;
}
.green-text {
  color: green;
}
.red-text {
  color: red;
}
</style>
