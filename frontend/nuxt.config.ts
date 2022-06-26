import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["normalize.css/normalize.css"],
  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],
});
