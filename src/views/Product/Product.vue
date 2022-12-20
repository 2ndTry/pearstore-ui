<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">ALL PRODUCTS</h3>
                <router-link :to="{name : 'AddProduct'}">
                    <button class="btn" style="float:right" v-show="$route.name == 'AdminProduct'">Add product</button>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="product of products" :key="product.id" class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <ProductBox :product="product"></ProductBox>
            </div>
        </div>
    </div>
</template>

<script>

import ProductBox from '../../components/Product/ProductBox.vue'

export default {
    components: {ProductBox},
    props: ["products"]
}

</script>
