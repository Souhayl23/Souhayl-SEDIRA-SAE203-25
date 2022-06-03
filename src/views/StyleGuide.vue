<template>
  <div class="mt-20 mb-20 grid place-content-center">
    <h1 class="mb-5 ml-3 text-3xl text-white">Style Guide</h1>
    <h2 class="mb-2 ml-3 text-xl text-white dark:text-gray-300">Main colors</h2>
    <div class="flex">
      <Couleur class="bg-[#f6c139]" />
      <Couleur class="bg-gray-300" />
      <Couleur class="bg-white" />
      <Couleur class="border-2 bg-black" />
    </div>

    <h2 class="mt-4 mb-3 ml-3 text-xl text-white dark:text-gray-300">Typography</h2>
    <div class="ml-3 mb-6 mr-3 flex justify-between">
      <div class="flex flex-col">
        <p class="font-inter text-sm font-bold">H1</p>
        <p class="font-inter text-sm text-white dark:text-gray-300">bebas Neue</p>
        <p class="font-inter text-xs text-white dark:text-gray-300">30px font size</p>
      </div>
      <p class="font-bebas text-3xl text-[#f6c139] font-bold uppercase">Un site 100% RAP et pour tous!</p>
    </div>
    <div class="ml-3 mb-6 mr-3 flex justify-between">
      <div class="flex flex-col">
        <p class="font-inter text-sm font-bold">H2</p>
        <p class="font-inter text-sm text-white dark:text-gray-300">bebas Neue </p>
        <p class="font-inter text-xs text-white dark:text-gray-300">22px font size</p>
      </div>
      <p class="font-bebas text-2xl font-bold uppercase">Un site 100% RAP et pour tous!</p>
    </div>
    <div class="ml-3 mb-6 mr-3 flex justify-between">
      <div class="flex flex-col">
        <p class="font-inter text-sm font-bold">H3</p>
        <p class="font-inter text-sm text-white dark:text-gray-300">inter (Bold)</p>
        <p class="font-inter text-xs text-white dark:text-gray-300">20px font size</p>
      </div>
      <p class="font-inter text-xl font-bold uppercase">Un site 100% RAP et pour tous!</p>
    </div>

    <div class="ml-3 mb-6 mr-3 flex justify-between">
      <div class="flex flex-col">
        <p class="font-inter text-sm font-bold">Body</p>
        <p class="font-inter text-sm text-white dark:text-gray-300">inter (Regular)</p>
        <p class="font-inter text-xs text-white dark:text-gray-300">14px font size</p>
      </div>
      <p class="max-w-2xl text-right font-inter text-sm font-normal">
Un site 100% RAP et pour tous!
      </p>
    </div>
    <h2 class="mt-4 mb-3 ml-3 text-xl text-white dark:text-gray-300">Composants</h2>
    <div class="flex flex-row gap-10">
   <boutonorange titre='Insert'/>
   <boutongrey titre='Insert'/>
   <boutonorangebig titre='Insert'/>
   </div>
   <div><card /></div>
   
      

    
  </div>
</template>

<script >

import boutonorangebig from "../components/icons/bouton-orange-big.vue";
import Couleur from "../components/styleguide/Couleur.vue";
import CouleurSmall from "../components/styleguide/CouleurSmall.vue";
import boutonorange from "../components/icons/bouton-orange.vue";
import boutongrey from "../components/icons/bouton-grey.vue";
import card from "../components/icons/card.vue";
export default {
  name: "StyleGuide",
  components: {
    Couleur,
    CouleurSmall,
    boutonorange,
    boutongrey,
    boutonorangebig,
    card
  },
};
</script>

<style scoped>
</style>