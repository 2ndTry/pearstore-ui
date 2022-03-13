<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center pt-3">
                
            </div>
        </div>
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-3">
                <div id="signup" class="flex-item border">
                    <img id="logo" src="../assets/logo2.png" />
                    <h3 class="pt-4 pl-4">Create your account</h3>
                    <form @submit="signup" class="pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label for="Email">Email</label>
                            <input type="email" v-model="email" class="form-control" required />
                        </div>
                        <div class="form-row pb-3">
                            <div class="col">
                                <div class="from-group">
                                    <label>First name</label>
                                    <input type="text" v-model="firstName" class="form-control" required />
                                </div>
                            </div>
                            <div class="col">
                                <div class="from-group">
                                    <label>Last name</label>
                                    <input type="text" v-model="lastName" class="form-control" required />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="Password">Password</label>
                            <input type="password" v-model="password" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label for="Email">Confirm password</label>
                            <input type="password" v-model="confirmPassword" class="form-control" required />
                        </div>
                        <button class="btn btn-primary mt-2">Create account</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import swal from 'sweetalert';

export default {
    props: ["baseURL"],
    data() {
        return {
            email: null,
            firstName: null,
            lastName: null,
            password: null,
            confirmPassword: null
        }
    },
    methods: {
        async signup(e) {
            e.preventDefault();
            if(this.password === this.confirmPassword) {
                const user = {
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password 
                }
                await axios.post(`${this.baseURL}user/signup`, user)
                           .then(() => {
                               this.$router.replace('/')
                               swal({
                                   text: 'User signup seccessfully, please login',
                                   icon: 'success'
                               })
                           })
                           .catch((err) => console.log('err', err))
            } else {
                swal({
                    text: 'Password dont match',
                    icon: 'error'
                })
            }
        }
    }
}

</script>

<style scoped>

.btn-primary {
    background-color: rgb(31, 192, 31);
}
@media screen and (min-width: 300px;){
    #signup {
        width: 50%;
    }
}
@media screen {
    #logo {
        width: 50%;
    }
}

</style>
