

export default ({
    state: {
      products:[]
       },
    getters: {
      productIsInStock(){
         // Function that will retrieve product as a parameter
         return (product) =>{
             // If product.inventory > 0 , it will return true... If not it will return false
             return product.inventory > 0
         }
     },
       
   },
    mutations: {
      setProducts(state,products){
         state.products  = products;
     },
     decrementProductInventory(state,product){
      product.inventory--;
  },
      
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
   
   