<template>
 <div class="flex flex-col" >
   <img class="w-full h-auto max-h-[200px] object-cover" src="../assets/banner.jpg"/>
   <h3 class="titre text-[35px] lg:text-[45px]"><span class="text-white">Rap Only, un festival</span> 
     <br>100% RAP</h3>
  <div class="flex flex-col justify-center items-center">
    <RouterLink to="/programmation"><card/></RouterLink> 
    <RouterLink to="/artistes"><card2/></RouterLink> 
    <RouterLink to="/festival"><card3/></RouterLink> 
  </div>
</div>




</template>

<script>
import card from "../components/icons/card.vue";
import card2 from "../components/icons/card2.vue";
import card3 from "../components/icons/card3.vue";



export default {
  name: "AccueilView",
  components: { card, card2, card3},
};
</script>

<style>
  /* Import Styles application */
  @import '@/assets/style.css';
  
</style>




