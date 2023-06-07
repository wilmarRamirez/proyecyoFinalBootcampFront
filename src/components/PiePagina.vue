<template>
    <div class="  footer row d-flex flex-column justify-content-center align-items-center aliceblue mt-5">
        <div class="row mt-5 p-5 col-10">
            <div class="col-sm-4 mx-5 text-start">
                <div class="card-body">
                    <img class="my-3" src="@/assets/imagenes/icons/trabook.png" alt="">
                    <p class="card-text col-md-8">Book you trip in minute, get full Control for much longer</p>
                    <i class="bi bi-facebook fs-1 me-5 hover-claro"></i>
                    <i class="bi bi-instagram fs-1 me-5 hover-claro"></i>
                    <i class="bi bi-twitter fs-1 me-5 hover-claro"></i>
                </div>
            </div>
            <div class="col-sm-2 text-start">
                <div class="card-body">
                    <h5 class="card-title my-3 fs-3">Company</h5>
                    <p class="card-text">About</p>
                    <p class="card-text">Careers</p>
                    <p class="card-text">Logistic</p>
                    <p class="card-text">Privacy & Policy</p>
                </div>
            </div>
            <div class="col-sm-2 text-start">
                <div class="card-body">
                    <h5 class="card-title my-3 fs-3">Contact</h5>
                    <p class="card-text">Help/FAQ</p>
                    <p class="card-text">Press</p>
                    <p class="card-text">Affilates</p>
                </div>
            </div>
            <div class="col-sm-2 text-start">
                <div class="card-body">
                    <h5 class="card-title my-3 fs-3">More</h5>
                    <p class="card-text">Press Centre</p>
                    <p class="card-text">Our Blog</p>
                    <p class="card-text">Low fare tips</p>
                </div>
            </div>
        </div>
        <hr>
        <div>
            <div class="float-start">
                <p>Copyright, Trabook 2022. All rights reserved.</p>
            </div>
            <div class="float-end">
                <p>Terms & Conditions</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'PiePagina',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer{
    width: 100vw;
}
.aliceblue{
    background-color: #F7F8Fc;
}
 .card-body{
    color: black;
 }



.hover-claro:hover{
    color: #fd7d1484;
}

footer img:hover{
    background-color: #FA7436;
}
.color12{
    height: 150vh;
}
.footer{
    padding-top: 13vh;
}
.btn-Subscribe{
    position: absolute;
    bottom: 6.5vh;
    right: 13.2vw;
}
.btn-Subscribe:hover{
    background-color: #fd7d148c;
}
.mensajeCorreo input::placeholder{
    font-size: 0.8rem;
}
.mensajeCorreo .email{
    width: 4.2vw;
    height: 10.9478vh;
    border-radius: 25%;
    background-color: white;
    position: absolute;
    bottom: 4.6vh;
    left: 9.5vw;
}
.mensajeCorreo input {
    outline: none;
}
.avion2{
    position: absolute;
    width: 15vw;
    right: 15vw;
    top: 2svh;
}
.palmWhite{
    width: 8vw;
    position: absolute;
    right: 25vw;
    top: 2.5vh;
}
.avion3{
    width: 10vw;
    position: absolute;
    right: 13vw;
    top: 4vh;
}
.palmOrange{
    width: 8vw;
    position: absolute;
    right: 1vw;
    top: 1vh;
}
</style>
  