<script lang="ts" setup>
import VueEasyLightbox from 'vue-easy-lightbox/external-css'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'
import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = ref({})

const items = ref([
  {
    src: '/img/gallery-pic-1.jpg'
  },
  {
    src: '/img/gallery-pic-2.jpg'
  },
  {
    src: '/img/gallery-pic-3.jpg'
  },
  {
    src: '/img/gallery-pic-1.jpg'
  },
  {
    src: '/img/gallery-pic-1.jpg'
  },
])

onMounted(() => {
  swiper.value = new Swiper('.our-gallery-swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      651: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      901: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    // slidesOffsetBefore: 50,
  });
})

const visibleRef = ref(false)
const indexRef = ref(0)

const onHide = () => visibleRef.value = false
const showImg = (index) => {
  indexRef.value = index
  visibleRef.value = true
}
</script>

<template>
  <div id="our-gallery" class="wrapper our-gallery">
    <div class="image-block">
      <div class="our-gallery-swiper swiper">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in items" :key="index" class="swiper-slide">
            <img :src="item.src" alt="" class="image">
            <button class="open-pic-button" type="button" @click="() => showImg(index)">
              <nuxt-icon name="plus"/>
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>
    <vue-easy-lightbox :imgs="items" :index="indexRef" :moveDisabled="true" :visible="visibleRef"
                       @hide="onHide"></vue-easy-lightbox>
    <div class="video-block">
      <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
          src="https://www.youtube.com/embed/3YxaaGgTQYM?si=pA9nB0tfVqNOJmCP"
          title="YouTube video player"></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "our-gallery";
</style>