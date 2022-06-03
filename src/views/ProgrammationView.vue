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
      <div v-for="concert in listeConcert" :key="concert.id"
      class="flex flex-col m-[60px] w-[75%] max-w-[400px]  h-auto relative overflow-hidden rounded-xl bg-white"
      style="box-shadow: 0px 2px 4px 0 rgba(28,5,77,0.1), 0px 12px 32px 0 rgba(0,0,0,0.05);"
      >

      <div
        class="flex flex-col self-stretch flex-grow-0 flex-shrink-0 relative gap-1 px-6 py-4 bg-white"
      >
        <div class="flex self-stretch flex-grow-0 flex-shrink-0 relative">
          <p class="flex-grow w-[141px] text-[22px] font-bebas text-left text-black">{{ concert.nom }}</p>

        </div>
            <p
          class="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#F6C139]"
        >
          {{ concert.horaire }}
        </p>
        <p
          class="self-stretch flex-grow-0 flex-shrink-0 w-full text-sm font-semibold text-left text-[#6B7280]"
        >
          l’Accor Arena
        </p>
      </div>
    </div>

  </div>

  

</template>

<script>
import boutonorange from "../components/icons/bouton-orange.vue";
import boutongrey from "../components/icons/bouton-grey.vue";

export default {
  name:'ProgrammationView',
  components: {boutonorange, boutongrey},
};
</script>

<style scoped>
</style>


