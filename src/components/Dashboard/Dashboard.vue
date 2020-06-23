<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand btn " href="#"><h3 class="text-danger text-left">MoviesFlix</h3></a>
        <button v-on:click="logout()" class="navbar-brand btn btn-sm btn-secondary">Logout</button>
        </nav>
        <div class="card bg-dark text-center text-light">
        <div class="card-body">
            <br><br><br>
            <div class="container">
                <div class="card-group">
                    <div v-for="m in movie" v-bind:key="m.id"  class="card bg-dark">
                        <div class="card-body bg-dark">
                            <p>{{ m.name }}</p>
                            {{ m.description }}
                        </div>
                    </div>
                </div>
            </div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br>
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios/dist/axios"

export default {
    data(){
        return{
            movie: [{
                name: "",
                description: ""
            }]
        }
    },
    methods: {
        getMovies(){
            axios({
                url: "http://localhost:7542",
                method: "post",
                data: {
                    query: `{
                        movies{ name description }
                    }`
                }, headers: {
                    authorization: localStorage.getItem('token')
                }
            }).then(resp => {
                if(resp.data.errors == undefined){
                    this.movie = resp.data.data.movies
                }else{
                    this.$router.push('/login')
                }
            }).catch(err => {
                console.log(err.data.errors)
            })
        },
        logout(){
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    },
    
    created() {
        this.getMovies()
    }
}
</script>