<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 col-12">
                <img :src="product.imageUrl" class="img-fluid">
            </div>
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h3>{{ product.name }}</h3>
                <h5 class="category font-italic">{{ category.categoryName }}</h5>
                <h5 class="font-weight-bold">{{ product.price }} RUR</h5>
                <p>
                    {{ product.description }}
                </p>
                <div class="d-flex flex-row justify-content-between">
                    <div class="input-group col-md-3 col-4 p-0">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Quantity</span>
                        </div>
                        <input type="number" class="form-control" v-model="quantity" />
                    </div>
                    <div class="input-group col-md-3 col-4 p-0">
                        <button class="btn" id="add-to-card-button" @click="addToCard()">
                            Add to card
                        </button>
                    </div>
                </div>
                <hr>
                <button id="wishlist-button" class="btn mr-3 p-1 py-0" @click="addToWishList()">
                    {{ wishListString }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import swal from 'sweetalert'
import axios from 'axios'

export default {
    data() {
        return {
            product:  {},
            category: {},
            quantity: 1,
            wishListString: "Add to wishlist" 
        }
    },
    props: ["baseURL", "products", "categories"],
    methods: {
        addToWishList() {
            if (!this.token) {
                swal({
                    text: 'Please login to add item to wishlist',
                    icon: 'error'
                })
                return;
            }
            axios.post(`${this.baseURL}wishlist/add?token=${this.token}`, {id: this.product.id})
                 .then((res) => {
                     if (res.status === 201) {
                         this.wishListString = "Added to wishlist";
                         swal({
                            text: 'Product added to wishlist',
                            icon: 'success'
                         })
                     }
                 })
                 .catch((err) => {
                     console.log("err", err);
                 })
        },
        addToCard() {
            if (!this.token) {
                swal({
                    text: 'Please login to add item to card',
                    icon: 'error'
                })
                return;
            }
            axios.post(`${this.baseURL}card/add?token=${this.token}`, {productId: this.id, quantity: this.quantity})
                 .then((res) => {
                    if (res.status === 201) {
                        swal({
                            text: "Product added to card",
                            icon: "success"
                        })
                        this.$emit("fetchData")
                    } 
                 })
                 .catch((err) => {
                     console.log("err", err)
                 })
        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find((category) => category.id == this.product.categoryId);
        this.token = localStorage.getItem("token");
    }
}

</script>

<style>

    .category {
        font-weight: 400;
    }

    #wishlist-button {
        background-color: #b9b9b9;
    }

    #add-to-card-button {
        background-color: forestgreen;
    }

</style>
