<template>
  <Navbar :cardCount="cardCount" @resetCardCount="resetCardCount"/>
  <router-view v-if="categories && products" style="min-height: 60vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
    >
  </router-view>
  <Footer />
</template>

<script>
import axios from 'axios'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer },
  data() {
    return {
      baseURL: "http://localhost:8090/",
      products: null,
      categories: null,
      cardCount: 0
    }
  },
  methods: {
    async fetchData() {

        //api call to get categories
      await axios
        .get(this.baseURL + "category/list/")
        .then((res) => {
          this.categories = res.data
        })
        .catch((err) => console.log('err', err))

        //api call to get products
      await axios
        .get(this.baseURL + "products/")
        .then((res) => {
          this.products = res.data
        })
        .catch((err) => console.log('err', err))

      if (this.token) {
        axios.get(`${this.baseURL}card/?token=${this.token}`)
             .then((res) => {
                const result = res.data;
                this.cardCount = result.cardItemDtos.length;
             })
             .catch((err) => {
              console.log("err", err)
            })
      } 
    },
    resetCardCount() {
        this.cardCount = 0
    } 
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>