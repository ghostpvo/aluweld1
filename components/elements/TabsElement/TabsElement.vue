<script lang="ts" setup>
const props = defineProps({
  names: {
    type: Array,
    required: true
  },
  selectedTab: {
    type: Object,
    required: false
  }
})

const emit = defineEmits(['changeTab'])

const clickOnTab = (tabName) => {
  emit('changeTab', tabName)
}
</script>

<template>
  <div class="tabs-element">
    <div class="tab-nav">
    <span
        v-for="tab in names"
        :key="tab.name"
        :class="['tab-nav__item', {'selected': tab.name === selectedTab.name}]"
        @click="clickOnTab(tab)">
      {{ tab.label }}
      <span class="tab-border"></span>
    </span>
    </div>
    <client-only>
      <div class="tab-content">
        <transition mode="out-in" name="slide-fade">
          <div v-if="selectedTab && selectedTab.content" :key="selectedTab.name">
            <ul class="tab-content__list">
              <li v-for="(item, index) in selectedTab.content.items" class="tab-content__item">
                <span class="counter">{{ index > 8 ? index + 1 : `0${index + 1}` }}<mark>.</mark></span>
                <div class="content">
                  <span class="title">{{ item.title }}</span>
                  <p class="description">{{ item.content }}</p>
                </div>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </client-only>

  </div>
</template>

<style lang="scss" scoped>
@use "tabs-element";
</style>