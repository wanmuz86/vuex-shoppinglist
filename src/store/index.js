import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'
Vue.use(Vuex)
export default new Vuex.Store({
 state: {
     products:[],
     cart:[]
},
 getters: {
     // Example of using map , find
    cartProducts(state){
        // For each item in the cart
        return state.cart.map(cartItem=>{
            // I will look for the matching product in products state
            const product = state.products.find(product=> product.id === cartItem.id)
            // Then I will return the product information
            return {
                title:product.title,
                price:product.price,
                quantity:cartItem.quantity
            }
        })
    },
    cartTotal(state, getters){
        // THe zero at the end means initial value for acc.. 
        return getters.cartProducts.reduce((acc, product)=> 
        acc + product.price * product.quantity,0)
    }
},
 mutations: {
     setProducts(state,products){
         state.products  = products;
     },
     pushProductToCart(state,productId){
         state.cart.push({
             id:productId,
             quantity:1
         })
     }
   
 },
 actions: {
     fetchProducts({commit}) {
         return new Promise((resolve)=>{
            shop.getProducts(products => {
                commit('setProducts',products);
                resolve()
            })
     })
  
 },
 addProductToCart({commit},product){
     commit('pushProductToCart',product.id);
 }
}
})
