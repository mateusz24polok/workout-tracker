<template>
  <button
    class="text-zinc-400 font-bold"
    :style="{
      'font-size': size + 'px',
    }"
  >
    X
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: { type: Number, default: 24 },
});
</script>
