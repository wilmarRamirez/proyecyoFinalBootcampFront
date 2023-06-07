<template>
  <div id="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="../assets/imagenes/icons/trabook.png" alt=""></a>
          <div class="row d-flex flex-column justify-content-center align-items-center" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item hover-claro">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item hover-claro">
                      <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item hover-claro">
                      <a class="nav-link" href="#">Destination</a>
                  </li>
                  <li class="nav-item hover-claro">
                      <a class="nav-link">tour</a>
                  </li>
                  <li class="nav-item hover-claro">
                      <a class="nav-link">Blog</a>
                  </li>
              </ul>
          </div>
          <div class="">
              <ul class="navbar-nav">
                  <li class="nav-item mx-5 hover-claro"><a class="nav-link text-orange" href="#">Login</a></li>
                  <li class="nav-item"><button class="btn btn-orange">sing up</button></li>
              </ul>
          </div>
      </div>
  </nav>
  </div>
</template>
  
<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}

</script>

<style scoped>
nav{
    width: 60vw;
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
.hover-claro:hover{
    background-color: #fd7d1484;
}
</style>
  

  