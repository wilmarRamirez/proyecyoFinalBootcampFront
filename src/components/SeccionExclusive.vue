<template>
    <div class="row d-flex flex-column justify-content-center align-items-center my-5 p-5">

        <div class="col-md-6 d-flex flex-column align-items-center ">
            <h1 class="title">Exclusive <samp class="text-orange">deals & discounts</samp></h1>
            <p class="text-center col-md-7 text-center">Discover our fantastic earty booking discounts & start planning your
                journey.</p>
        </div>
        <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(exclusive, index) in result" v-bind:key="index">
                    <div class="carousel-item active" v-if="index === 0">
                        <div class="card">
                            <img :src="'http://127.0.0.1:8000/' + exclusive.imagen" alt="..." class="img-wrapper">
                            <div class="card-body">
                                <h5 class="card-title d-block float-start">{{ exclusive.ciudad }}</h5>
                                <p class="d-block float-end"><i class="bi bi-star-fill"></i> 4.8</p>
                                <img class="col-md-2 d-block float-end" src="" alt="">
                            </div>
                            <div class="card-body">
                                <img class="col-2 d-block float-start" src="" alt="">
                                <p class="card-text d-block float-start bi bi-geo-alt-fill">{{ exclusive.pais }}</p>
                                <p class="d-block float-end btn-orange bi bi-currency-dollar">{{ exclusive.valor_actualizado
                                }}</p>
                                <p class="d-block float-end text-decoration-line-through mx-2 bi bi-currency-dollar">{{
                                    exclusive.valor_anterior
                                }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" v-else>
                        <div class="card">
                            <img :src="'http://127.0.0.1:8000/' + exclusive.imagen" alt="..." class="img-wrapper">
                            <div class="card-body">
                                <h5 class="card-title d-block float-start">{{ exclusive.ciudad }}</h5>
                                <p class="d-block float-end"><i class="bi bi-star-fill"></i> 4.8</p>
                                <img class="col-md-2 d-block float-end" src="" alt="">
                            </div>
                            <div class="card-body">
                                <img class="col-2 d-block float-start" src="" alt="">
                                <p class="card-text d-block float-start bi bi-geo-alt-fill">{{ exclusive.pais }}</p>
                                <p class="d-block float-end btn-orange bi bi-currency-dollar">{{ exclusive.valor_actualizado
                                }}</p>
                                <p class="d-block float-end text-decoration-line-through mx-2 bi bi-currency-dollar">{{
                                    exclusive.valor_anterior
                                }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="text-orange border-white bg-transparent btn rounded-circle" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <i class="bi bi-arrow-left-circle-fill fs-1" aria-hidden="true">
                </i>
            </button>
            <button class="text-orange border-white bg-transparent btn rounded-circle" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <i class="bi bi-arrow-right-circle-fill fs-1" aria-hidden="true">
                </i>
            </button>
        </div>

    </div>
</template>
  
<script>
import axios from "axios"


export default {
    name: 'SeccionExclusive',
    props: {
        msg: String
    },
    data: () => ({
        result: null,
    }),
    created() {
        axios.get("http://127.0.0.1:8000/Exclusive?format=json").then((result) => {
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

.carousel-item {
    width: 14vw;
}

.img-wrapper {
    max-width: 14vw;
    max-height: 18vh;
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
        height: 23vw;
    }
}

.carousel-inner {
    padding: 1em;
}

.card {
    margin: 0 .5em;
}</style>
  