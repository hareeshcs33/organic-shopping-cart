<template>
  <div class="form-group">
    <div>{{ label }}:</div>
    <select
      class="form-control"
      :label="label"
      :value="value"
      :disabled="disabled"
      @change="updateValue($event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        v-bind:value="option.value"
        :selected="option.value == value"
        >{{ option.text }}</option
      >
    </select>
    <!-- <div>inside {{ value }}</div> -->
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: 0
    },
    options: {
      default: function() {
        return [];
      }
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      default: ""
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>
