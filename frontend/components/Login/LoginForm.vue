<template>
  <FormKit
    type="form"
    id="loginForm"
    v-model="formData"
    form-class="px-4 py-2"
    :actions="false"
    @submit="submitHandler"
  >
    <h2 class="text-3xl mt-2 mb-4">Login!</h2>
    <FormKit
      autocomplete="new-username"
      type="text"
      id="username"
      name="email"
      label="Your email"
      placeholder="Email"
      validation="required|email"
    />
    <FormKit
      autocomplete="new-password"
      type="password"
      name="password"
      label="Password"
      validation="required|length:6|matches:/[^a-zA-Z]/"
      :validation-messages="{
        matches: 'Please include at least one symbol',
      }"
      placeholder="Your password"
    />
    <div class="button-group flex">
      <FormKit
        type="button"
        label="Switch to register"
        :style="{ 'background-color': 'red' }"
        @click="switchToLogin"
      />
      <FormKit type="button" label="Login" @click="submit" />
    </div>
  </FormKit>
</template>

<script setup>
import { ref } from "vue";
import { submitForm } from "@formkit/core";
import axios from "axios";

const router = useRouter();
const submitted = ref(false);
const formData = ref({});

onMounted(() => {
  const userNameInput = document.getElementById("username");

  if (userNameInput) {
    userNameInput.focus();
  }
});

const switchToLogin = () => {
  router.push("/registration");
};

const submit = () => {
  submitForm("loginForm");
};

const submitHandler = async () => {
  const data = await axios.post("http://localhost:5000/api/v1/users/login", {
    email: formData.value.email,
    password: formData.value.password,
  });

  console.log(data);

  console.log("Submitted data", formData.value);
};
</script>
