<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
    required: true
  },
  isSubtitle: {
    type: Boolean,
    default: false
  },
  mark: {
    type: String,
    default: '.'
  }
})
</script>

<template>
  <h2 :class="{'subtitle': isSubtitle}" class="block-title">
    {{ title }}
    <mark>{{ mark }}</mark>
  </h2>
</template>

<style lang="scss" scoped>
@use "block-title";
</style>