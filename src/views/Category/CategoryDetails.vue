<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3">{{ category.categoryName }}</h4>
                <h5>{{ msg }}</h5>
            </div>
        </div>
        <div class="row mb-5">
            <div v-for="product in product" :key="product.id"
                 class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
                <ProductBox :product="product" />
            </div>
        </div>
    </div>
</template>

<script>

import ProductBox from "../../components/Product/ProductBox.vue"

export default {
    components: {ProductBox},
    props: ["categories", "products"],
    data() {
        return {
            id: null,
            category: {},
            product: {},
            msg: ''
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.category = this.categories.find(category => category.id == this.id)
        this.product = this.products.filter(product => product.categoryId == this.id)

        if (this.product.length == 0) {
            this.msg = "no products found"
        } else if (this.product.length == 1) {
            this.msg = "Only 1 product found"
        } else {
            this.msg = this.product.length + " products found"
        }
    }
}

</script>
