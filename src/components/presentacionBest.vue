<template>
    <div class="row d-flex flex-column justify-content-center align-items-center my-5 p-5 color1 position-relative">
        <div class="col-md-6 d-flex flex-column align-items-center ">
            <h1 class="title">Best <samp class="text-orange">Vacation plan</samp></h1>
            <img class="palmWhite" src="" alt="">
            <p class="text-center col-md-9">Plan your perfect vacation with our travel afency, Choose among hundreds of
                all-incusive offers!</p>
        </div>
        <div id="carouselExampleControls " class="carousel" data-bs-ride="carousel">
            <div class="position-absolute top-0 end-0 translate-middle">
                <button class="text-orange border-white bg-transparent btn rounded-circle" type="button"
                    data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <i class="bi bi-arrow-left-circle-fill fs-1" aria-hidden="true">
                    </i>
                </button>
                <button class="text-orange border-white bg-transparent btn rounded-circle" type="button"
                    data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <i class="bi bi-arrow-right-circle-fill fs-1" aria-hidden="true">
                    </i>
                </button>
            </div>

            <div class="carousel-inner d-flex flex-row justify-content-center">
                <div v-for="(best, index) in result" v-bind:key="index">
                    <div class="carousel-item active" v-if="index === 0">
                        <div class="card">
                            <img :src="'http://127.0.0.1:8000/' + best.imagen" alt="..." class="img-wrapper">
                            <div class="card-body">
                                <h5 class="card-title d-block float-start fs-4">{{ best.ciudad_pais }}</h5>
                                <p class="d-block float-end text-orange fs-4 fw-bold">{{ best.valor }}</p>
                            </div>
                            <div class="card-body">
                                <img class="col-md-1 d-block float-start" src="" alt="">
                                <p class="d-block float-start"><i class="bi bi-cursor-fill"></i> {{ best.dia_prueba }} Days
                                    Trip</p>
                                <p class="d-block float-end"><i class="bi bi-star-fill"></i> 4.8</p>
                                <img class="col-md-1 d-block float-end" src="" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" v-else>
                        <div class="card">
                            <img :src="'http://127.0.0.1:8000/' + best.imagen" alt="..." class="img-wrapper">
                            <div class="card-body">
                                <h5 class="card-title d-block float-start fs-4">{{ best.ciudad_pais }}</h5>
                                <p class="d-block float-end text-orange fs-4 fw-bold bi bi-currency-dollar">{{ best.valor }}
                                </p>
                            </div>
                            <div class="card-body">
                                <img class="col-md-1 d-block float-start" src="" alt="">
                                <p class="d-block float-start"><i class="bi bi-cursor-fill"></i> {{ best.dia_prueba }} Days
                                    Trip</p>
                                <p class="d-block float-end"><i class="bi bi-star-fill"></i> 4.8</p>
                                <img class="col-md-1 d-block float-end" src="" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>
  
<script>
import axios from "axios"
export default {
    name: 'PresentacionBest',
    props: {
        msg: String
    },
    data: () => ({
        result: null,
    }),
    created() {
        axios.get("http://127.0.0.1:8000/Best?format=json").then((result) => {
            this.result = result.data;
        });
    },
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    font-family: serif;
    font-weight: 900;
}

.btn-orange {
    background: #FA7436;
    color: white;
}

.text-orange {
    color: #FA7436;
}

.bg-orange {
    background-color: #FA7436;
}

.bor-orange {
    border: #FA7436 solid 1px;
}

.hover-claro:hover {
    background-color: #fd7d1484;
}

.bi-star-fill {
    color: rgb(219, 219, 21);
}

img {
    max-width: 100%;
    max-height: 100%;
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

.carousel-inner {
    padding: 1em;
}

.card {
    margin: 0 .5em;
}
</style>
  