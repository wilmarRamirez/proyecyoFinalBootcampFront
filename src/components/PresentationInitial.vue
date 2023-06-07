<template>
    <div class=" row d-flex flex-column justify-content-center align-items-center my-5 py-5 presentacion1">
        <div class="col-md-12 ">
            <div class="row">
                <div class="col-md-6 text-start ">
                    <div class="card-body text">
                        <h1 class="card-title title">Get started your exciting <samp
                                class="text-orange">journey</samp>
                            with us.</h1>
                        <p class="card-text my-3 lh-lg">A team experoenced tourism professionals will provide you with
                            the
                            best advice and tips for your desire place.</p>

                        <button class="btn bor-orange text-orange my-5 p-3">Discover Now</button>
                    </div>
                </div>
                <div class="col-md-4 ">
                    <div class="ban1 position-relative text-start">
                        <img src="../assets/imagenes/tourist-with-thumb-up__1_-removebg 1.png"
                            class="img-fluid rounded-star position-absolute img1" alt="...">
                        <div class="thropy col-md-4 rounded-2 p-2 position-absolute p-1">
                            <img class="col-md-2 mx-2 float-start" src="../assets/imagenes/thropy.png" alt="">
                            <h5> Best Tour Awards</h5>
                        </div>
                        <div class="googlemaps col-md-5 p-2 rounded-2 position-absolute p-1"><img
                                class=" col-md-2 m-2 float-start" src="../assets/imagenes/googlemaps.png" alt="">
                            <h5 class="mb-0">Explore</h5>
                            <p class="mb-0">Every camar of the world with us</p>
                        </div>
                        <div class="starbg col-md-5 rounded-2 position-absolute p-1"><img class="col-md-2 m-1 float-start"
                                src="../assets/imagenes/starbg.png" alt="">
                            <h5 class="mb-0">27K</h5>
                            <p class="mb-0">Customer Reviewd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border bg-light p-4 col-md-8 rounded-4">
            <div class="col-sm-3">  
                <div class="card-body text-start">
                    <h5 class="card-title">Location<i class="bi bi-chevron-compact-down"></i></h5>
                    <p class="card-text">Where are you going</p>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card-body text-start">
                    <h5 class="card-title">Date<i class="bi bi-chevron-compact-down"></i></h5>
                    <p class="card-text">When you will go</p>
                </div>
            </div>
            <div class="col-sm-3">

                <div class="card-body text-start">
                    <h5 class="card-title">Guest<i class="bi bi-chevron-compact-down"></i></h5>
                    <p class="card-text">Number of Guest</p>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card-body">
                    <button class="btn btn-orange p-3">Explore Now</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'PresentationInitial',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    font-size: 15px;
}

.presentacion1 {
    width: 60vw;
}

.title {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 900;
    font-size: 3.8rem;
}
.title samp{
    font-size: 3.8rem;
}
 .text p{
    font-size: 1.5rem;
 }
.text-orange {
    color: #FA7436;
}

.btn-orange {
    background-color: #FA7436;
    color: white;
}

.bor-orange {
    border: #FA7436 solid 1px;
}

.ban1 {
    width: 20vw;
    height: 40vh;
    background: linear-gradient(#fefcfb 50%, #FA7436 30%);
    border-radius: 100%;
    bottom: 0vh;
}

.img1 {
    bottom: 0vh;
    right: 0vw;
}

.thropy {
    width: 8vw;
    bottom: 30vh;
    right: 14.5vw;
    background-color: white;
}


.googlemaps {
    width: 9vw;
    bottom: 18vh;
    left: 15.5vw;
    background-color: white;

}

.starbg {
    bottom: 8vh;
    left: 0vw;
    background-color: white;
}

.thropy img,
.googlemaps img,
.starbg img {
    width: 2vw;
}


.thropy h5,
.googlemaps h5,
.starbg h5 {
    font-size: 0.8rem;
}

.googlemaps p,
.starbg p {
    font-size: 0.7rem;
}
</style>
  