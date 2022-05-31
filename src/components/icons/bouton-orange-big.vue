<template>
<div class="flex flex-wrap">
  <p class="w-[150px] flex-grow-0 flex-shrink-0 gap-2.5 px-[9px] md:w-[200px] py-1 my-1 md:py-1,5 rounded-[5px] bg-[#f6c139] font-medium text-center text-xs md:text-base text-white">{{ titre }}</p>
</div>
</template>

<script>
export default {
  props: ['titre']
}
</script>
