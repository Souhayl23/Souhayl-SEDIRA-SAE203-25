<template>

 <div class="flex flex-col mt-[50px] mb-[140px]" >
   <img class="w-full h-auto max-h-[200px] object-cover" src="../assets/Pnl banner.png"/>
   <div class="px-9 py-3">

      <h4 class="font-inter flex flex-col justify-center items-center text-[#f6c139] text-[20px] lg:text-[25px] pb-2">PNL</h4>
       <p>PNL (acronyme de Peace N Lovés), est un groupe de rap français composé des frères Ademo et N.O.S, tous deux originaires de Corbeil-Essonnes (91). C'est au duo qu'on attribue la popularisation du "cloud rap" en France.</p></div>
      <div class="flex flex-col justify-center items-center">
      <img class="w-[70%] h-[70%]  " src="../assets/pnl 3.png"/>
      </div>

</div>




</template>

<script>
import boutonorangebig from "../components/icons/bouton-orange-big.vue";
import cardpnlArt from "../components/icons/cardpnlArt.vue";


export default {
  name: "ArtisteView",
  components: {boutonorangebig, cardpnlArt },
};
</script>

<style>
  /* Import Styles application */
  @import '@/assets/style.css';
  
</style>



