<template>
  <div>
    <p>My Cart</p>
    <ul>
        <li v-for="item in cartProducts" :key="item.title">{{item.title}} - {{item.price}} - {{item.quantity}}</li>
    </ul>
    <p>Total Price : {{cartTotal}}</p>
    <p><button v-on:click="buyProducts">Checkout</button></p>
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex'
export default {
  name: 'ShoppingList',
  computed:{
  ...mapState({
     cartProducts:state=>state.cart.cart,
     }
     ),

  ...mapGetters('cart',[
      'cartProducts',
      'cartTotal',
      'checkoutStatus'
  ])
  },
   methods: {
   ...mapActions({
     buyProducts:'cart/buyProducts'
   })
   }
  
}
</script>

<style>

</style>