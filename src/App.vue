<template>
  <div id="app" class="d-flex flex-column justify-content-center align-items-center">
    <NavBar msg="barraNavegacion"/>
    <PresentationInitial msg="presentacion"/>
    <SeccionOne msg="SeccionOne"/>
    <SeccionExclusive msg="SeccionExclusive"/>
    <PresentacionBest msg="PresentacionBest"/>
    <AboutUs msg="AboutUs"/>
    <latestBlog msg="latestBlog"/>
    <PiePagina msg="PiePagina"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import PresentationInitial from '@/components/PresentationInitial.vue'
import SeccionOne from '@/components/SeccionOne.vue'
import SeccionExclusive from '@/components/SeccionExclusive.vue'
import PresentacionBest from '@/components/presentacionBest.vue'
import AboutUs from '@/components/AboutUs.vue'
import latestBlog from '@/components/latestBlog.vue'
import PiePagina from '@/components/PiePagina.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    PresentationInitial,
    SeccionOne,
    SeccionExclusive,
    PresentacionBest,
    AboutUs,
    latestBlog,
    PiePagina
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fefcfb;
}


</style>
