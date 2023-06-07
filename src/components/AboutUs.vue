<template>
    <div class="row d-flex flex-column justify-content-center align-items-center my-5 p-5 aliceblue">
        <div class="mb-3 col-md-10 m-5">
            <div class="row g-0 m-5">
                <div class="col-md-5">
                    <div class="card-body">
                        <h1 class="title">What people say <samp class="text-orange">about us.</samp></h1>
                        <p class="">Out clients send us bunch of smilies with our services ans we love them.</p>

                        <div class="col-md-8">
                            <i class="bi bi-arrow-left-circle-fill  col-md-3 hover mx-2 fs-1 text-orange"></i>
                            <i class="bi bi-arrow-right-circle-fill  col-md-3 hover mx-2 fs-1 text-orange"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card col-md-11 p-4 m-0">
                        <img class="col-md-2 d-block img-fluid rounded-circle person position-absolute top-0 start-0 translate-middle"
                            src="@/assets/imagenes/humano.png" alt="...">
                        <p class="card-text my-4 text-start">"On the windows talking painted pasture yet its express parties use. Sure
                            last upon he same
                            as knew next. Of belleved or diverted no."</p>
                        <h5 class="card-title m-0 text-start">Mike taylor</h5>
                        <p class="card-text my-1 text-start">Lahare pakistan</p>

                    </div>
                </div>
                <img class="avion3" src="" alt="">
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AboutUs',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
.aliceblue{
    background-color: #F7F8Fc;
}
.title{
    font-family: serif;
    font-weight: 900;
}
</style>
  