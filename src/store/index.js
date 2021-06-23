import Vue from 'vue'
import Vuex from 'vuex'
import shop from '@/api/shop'
Vue.use(Vuex)
export default new Vuex.Store({
 state: {
     products:[]
},
 getters: {
    
},
 mutations: {
     setProducts(state,products){
         state.products  = products;
         
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
  
 }
}
})
