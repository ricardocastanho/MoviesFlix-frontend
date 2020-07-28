<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand btn" href="#">
        <h3 class="text-danger text-left">MoviesFlix</h3>
      </a>
      <button v-on:click="logout()" class="navbar-brand btn btn-sm btn-dark">Sair</button>
    </nav>
    <div class="card bg-dark text-center text-light">
      <div class="card bg-dark img-fundo" style="padding-top: 100px;padding-bottom: 100px">
        <div class="card-body text-left">
          <h1>
            <b>{{ movie[0].name }}</b>
          </h1>
          <h6
            style="width: 500px;text-align: justify;text-justify: inter-word;"
          >{{ movie[0].description }}</h6>
          <br />
          <button class="btn btn-lg btn-dark">
            <span class="fa fa-play"></span> Assistir
          </button>
          &nbsp;
          <button class="btn btn-lg btn-dark">
            <span class="fa fa-plus"></span> Lista
          </button>
        </div>
      </div>

      <div class="card-body">
        <div class="card bg-dark">
          <div class="card-body text-left">
            <h5>
              <b>Mais assistidos da semana:</b>
            </h5>
            <div class="carousel-item">
              <img url="./" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios/dist/axios'
import 'font-awesome/css/font-awesome.css'

export default {
  data() {
    return {
      movie: [
        {
          name: '',
          description: '',
        },
      ],
    }
  },
  methods: {
    getMovies() {
      axios({
        url: 'http://localhost:7542',
        method: 'post',
        data: {
          query: `{
            movies{ name description }
          }`,
        },
        headers: {
          authorization: localStorage.getItem('token'),
        },
      })
        .then((resp) => {
          if (resp.data.errors == undefined) {
            this.movie = resp.data.data.movies
          } else {
            this.$router.push('/login')
          }
        })
        .catch((err) => {
          console.log(err.data.errors)
        })
    },
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
  },

  created() {
    this.getMovies()
  },
}
</script>
