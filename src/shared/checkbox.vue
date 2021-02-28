<template>
  <div class="form-group">
    <input
      type="checkbox"
      :value="value"
      :disabled="isDisabled"
      v-model="checkboxes"
      @change="updateValue($event.target.value)"
    />
    <label :for="name + '_' + index">{{ label }}</label>
    <ul>
      <!-- <li v-for="checkbox in checkboxes" :key="checkbox">{{ checkbox }}</li> -->
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    index: {
      type: Number,
      default: 0
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkboxValue: null,
      checkboxes: []
    };
  },
  methods: {
    updateValue(val) {
      console.log("checkboxes", this.checkboxes, val);
      this.$emit("input", val);
    }
  }
};
</script>
