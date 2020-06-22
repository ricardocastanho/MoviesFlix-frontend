<template>
    <div>
        <h1>Logou</h1>
        <h2>{{ users }}</h2>
    </div>
</template>

<script>
import axios from "axios/dist/axios"

export default {
    /*data() {
        users: ""
    },*/
    methods: {
        getUsers(){
            axios({
                url: "http://localhost:7542",
                method: "post",
                data: {
                    query: `{
                        users{ id name email }
                    }`
                }, headers: {
                    authorization: localStorage.getItem('token'),
                }
            })
        }
    },
    created() {
        //const token = localStorage.getItem('token')
        this.getUsers()
    }
}
</script>