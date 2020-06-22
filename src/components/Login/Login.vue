<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand btn " href="/"><h3 class="text-danger text-left">MoviesFlix</h3></a>
        </nav>
        <div class="card bg-dark text-center text-light">
            <div class="card-body">
                <br><br><br>
                <h1>Entrar</h1>
                <form method="GET" action="/">
                    <input id="email" placeholder="Digite seu Email" type="text"><br><br>
                    <input id="password" placeholder="Senha" type="password"><br><br>
                    <button v-on:click='login()' type="submit" class="btn btn-danger">Entrar</button>
                </form>
                &nbsp;
                <br><br>
                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                <br><br><br><br><br><br>
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
    name: "App",
    methods: {
        login(){
            let email = document.getElementById("email").value
            let password = document.getElementById("password").value
            this.$api.query({
                query: gql`{ login(data: {
                    email: "${email}"
                    password: "${password}"
                }){ name email token } }`
            }).then(result => {
                localStorage.setItem('token', result.data.login.token)
            })
        }
    }
}
</script>