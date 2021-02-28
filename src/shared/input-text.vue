<template>
  <div class="form-group">
    <label class="d-block" for="">{{ label }}</label>
    <input
      ref="inputText"
      :type="type"
      class="form-control"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="updateValue($event.target.value)"
    />
    <!-- inside input {{ emailId }} -->
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: null
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    removeSapace(value) {
      value = value.replace(/\s\s+/g, " ");
      return value;
    }
  }
};
</script>
