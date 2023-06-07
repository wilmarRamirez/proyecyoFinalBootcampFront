<template>
    <div class="aliceblue col-md-12 d-flex flex-row justify-content-center">
        <div class="row d-flex flex-column justify-content-center align-items-center my-5 p-5 position-relative" style="width: 60vw;">
            <img class="avion2 position-absolute" src="@/assets/imagenes/avion2.png" alt="">
            <div class="col-md-5 text-center ">
                <h1 class="title">Things you need <samp class="text-orange">to do</samp></h1>
                
                <p class="text-center lh-lg">we ensure that you'll embark on a perfectly planned, safe vocation at a price you cqan
                    afford</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-3 card m-4 hover-claro">
    
                    <img src="@/assets/imagenes/Group (2).png" class="card-img-top icon1" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Sign Up</h5>
                        <p class="card-text">Completes all the work associated with planning and processing</p>
                    </div>
                </div>
                <div class="col-sm-3 card m-4 hover-claro">
                    <img src="@/assets/imagenes/Group.png" class="card-img-top icon1" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Worth of Money</h5>
                        <p class="card-text">After successful access then bool from exclusive deals & pricing</p>
                    </div>
                </div>
                <div class="col-sm-3 card m-4 hover-claro">
                    <img src="@/assets/imagenes/Group (1).png" class="card-img-top icon1" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Exciting Travel</h5>
                        <p class="card-text">Start and explore a wide range of exciting travel experience.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'SeccionOne',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aliceblue{
    background-color: #F7F8Fc;
}
.btn-orange{
    background: #FA7436;
    color: white;
}
.text-orange{
    color: #FA7436;
}
.bg-orange{
    background-color: #FA7436;
}
.bor-orange{
    border: #FA7436 solid 1px;
}
.hover-claro:hover{
    background-color: #fd7d1484;
}
.title{
    width: 25vw;
    font-family: serif;
    font-weight: 900;
}
.avion2{
    width: 12vw;
    right: 4vw;
    top: 2svh;
}
.icon1{
    width: 2.5vw;
    margin: 1rem;
}

</style>
  