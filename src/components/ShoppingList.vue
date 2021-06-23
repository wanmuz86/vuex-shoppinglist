<template>
  <div>
    <p>My Cart</p>
    <ul>
        <li v-for="item in cartProducts" :key="item.title">{{item.title}} - {{item.price}} - {{item.quantity}}</li>
    </ul>
    <p>Total Price : {{cartTotal}}</p>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: 'ShoppingList',
  computed:{
  ...mapState([
    'cart'
  ]),
  ...mapGetters([
      'cartProducts',
      'cartTotal'
  ])
  },
  
}
</script>

<style>

</style>