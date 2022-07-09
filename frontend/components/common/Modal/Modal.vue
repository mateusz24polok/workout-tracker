<template>
  <teleport v-if="isModalOpen" to="body">
    <div
      @click.self="onOverlayClick"
      class="modal__overlay"
      :class="additionalOverlayClasses"
    >
      <div
        class="modal__content rounded-lg min-w-300 bg-sky-100"
        :class="additionalModalContentClasses"
      >
        <CloseButton
          class="modal__content-close-button cursor-pointer absolute right-3 top-3"
          v-if="isCloseButton"
        />
        <div class="modal__content-container m-3">
          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import CloseButton from "@/components/common/CloseButton/CloseButton.vue";

const props = defineProps({
  isModalOpen: { type: Boolean, default: false },
  isCloseButton: { type: Boolean, default: true },
  closeOnOverlay: { type: Boolean, default: true },
  additionalOverlayClasses: { type: [Object, Array] },
  additionalModalContentClasses: { type: [Object, Array] },
});

const emit = defineEmits(["onClose"]);

const onModalClose = () => {
  emit("onClose");
};

const onOverlayClick = () => {
  if (props.closeOnOverlay) {
    onModalClose();
  }
};
</script>

<style lang="scss" src="./Modal.scss" />
