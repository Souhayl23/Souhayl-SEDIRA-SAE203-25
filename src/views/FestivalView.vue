<template>
 <h3 class="titre text-[20px] lg:text-[30px]">FESTIVAL</h3>
 <div class="flex flex-col mt-[50px] mb-[140px]" >
   <img class="w-full h-auto max-h-[200px] object-cover" src="../assets/Festival banner.png"/>
   <div class="px-9 py-3">
       <p></p>Le <span class="text-[#F6C139] font-inter">plus gros</span> plus gros festival <span class="text-[#F6C139] font-inter">100% RAP</span> !
        Un rendez-vous à ne pas manquer pour les fans de Rap français en plein<span class="text-[#F6C139] font-inter"> Paris à l’Accor Arena</span>.
     <br>Only Rap durera<span class="text-[#F6C139] font-inter">3 jours</span> et proposera une grande diversité d’artiste tel que PNL, Booba, DTF, Josman et bie d’autres...
     <br>La passion rap vous attends, soyez présent!</div>
     <div class="flex flex-col justify-center items-center mt-[50px] mb-[140px]">
     <boutonorangebig titre='Réserver'/>
     </div>

</div>




</template>

<script>
import boutonorangebig from "../components/icons/bouton-orange-big.vue";


export default {
  name: "FestivalView",
  components: {boutonorangebig },
};
</script>

<style>
  /* Import Styles application */
  @import '@/assets/style.css';
  
</style>



