<template>
  <div class="page-cart">
    <div class="columns is-multiline">
        <div class="column is-12">
            <h1 class="title">Cart</h1>
        </div>
        <div class="column is-12 box">
            <table class="table is-fullwidth" v-if="cartTotalLength">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem
                        v-for="item in cart.items"
                        :key="item.product.id"
                        :initialItem="item">
                    </CartItem>
                </tbody>
            </table>
            <p v-else >You don't have any products in your cart</p>
        </div>
        <div class="column is-12 box">
            <h2 class="subtitle">
                Summary
            </h2>
            <strong>${{cartTotalPrice}}</strong>, {{cartTotalLength}} items
            <hr>
            <router-link to="/cart/checkout" class="button is-dark">Proceed to checkout</router-link>
        </div>
    </div>
  </div>
</template>

<script>

import CartItem from "./CartItem.vue"
export default {
    name: "Cart",
    components: {
        CartItem
    },
    data(){
        return {
            cart:{
                items: []
            }
        }
    },
    beforeCreate(){
      
    },
    mounted() {
        this.$store.commit("initializeStore");
        this.cart = this.$store.state.cart;
    },
    computed:{
        cartTotalLength(){
            return this.$store.state.cart.items.reduce((acc, cruVal) =>{
                return acc += cruVal.quantity
            }, 0)
        },
        cartTotalPrice(){
            return this.$store.state.cart.items.reduce((acc, cruVal) =>{
                return acc += cruVal.quantity * cruVal.product.price
            }, 0)
        }
    }
}
</script>

<style>

</style>