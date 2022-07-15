<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Welcome to BinhPhanStores
        </p>
        <p class="subtitle">
          The best jacket store online
        </p>
      </div>
    </section>
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered"> Lastest products</h2>
      </div>
      <ProductCard v-for="product in latestProducts"
      :key="product.id"
      :product="product">
      </ProductCard>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import ProductCard from "@/components/ProductCard.vue"
export default {
  name: 'HomeView',
  components: {
    ProductCard
  },
  data(){
    return {
      latestProducts : []
    }
  }, 
  mounted(){
    this.getLatestProducts();
    document.title = "Home | Djackets"
  },
  methods: {
    async getLatestProducts(){
      this.$store.commit('setIsLoading', true)
      await axios.get('/api/v1/latest-products/')
      .then(reponse => {
        this.latestProducts = reponse.data;
        console.log(this.latestProducts);
      })
      .catch(error =>{
        console.log(error)
      })
      this.$store.commit('setIsLoading', false)
    }
  }
}
</script>
<style scoped>

</style>
