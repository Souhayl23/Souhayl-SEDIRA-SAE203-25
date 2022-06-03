

<template>
  <div >
    <nav class="navbar navbar-expand-lg navbar-dark dark">
        <div class="navbar-brand" >
          <RouterLink to="/"><logo /><span class="sr-only">Accueil</span></RouterLink>
        </div>
        <button class="navbar-toggler" 
          type="button" data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">    
            <ul class="navbar-nav  ml-auto">
                <li class="nav-item">
                  <div class="nav-link" >
                    <RouterLink to="/programmation">Programmation</RouterLink>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" >
                    <RouterLink to="/artistes">Artistes</RouterLink>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" >
                    <RouterLink to="/festival">Festival</RouterLink>
                  </div>
                </li>
                <li class="nav-item">
                  <div class="nav-link" >
                    <RouterLink to="/contact">Contact</RouterLink>
                  </div>
                </li>

                
            </ul >

        </div>

    </nav>

    <RouterView />

    <Footer />
  </div>


</template>

<script>
import logo from "./components/icons/logo.vue";
import card from "./components/icons/card.vue";
import Footer from "./components/icons/Footer.vue";


export default {
  name: "App",
  components: { logo, card, Footer },
};
</script>

<style>
  /* Import Styles application */
  @import '@/assets/style.css';
  
  
  
</style>


