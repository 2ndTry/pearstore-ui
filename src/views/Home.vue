<template>
    <div id="home">
       <div id="background-div" class="page-holder bg-cover">
        <div class="container">
          <header class="text-left text-white py-5">
            <h3 class="mb-4 rounded" id="heading">
              <a href="#start-shopping" class="bg-dark rounded">START SHOPPING</a>
            </h3>  
              <p class="lead mb-0 bg-dark p-1 rounded">Demo shop</p>
          </header>
        </div>
      </div>
        <hr />
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="pt-3">TOP CATEGORIES</h2>
            </div>
          </div>
          <div class="row">
            <div v-for="index in this.categorySize" :key="index"
                 class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                 <CategoryBox :category="categories[index-1]" />
            </div>
          </div>
        </div>
      <div class="container py-4">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="pt-3">TOP PRODUCTS</h2>
            </div>
          </div>
          <div class="row">
            <div v-for="index in this.productSize" :key="index"
                 class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                 <ProductBox :product="products[index-1]" />
            </div>
          </div>
      </div>  
    </div>
</template>

<script>

import CategoryBox from "../components/Category/CategoryBox.vue"
import ProductBox from "../components/Product/ProductBox.vue"

export default {
  name: "Home",
  components: {CategoryBox, ProductBox},
  props: ["categories", "products"],
  data() {
    return {
      categorySize: 0,
      productSize: 0
    }
  },
  mounted() {
    this.categorySize = Math.min(3, this.categories.length)
    this.productSize = Math.min(6, this.products.length)
  }
}
</script>

<style>

.page-holder {
  min-height: 100vh
}
.bg-cover {
  background-size: cover !important
}
#background-div {
  background: url("../assets/apple-image.png")
}
#heading {
  font-weight: 400;
}
</style>
