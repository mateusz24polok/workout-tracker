<template>
  <div class="flex flex-col">
    <img
      v-if="status === 'success'"
      src="~/assets/img/green-circle-tick.png"
      alt="success"
      :height="100"
      :width="100"
      class="mx-auto my-8"
    />
    <img
      v-else
      src="~/assets/img/red-circle-cross.png"
      alt="fail"
      :height="100"
      :width="100"
      class="mx-auto my-6"
    />
    <h3
      v-if="message"
      class="text-xl text-center"
      :class="{
        'text-red-600': status === 'fail',
        'text-lime-500': status === 'success',
      }"
    >
      {{ message }}
    </h3>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  status: {
    type: String as PropType<"fail" | "success">,
    required: true,
  },
  message: {
    type: String,
  },
});
</script>
