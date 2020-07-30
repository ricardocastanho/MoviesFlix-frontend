<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand btn" href="/">
        <h3 class="text-danger text-left">MoviesFlix</h3>
      </a>
    </nav>
    <div class="card bg-dark text-center text-light">
      <div class="card-body">
        <br />
        <br />
        <br />
        <h1>Entrar</h1>
        <input id="email" placeholder="Digite seu Email" type="text" />
        <br />
        <br />
        <input id="password" placeholder="Senha" type="password" />
        <br />
        <div id="alert" class="alert alert-danger col-3" role="alert" style="display: none">{{ alert }}</div>
        <br />
        <button v-on:click="login()" type="submit" class="btn btn-danger">Entrar</button>
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios/dist/axios'

  export default {
    name: 'App',
    data() {
      return {
        alert: '',
      }
    },
    methods: {
      login() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        axios({
          url: 'http://localhost:7542',
          method: 'post',
          data: {
            query: `{ 
            login(data: {
              email: "${email}"
              password: "${password}"
            }){ name email token } }`,
          },
        })
          .then((result) => {
            localStorage.setItem('token', result.data.data.login.token)
            this.$router.push('/dashboard')
          })
          .catch((errors) => {
            document.getElementById('alert').attributes.style.value = 'margin:15px auto'
            this.alert = errors.message
          })
      },
    },
  }
</script>
