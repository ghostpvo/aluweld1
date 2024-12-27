<script lang="ts" setup>

import BlockTitle from "~/components/elements/BlockTitle/BlockTitle.vue";

const items = ref([
  {
    name: 'soldering-iron',
    title: 'Якісне обладнання',
    description: 'Використовуємо зварювальне обладнання топового австрійського виробника'
  },
  {
    name: 'table',
    title: 'Професійні столи',
    description: 'Працюємо на професійних зварювальних столах із відповідною оснасткою'
  },
  {
    name: 'clock',
    title: 'Виконуємо забов’язання',
    description: 'Працюємо в межах визначених строків'
  }
])
</script>

<template>
  <div id="why-us" class="why-us">
    <block-title class="wrapper" mark="?" title="Чому ми"/>
    <div class="content wrapper">
      <img :src="'/img/why-us-pic.jpg'" alt="" class="pic">
      <ul class="list">
        <li v-for="(item, index) in items" :key="index" class="item">
          <div class="item__header">
            <span class="item__icon-wrapper">
              <nuxt-icon :name="item.name"/>
            </span>
            <block-title :title="item.title" is-subtitle/>
          </div>
          <p class="description">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "why-us";
</style>