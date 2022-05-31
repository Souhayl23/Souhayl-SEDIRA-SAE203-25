<template>
   <h3 class="titre text-[20px] lg:text-[30px]">PROGRAMMATION</h3>
   <div class="flex flex-raw flex-wrap py-4 justify-evenly">
   <boutonorange titre='Concert'/>
   <boutongrey titre='Rencontre'/>
   <boutongrey titre='Spectacle'/>
   <boutongrey titre='Danse'/>
   <boutongrey titre='Création'/>
   </div>

  <div class="flex flex-col justify-center items-center">
    <h4 class="titre text-[20px]"> 12 Mai</h4>
    <RouterLink to="/concert"><cardpnl /></RouterLink>
    <cardbooba/>
    <h4 class="titre text-[20px]"> 13 Mai</h4>
    <cardjosman/>
    <carddtf/>
    <card3/>
  </div>

  

</template>

<script>
import card from "../components/icons/card.vue";
import cardbooba from "../components/icons/cardbooba.vue";
import cardpnl from "../components/icons/cardpnl.vue";
import cardjosman from "../components/icons/cardjosman.vue";
import carddtf from "../components/icons/carddtf.vue";
import boutonorange from "../components/icons/bouton-orange.vue";
import boutongrey from "../components/icons/bouton-grey.vue";

export default {
  name:'ProgrammationView',
  components: { card,cardbooba,cardpnl, carddtf, cardjosman,boutonorange, boutongrey},
};
</script>

<style scoped>
</style>


