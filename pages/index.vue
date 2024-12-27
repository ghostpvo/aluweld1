<script lang="ts" setup>

import OurServices from "~/components/global/OurServices/OurServices.vue";
import ContactButton from "~/components/elements/ContactButton/ContactButton.vue";
</script>

<template>
  <div>
    <div class="first-screen">
      <main-header/>
      <main-banner/>
    </div>
    <div class="blocks-wrapper">
      <our-services/>
      <our-prices/>
      <why-us/>
      <our-gallery/>
      <contact-us/>
      <main-footer/>
    </div>
    <contact-button/>
  </div>
</template>

<style lang="scss" scoped>
.first-screen {
  font-size: 0;

  @media (max-width: 1200px) {
    padding-top: 109px;
  }

  @media (max-width: 500px) {
    padding-top: 90px;
  }
}

.blocks-wrapper {
  background-image: url("/img/background.png");
}
</style>