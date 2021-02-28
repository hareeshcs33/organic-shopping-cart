<template>
  <div class="navbar">
    <ul class="nav">
      <router-link to="/home" tag="li" active-class="active"
        ><a>Home</a></router-link
      >
      <router-link to="/cart" tag="li" active-class="active"
        ><a
          >Cart (<strong class="cart-count-text">{{ getCartCount }}</strong
          >)</a
        ></router-link
      >
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    getCartCount() {
      return this.$store.getters.getCartCount;
    }
  }
};
</script>
