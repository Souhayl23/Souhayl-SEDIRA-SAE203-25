<template>
<div class="flex flex-wrap">
  <p class="w-auto flex-grow-0 flex-shrink-0 gap-2.5 px-[9px] py-2.5 my-1 md:py-1.5 rounded-[10px] bg-[#f6c139] font-medium text-center text-xs md:text-base text-white">{{ titre }}</p>
</div>
</template>

<script>
export default {
  props: ['titre']
}
</script>
