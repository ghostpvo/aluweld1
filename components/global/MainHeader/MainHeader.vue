<script lang="ts" setup>
import MainMenu from "~/components/elements/MainMenu/MainMenu.vue";

const isActive = ref(false)
</script>

<template>
  <div class="main-header wrapper">
    <img :src="'/img/logo.svg'" alt="" class="logo">
    <main-menu :is-active="isActive"/>
    <div class="right-content">
      <div class="header-contact">
        <nuxt-icon name="phone"></nuxt-icon>
        <p class="text">
          <span class="label">Зв’яжіться з нами:</span>
          <a class="phone" href="tel:+380982736506">+38(098)273-65-06</a>
        </p>
      </div>
      <nuxt-icon :name="!isActive ? 'menu-burger' : 'close'" class="menu-burger"
                 @click="isActive = !isActive"></nuxt-icon>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "main-header" as *;
</style>