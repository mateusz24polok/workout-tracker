<template>
  <Modal
    :close-on-overlay="false"
    :is-close-button="false"
    :additional-modal-content-classes="['entry-page-modal-content']"
    :isModalOpen="true"
  >
    <RegistrationForm />
  </Modal>
</template>

<script lang="ts" setup>
import Modal from "@/components/common/Modal/Modal.vue";
import RegistrationForm from "@/components/Registration/RegistrationForm.vue";
</script>

<style lang="scss" src="./registration.scss" />
