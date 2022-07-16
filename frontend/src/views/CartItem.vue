<template>
  <tr>
    
    <td><router-link :to="item.product.get_absolute_url">{{item.product.name}}</router-link>
    </td>
    <td>${{item.product.price}}</td>
    <td>
        {{item.quantity}}
        <button type="button" @click="decrementQuantity(item)">-</button>
        <button type="button" @click="incrementQuantity(item)">+</button>
    </td>
    <td>${{totalPrice}}</td>
    <td><button class="delete" @click="removeFromCart(item)"></button></td>
  </tr>
</template>

<script>
export default {
    name: "CartItem",
    props: {
        initialItem: Object
    },
    data() {
        return {
            item: this.initialItem,
            totalPrice: 0
        }
    },
    mounted() {
        this.totalPrice = this.item.quantity * this.item.product.price
        document.title =  "Cart | Djackets"
    }, 
    methods: {
        decrementQuantity(item) {
            item.quantity -= 1
            if (item.quantity === 0) {
                this.$emit('removeFromCart', item)
            }
            this.updateCart()
        },
        incrementQuantity(item) {
            item.quantity += 1
            this.updateCart()
        },
        updateCart() {
            localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
        },
        removeFromCart(item) {
            this.$emit('removeFromCart', item)
            this.updateCart()
        },
    }
}
</script>

<style>

</style>