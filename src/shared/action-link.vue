<template>
  <div>
    <router-link to="#" :class="cssClass">
      <slot></slot>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    cssClass: {
      type: String,
      default: ""
    }
  },
  methods: {}
};
</script>
