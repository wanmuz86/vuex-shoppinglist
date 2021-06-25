export default ({
    state: {
        cart: [],
        checkoutStatus: null
    },
    getters: {
        // Example of using map , find
        cartProducts(state) {
            // For each item in the cart
            return state.cart.map(cartItem => {
                // I will look for the matching product in products state
                const product = state.products.find(product => product.id === cartItem.id)
                // Then I will return the product information
                return {
                    title: product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        },
        cartTotal(state, getters) {
            // THe zero at the end means initial value for acc.. 
            return getters.cartProducts.reduce((acc, product) =>
                acc + product.price * product.quantity, 0)
        },
        checkoutStatus(state) {
            if (state.checkoutStatus != null) {
                state.checkoutStatus ? "Succesfully checkout" : "Something went wrong";
            }
            return null
        }

    },
    mutations: {
        pushProductToCart(state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },
        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++;
        },
        emptyCart(state) {
            state.cart = []
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        }

    },
    actions: {

        addProductToCart({ state, commit }, product) {
            // Find the item in the cart
            const cartItem = state.cart.find(item => item.id == product.id)
            if (!cartItem) {
                commit('pushProductToCart', product.id);
            }
            else {
                commit('incrementItemQuantity', cartItem);
            }
            commit('decrementProductInventory', product);
        },
        buyProducts({ state, commit }) {
            shop.buyProducts(state.cart, () => {
                // Call API, if successful
                commit('emptyCart');
                commit('setCheckoutStatus', true);

            }, () => {
                // If error will go here
                commit.setCheckoutStatus(false);
            })
        }

    }
})


