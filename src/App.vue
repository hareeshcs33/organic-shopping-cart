<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
    <footer-content></footer-content>
  </div>
</template>

<script>
import FooterContent from "./components/footer-content.vue";
import Navbar from "./components/navbar";

export default {
  name: "App",
  components: {
    Navbar,
    FooterContent
  }
};
</script>

<style>
#app {
  font-family: "Lato", sans-serif;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #454545;
}
body {
  margin: 0;
  background-image: url("./assets/body-bg.png");
}
</style>
<style src="./css/common.css"></style>
