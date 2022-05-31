<template>
   <h3 class="titre text-[20px] lg:text-[30px]">ARTISTES</h3>

  <div class="flex flex-col justify-center items-center">
    <cardpnlArt />
    <cardboobaArt/>
    <cardjosmanArt/>
    <carddtfArt/>
    <card3/>
  </div>

  

</template>

<script>
import cardboobaArt from "../components/icons/cardboobaArt.vue";
import cardpnlArt from "../components/icons/cardpnlArt.vue";
import cardjosmanArt from "../components/icons/cardjosmanArt.vue";
import carddtfArt from "../components/icons/carddtfArt.vue";


export default {
  name:'ArtistesView',
  components: { cardboobaArt,cardpnlArt, carddtfArt, cardjosmanArt}
};
</script>

<style scoped>
</style>




