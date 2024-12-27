<script lang="ts" setup>
import {ref} from 'vue'

import TabsElement from "~/components/elements/TabsElement/TabsElement.vue";
import BlockTitle from "~/components/elements/BlockTitle/BlockTitle.vue";

const tabs = [
  {
    name: 'repair',
    label: 'Ремонтні роботи',
    content: {
      items: [
        {
          title: 'Зв’язок',
          content: 'Звязуємось з клієнтом в телефонному режимі, вислуховуємо суть проблеми.'
        },
        {
          title: 'Ремонт',
          content: 'Якщо зламана деталь/виріб транспортабельна (її можна перевезти) пропонуємо клієнту привезти деталь/виріб в наш цех  (при цьому плануємо/обговорюємо дату та час приїзду)'
        },
        {
          title: 'Виїзд на місце',
          content: 'Якщо деталь/виріб який потребує ремонту неможливо перевезти, або у клієнта складнощі з його транспортуванням здійснюємо виїзд до клієнта для проведення зварювально-ремонтних робіт'
        }
      ]
    }
  },
  {
    name: 'production',
    label: 'Виготовлення виробу/конструкції з алюмінію',
    content: {
      items: [
        {
          title: 'Title 1',
          content: 'Item content 1'
        },
        {
          title: 'Title 2',
          content: 'Item content 2'
        },
        {
          title: 'Title 3',
          content: 'Item content 3'
        }
      ]
    }
  },
]

const selectedTab = ref(tabs[0])

const changeTab = (tabName) => {
  selectedTab.value = tabName
}
</script>

<template>
  <div id="our-services" class="our-services">
    <block-title class="wrapper" title="Наші послуги"/>
    <div class="content wrapper">
      <img :src="'/img/our-services-pic.jpg'" alt="" class="pic">
      <tabs-element
          :names="tabs"
          :selectedTab="selectedTab"
          @changeTab="changeTab">
      </tabs-element>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "our-services";
</style>