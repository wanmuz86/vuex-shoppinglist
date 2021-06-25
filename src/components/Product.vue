<template>
  <div>
    <p>Product component</p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}}
        - {{product.price}} - {{product.inventory}}
        <button
          v-on:click="addProductToCart(product)"
          v-bind:disabled="!productIsInStock(product)"
        >Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "Product",
  created() {
    this.fetchProducts().then(() => console.log(this.$store.state.products));
  },
  computed: {
    ...mapState({
      products: state => state.product.products
    }),
    ...mapGetters("product", ["productIsInStock"])
  },
  methods: {
    ...mapActions({
      fetchProducts: "product/fetchProducts",
      addProductToCart: "cart/addProductToCart"
    })
  }
};
</script>

<style>
</style>