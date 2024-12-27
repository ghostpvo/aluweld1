<script lang="ts" setup>
defineProps(['item'])
const emit = defineEmits(['toggleAnswer'])
const handleClick = id => emit('toggleAnswer', id)
</script>

<template>
  <div class="accordion-item">
    <div class="header" @click="() => handleClick(item.id)">
      <div class="question">
        {{ item.question }}
      </div>
      <div :class="['icon', {open: item.isOpen}]">
        <nuxt-icon name="plus"/>
      </div>
    </div>
    <div :class="['answer', {open: item.isOpen}]">
      <p> {{ item.answer }} </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "accordion-item";
</style>