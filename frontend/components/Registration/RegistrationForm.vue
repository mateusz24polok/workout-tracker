<template>
  <FormKit
    type="form"
    ref="registrationForm"
    v-model="formData"
    form-class="px-4 py-2"
    :actions="false"
    @submit="submitHandler"
  >
    <h2 class="text-3xl mt-2 mb-4">Register User</h2>
    <FormKit
      type="text"
      name="name"
      id="username"
      autocomplete="new-username"
      label="Your name"
      placeholder="Name"
      validation="required"
    />
    <FormKit
      type="text"
      name="email"
      autocomplete="new-username"
      label="Your email"
      placeholder="Email"
      validation="required|email"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        autocomplete="new-password"
        label="Password"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          matches: 'Please include at least one symbol',
        }"
        placeholder="Your password"
      />
      <FormKit
        type="password"
        name="password_confirm"
        autocomplete="new-password"
        label="Confirm password"
        placeholder="Confirm password"
        validation="required|confirm"
      />
    </div>
    <div class="button-group flex">
      <FormKit
        type="button"
        label="Switch to login"
        :style="{ 'background-color': 'red' }"
        @click="switchToLogin"
      />
      <FormKit type="button" label="Register" @click="submitForm" />
    </div>
  </FormKit>
</template>

<script setup>
import { ref } from "vue";
const router = useRouter();
const registrationForm = ref(null);
const submitted = ref(false);
const formData = ref({});

onMounted(() => {
  const userNameInput = document.getElementById("username");

  if (userNameInput) {
    userNameInput.focus();
  }
});

const switchToLogin = () => {
  router.push("/login");
};

const submitForm = () => {
  const node = registrationForm.value.node;
  node.submit();
};

const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000));
  submitted.value = true;

  console.log("Submitted data", formData.value);
};
</script>
