<template>
  <div class="navbar">
    <ul class="nav main-nav-block">
      <router-link to="/" tag="li" active-class="active" exact
        ><a><i class="fas fa-home"></i>Home</a></router-link
      >
      <router-link to="/cart" tag="li" active-class="active"
        ><a
          ><i class="fas fa-cart-plus"></i> Cart (<strong
            class="cart-count-text"
            >{{ getCartCount }}</strong
          >)</a
        ></router-link
      >
      <router-link to="/likes" tag="li" active-class="active"
        ><a
          ><i class="fas fa-heart"></i> Likes (<strong
            class="cart-count-text"
            >{{ getLikesItemsList }}</strong
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
    },
    getLikesItemsList() {
      return this.$store.getters.getLikesItemsList.length;
    }
  }
};
</script>
<style scoped>
.main-nav-block li {
  border-bottom: 3px solid transparent;
  cursor: pointer;
  margin-right: 3px;
}
.main-nav-block li:hover {
  background-color: #b1bbff52;
  border-bottom: 3px solid blue;
  transition: 0.4s;
}
.main-nav-block li:hover a {
  color: blue;
}
.main-nav-block li.active {
  color: blue;
  background-color: #b1bbff52;
  border-bottom: 3px solid blue;
}
</style>
