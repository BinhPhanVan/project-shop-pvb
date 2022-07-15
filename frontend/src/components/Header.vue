<template>
  <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"><strong>Stores</strong></router-link>
        <a class="navbar-burger float-right" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="showMobile = !showMobile">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbar-menu" :class="{'is-active':showMobile}">
        <div class="navbar-start">
          <div class="navbar-item">
            <form method="get" action="/search">
              <div class="field has-addons">
                <div class="control">
                  <input type="text" class="input" placeholder="What are you looking for?" name="query">
                </div>

                <div class="control">
                  <button class="button is-success">
                      <span class="icon">
                      <i class="fas fa-search"></i>
                      </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="navbar-end">
          <router-link to="/warn-jacket" class= "navbar-item"> Summer</router-link> 
          <router-link to="/cool-jacket" class= "navbar-item"> Winter</router-link>
          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/login" class="button is-light">Login</router-link>
              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart ({{cartTotalLength}})</span>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return {
            showMobile: false,
            cart:{
              items: []
            }
        }
    },
    beforeCreate(){
      this.$store.commit("initializeStore");
    }, 
    mounted() {
      this.cart = this.$store.state.cart;
    },
    computed:{
      cartTotalLength(){
        let totalLength = 0
        for (let i = 0 ; i < this.cart.items.length;i++)
        {
          totalLength += this.cart.items[i].quantity
        }
        return totalLength
      }
    }
}


</script>

<style>

</style>