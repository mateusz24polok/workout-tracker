<template>
  <Modal
    :close-on-overlay="false"
    :is-close-button="false"
    :additional-modal-content-classes="['entry-page-modal-content']"
    :isModalOpen="true"
  >
    <LoginForm />
  </Modal>
</template>

<script lang="ts" setup>
import Modal from "@/components/common/Modal/Modal.vue";
import LoginForm from "@/components/Login/LoginForm.vue";
</script>

<style lang="scss" src="./login.scss" />
