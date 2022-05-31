<template>
<div class="flex flex-wrap">
  <p class="w-auto flex-grow-0 flex-shrink-0 text-xs mx-1 my-1 md:text-base gap-2.5 px-[9px] py-2.5 md:py-1.5 rounded-[10px] bg-[#E5E7EB] font-medium text-center text-[#6B7280]">{{ titre }}</p>
</div>
</template>

<script>
export default {
  props: ['titre']
}
</script>
