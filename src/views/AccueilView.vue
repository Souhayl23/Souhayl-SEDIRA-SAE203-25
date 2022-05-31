<template>
 <div class="flex flex-col" >
   <img class="w-full h-200 object-cover" src="../assets/banner.jpg"/>
  <div class="">
    <card />
  </div>
</div>


</template>

<script>
import card from "../components/icons/card.vue";


export default {
  name: "AccueilView",
  components: { card },
};
</script>

<style>
  /* Import Styles application */
  @import '@/assets/style.css';
  
</style>




