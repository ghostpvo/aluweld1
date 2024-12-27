<script lang="ts" setup>

import MainMenu from "~/components/elements/MainMenu/MainMenu.vue";
</script>

<template>
  <div class="main-footer">
    <div class="wrapper">
      <div class="left-side">
        <img :src="'/img/logo.svg'" alt="" class="logo">
        <span class="copyright">© 2024 АлюведУж. Всі права захищено</span>
      </div>
      <div class="right-side">
        <div class="contact-item">
          <span class="contact-item__title">Зв’яжіться з нами:</span>
          <a class="contact-item__content" href="tel:380982736506">+38(098)273-65-06</a>
        </div>
        <div class="contact-item">
          <span class="contact-item__title">Наша адреса:</span>
          <span class="contact-item__content">м. Ужгород. вул. Болгарська 3</span>
        </div>
      </div>
    </div>
    <div class="menu-wrapper">
      <main-menu class="wrapper"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "main-footer";
</style>