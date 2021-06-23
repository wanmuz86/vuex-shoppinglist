<template>
  <div>
    <p>Product component</p>
    <ul>
        <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}} - {{product.inventory}}</li>
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
          'fetchProducts'
      ])
  }
}
</script>

<style>

</style>