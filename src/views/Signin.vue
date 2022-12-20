<template>
    <div class="container">
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-row pt-5">
                <div id="signin" class="flex-item border">
                    <img id="logo" src="../assets/logo2.png" />
                    <h2 class="pt-4">Sign-in</h2>
                    <form @submit="signin" class="form-group pt-4 pl-4 pr-4">
                        <div class="form-group">
                            <label>Email</label>
                            <input v-model="email" type="email" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="password" type="password" class="form-control" />
                        </div>
                        <button class="btn btn-primary mt-2 py-1">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import swal from 'sweetalert'

export default {
    props: ["baseURL"],
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        async signin(e) {
            e.preventDefault();
            const body = {
                email: this.email,
                password: this.password,
            }
            await axios.post(`${this.baseURL}user/signin`, body)
                       .then((res) => {
                            localStorage.setItem("token", res.data.token)
                            swal({
                                text: 'User login seccessfully',
                                icon: 'success'
                            })
                            this.$emit("fetchData");
                            this.$router.push({name: "Home"})
                       })
                       .catch((err) => {
                            console.log("err", err)
                            swal({
                                text: 'Incorrect email or password',
                                icon: 'error'
                            })
                        })
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
        width: 40%;
    }
}
@media screen {
    #logo {
        width: 50%;
        margin-top: 20px;
    }
}

</style>
