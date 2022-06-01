<template>
 <h3 class="titre text-[20px] lg:text-[30px]">CONTACT</h3>
 <div class="flex flex-col justify-center items-center mt-[50px] mb-[140px]" >
   <iframe class="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.031498023528!2d2.376395514965467!3d48.838537879285546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721743fa0af9%3A0x989bfc2771543869!2sAccorHotels%20Arena!5e0!3m2!1sfr!2sfr!4v1654004758283!5m2!1sfr!2sfr" width="325" height="325" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   <Form />
   <div class="py-3">
   <boutonorangebig titre='Envoyer'/>
   </div>


</div>




</template>

<script>
import Form from "../components/icons/form.vue";
import boutonorangebig from "../components/icons/bouton-orange-big.vue";


export default {
  name: "ContactView",
  components: {Form, boutonorangebig},
};
</script>

<style>
  /* Import Styles application */
  @import '@/assets/style.css';
  
</style>

