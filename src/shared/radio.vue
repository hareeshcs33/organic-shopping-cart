<template>
  <div class="form-group">
    <input
      type="radio"
      :name="name"
      :value="val"
      :id="name + '_' + index"
      v-model="radioButtonValue"
      :disabled="isDisabled"
    />
    <label :for="name + '_' + index">{{ label }}</label>
    <!-- <div>inside radio value: {{ radioButtonValue }}</div> -->
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
    val: {
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
  computed: {
    radioButtonValue: {
      get: function() {
        return this.value;
      },
      set: function() {
        this.$emit("change", this.label);
        console.log("val", this.label);
      }
    }
  }
};
</script>
