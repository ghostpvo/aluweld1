<script lang="ts" setup>

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});

const items = ref([
  {
    title: 'Послуги',
    link: '#our-services'
  }, {
    title: 'Ціни',
    link: '#our-prices'
  }, {
    title: 'Чому ми?',
    link: '#why-us'
  }, {
    title: 'Галерея',
    link: '#our-gallery'
  }, {
    title: 'Зв’язатись з нами',
    link: '#contact-us'
  }
])
</script>

<template>
  <ul :class="{active: isActive}" class="main-menu">
    <li v-for="(item, i) in items" :key="i" class="main-menu__item">
      <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "main-menu";
</style>