<template>
    <div class="row d-flex flex-column justify-content-center align-items-center color12 position-relative">
        <div class="col-md-6 d-flex flex-column align-items-center my-4">
            <h1 class="title">Get Update with <samp class="text-orange">lastest blog</samp></h1>
        </div>
        <div id="carouselExampleIndicators"
            class="carousel slide row justify-content-center col-md-12 cartas mb-5 position-relative position-relative"
            data-bs-ride="carousel">

            <div class="carousel-inner ">
                <div v-for="(latestBlog, index) in result" v-bind:key="index">
                    <div class="col-md-2 mx-2 p-0 hover-claro carousel-item active" v-if="index === 0">
                        <img :src="'http://127.0.0.1:8000/' + latestBlog.imagen" alt="..." class="img-wrapper">
                        <div class="card-body">
                            <h5 class="card-title fs-6 my-4">{{ latestBlog.title }}</h5>
                            <p class="card-text">{{ latestBlog.fecha }}</p>
                        </div>
                    </div>
                    <div class="col-md-2 mx-2 p-0 hover-claro carousel-item" v-else>
                        <img :src="'http://127.0.0.1:8000/' + latestBlog.imagen" alt="..." class="img-wrapper">
                        <div class="card-body">
                            <h5 class="card-title fs-6 my-4">{{ latestBlog.title }}</h5>
                            <p class="card-text">{{ latestBlog.fecha }}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="carousel-indicators position-absolute col-1">
                <i class="bi bi-circle-fill hover-text">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                </i>
                <i class="bi bi-circle-fill hover-text">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </i>
                <i class="bi bi-circle-fill hover-text">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </i>
            </div>
        </div>


        <div class="col-md-10 bg-orange rounded-4 rounded-2 text-center d-flex flex-column  align-items-center 
        mensajeCorreo border position-absolute top-100 start-50 translate-middle">
            <h2 class="text-white text-center col-md-5 title my-5 fs-1">Subscribe and get exclusive deals & offer</h2>
            <img class="palmOrange col-md-5" src="" alt="">
            <i class="bi bi-envelope">
                <input type="email" placeholder="Enter your mail" class="col-md-8 border rounded-3 p-3 border-light">
                <button class="btn btn-orange btn-Subscribe text-white">Subscribe</button>
            </i>
        </div>



    </div>
</template>
  
<script>
import axios from "axios"
export default {
    name: 'latestBlog',
    props: {
        msg: String
    },
    data: () => ({
        result: null,
    }),
    created() {
        axios.get("http://127.0.0.1:8000/LatestBlog?format=json").then((result) => {
            this.result = result.data;
        });
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-orange {
    color: #FA7436;
}

.bg-orange {
    background-color: #FA7436;
}


.title {
    font-family: serif;
    font-weight: 900;
}

.hover-claro:hover {
    background-color: #fd7d1484;
}

.hover-text:hover {
    color: #fd7d1484;
}

.color12 {
    height: 95vh;
}

.btn-Subscribe {
    position: absolute;
    right: 0.8vw;
    top: 1vh;
    background: #FA7436;
}

.btn-Subscribe:hover {
    background-color: #fd7d148c;
}

.mensajeCorreo {
    height: 35vh;
    z-index: 10;
}

.mensajeCorreo input {
    outline: none;
}

.bi-star-fill {
    color: rgb(219, 219, 21);
}

.bi-envelope {
    width: 20vw;
    background: white;
    position: relative;
}
.carousel-indicators{
    top: 47vh;
    left: 25vw;
}

@media screen and (min-width:576px) {
    .carousel-inner {
        display: flex;
    }

    .carousel-item {
        display: block;
        margin-right: 0;
        flex: 0 0 calc(100%/3);
    }

    .img-wrapper {
        height: 18vw;
    }
}
</style>
  
  