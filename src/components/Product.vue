<template>
  <div>
    <p>Product component</p>
    <ul>
        <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}} - {{product.inventory}} <button v-on:click="addProductToCart(product)">Add to Cart</button></li>
    </ul>
  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
export default {
  name: 'Product',
  created(){
      this.fetchProducts()
      .then(()=>console.log(this.$store.state.products));
      
  },
  computed:{
  ...mapState([
    'products'
  ])
  },
  methods: {
      ...mapActions([
          'fetchProducts',
          'addProductToCart'
      ])
  }
}
</script>

<style>

</style>