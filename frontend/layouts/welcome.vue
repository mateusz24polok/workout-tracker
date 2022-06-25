<template>
  <div class="welcome-background">
    <slot />
  </div>
</template>

<style lang="scss">
  .welcome-background {
    min-height: 100vh;
    background-image: url("~/assets/img/workout.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.3);
  }
</style>