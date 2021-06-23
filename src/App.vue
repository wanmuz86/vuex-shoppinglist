<template>
  <div id="app">
    <Product/>
    <ShoppingList/>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'
import Product from './components/Product.vue'

export default {
  name: 'App',
  components: {
    ShoppingList,
    Product
  }
}
</script>

<style>

</style>
