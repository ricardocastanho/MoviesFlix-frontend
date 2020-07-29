<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand btn" href="#">
        <h3 class="text-danger text-left">MoviesFlix</h3>
      </a>
      <button v-on:click="logout()" class="navbar-brand btn btn-sm btn-dark">Sair</button>
    </nav>
    <div class="card bg-dark text-center text-light">
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../../../public/avengers.jpg" class="d-block w-100 img-fundo" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="card-body text-left holder">
                <h1>
                  <b>{{ movie[0].name }}</b
                  >&nbsp;<span class="badge bad badge-pill badge-danger">Top1</span>
                </h1>
                <h6 style="width: 500px;text-align: justify;text-justify: inter-word;">{{ movie[0].description }}</h6>
                <br />
                <button class="btn btn-lg btn-dark holder-btn"><span class="fa fa-play"></span> Assistir</button>
                &nbsp;
                <button class="btn btn-lg btn-dark"><span class="fa fa-plus"></span> Lista</button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../../../public/guardioes.jpg" class="d-block w-100 img-fundo" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="card-body text-left holder">
                <h1>
                  <b>{{ movie[2].name }}</b>
                </h1>
                <h6 style="width: 500px;text-align: justify;text-justify: inter-word;">{{ movie[2].description }}</h6>
                <br />
                <button class="btn btn-lg btn-dark holder-btn"><span class="fa fa-play"></span> Assistir</button>
                &nbsp;
                <button class="btn btn-lg btn-dark"><span class="fa fa-plus"></span> Lista</button>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="card-body">
        <div class="card bg-dark">
          <div class="card-body text-left">
            <h5>Lançamentos:</h5>
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
        abc: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
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
