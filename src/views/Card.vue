<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h3 class="pt-3">
                    SHOPPING CARD
                </h3>
            </div>
        </div>
        <div v-for="cardItem in cardItemDtos" :key="cardItem.product.id" class="row mt-2 pt-3 justify-content-around">
            <div class="col-2"></div>
            <div class="col-md-3 embed-responsive embed-responsive-1by9">
                <img :src="cardItem.product.imageUrl" alt="" class="w-100" />
            </div>
            <div class="col-md-5 px-3">
                <div class="card-block px-3 text-left">
                    <br />
                    <h4 class="card-title font-weight-bold">
                        <router-link :to="{name: 'ProductDetails', params: {id: cardItem.product.id}}">
                            {{ cardItem.product.name }}
                        </router-link>
                    </h4>
                    <p class="mb-0 font-weight-bold" id="item-price">
                        RUR {{ cardItem.product.price }} per unit
                    </p>
                    <br />
                    <p class="mb-0" style="float:left">
                        Quantity: {{ cardItem.quantity }}
                    </p>
                    </div>
                    <p class="mb-0 px-3 text-right">
                        Total: <span class="font-weight-bold">RUR {{cardItem.product.price * cardItem.quantity}}</span>
                    </p>
                    <br />
                    <br />
                    <br />
                    <a href="#" class="text-left" @click="deleteItem(cardItem.id)">Remove from card</a>
                </div>
                <div class="col-2"></div>
                <div class="col-12">
                    <hr />
                </div>
            </div>
        <div class="total-cost pt-2 text-right">
            <h5>
                Total coast: RUR {{ totalCost.toFixed(2) }}
            </h5>
        </div> 
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            cardItemDtos: [],
            token: null,
            totalCost: 0,
        }
    },
    props: ["baseURL"],
    methods: {
        listCardItems() {
            axios.get(`${this.baseURL}card/?token=${this.token}`)
                 .then((res) => {
                     const result = res.data;
                     this.cardItemDtos = result.cardItemDtos;
                     this.totalCost = result.totalCost;
                 })
                 .catch((err) => {
                     console.log("err", err)
                 })
        },
        deleteItem(itemId) {
            axios.delete(`${this.baseURL}card/delete/${itemId}/?token=${this.token}`)
                 .then((res) => {
                     if (res.status == 200) {
                         this.$router.go(0);
                     }
                 })
                 .catch((err) => {
                     console.log("err", err);
                 })
        }
    },
    mounted() {
        this.token = localStorage.getItem("token");
        this.listCardItems();
    }
}

</script>

<style scoped>

h4, h5 {
    color: #484848;
    font-size: 700;
}

</style>