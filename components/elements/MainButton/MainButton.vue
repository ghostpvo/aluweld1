<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'submit'
  }
})
</script>

<template>
  <button :type="type" class="main-button">
    <span class="title">{{ title }}</span>
    <nuxt-icon name="arrow"/>
  </button>
</template>

<style lang="scss" scoped>
@use "main-button";
</style>