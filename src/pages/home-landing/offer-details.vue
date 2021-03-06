<template>
  <table class="table table-responsive">
    <span class="close-offer-table" @click="closeOfferTable">&times;</span>
    <thead>
      <tr>
        <th>Quantity</th>
        <th>Price per item</th>
        <th>Discount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2 items</td>
        <td>₹20.00</td>
        <td>₹5.00</td>
      </tr>
      <tr>
        <td>5 items</td>
        <td>₹20.00</td>
        <td>₹10.00</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  methods: {
    closeOfferTable() {
      this.showOffer = false;
      this.$emit("closeOffer");
    }
  }
};
</script>
<style scoped>
.close-offer-table {
  color: #ccc;
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.close-offer-table:hover {
  color: #454545;
}
</style>
