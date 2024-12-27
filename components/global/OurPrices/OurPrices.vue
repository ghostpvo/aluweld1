<script lang="ts" setup>

import BlockTitle from "~/components/elements/BlockTitle/BlockTitle.vue";
import AccordionItem from "~/components/elements/AccordionItem/AccordionItem.vue";

const factors = ref([
  {
    title: 'Складність',
    description: 'Складності виконання робіт, товщини металу який буде зварюватись'
  }, {
    title: 'Характер робіт',
    description: 'характеру робіт, а саме який це вид робіт, наплавка відновлення різьби, заварка тріщини, вимоги до герметичності шву (так чи ні) і так далі'
  }
])

const items = ref([
  {
    "id": 1,
    "question": "Вартісь 1 метра зварного шву може коливатись від 2400 грн до 3300 грн",
    "answer": "Вартісь 1 метра зварного шву може коливатись від 2400 грн до 3300 грн. Вартісь 1 метра зварного шву може коливатись від 2400 грн до 3300 грн. Вартісь 1 метра зварного шву може коливатись від 2400 грн до 3300 грн. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis justo, sed egestas dui. Donec ut suscipit tortor, a faucibus dolor. Praesent consectetur suscipit erat nec volutpat. Nullam tristique velit non magna ultricies, ac mattis sem tincidunt. Donec consectetur cursus semper. Nam nec massa arcu. Morbi tristique neque vel fringilla ullamcorper. Donec pretium maximus lorem, nec finibus sem suscipit eu. Quisque ut nulla lacus. Integer aliquam arcu ac feugiat consequat. Phasellus purus ante, iaculis vitae sodales at, pharetra et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis justo, sed egestas dui. Donec ut suscipit tortor, a faucibus dolor. Praesent consectetur suscipit erat nec volutpat. Nullam tristique velit non magna ultricies, ac mattis sem tincidunt. Donec consectetur cursus semper. Nam nec massa arcu. Morbi tristique neque vel fringilla ullamcorper. Donec pretium maximus lorem, nec finibus sem suscipit eu. Quisque ut nulla lacus. Integer aliquam arcu ac feugiat consequat. Phasellus purus ante, iaculis vitae sodales at, pharetra et mi.",
    "isOpen": false
  },
  {
    "id": 2,
    "question": "До цього ще додаємо вартість виїзду (транспортні витрати)",
    "answer": "Lorem ipsum dolor sit amet, ",
    "isOpen": false
  },
  {
    "id": 3,
    "question": "Вартість матеріалів (наприклад труби із яких виготовляється виріб) та вартість розхідматеріалів теж окремо (алюмінієвий зварювальний дріт, аргон, інші витратні матеріали)",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis justo, sed egestas dui. Donec ut suscipit tortor, a faucibus dolor. Praesent consectetur suscipit erat nec volutpat. Nullam tristique velit non magna ultricies, ac mattis sem tincidunt. Donec consectetur cursus semper. Nam nec massa arcu. Morbi tristique neque vel fringilla ullamcorper. Donec pretium maximus lorem, nec finibus sem suscipit eu. Quisque ut nulla lacus. Integer aliquam arcu ac feugiat consequat. Phasellus purus ante, iaculis vitae sodales at, pharetra et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis justo, sed egestas dui. Donec ut suscipit tortor, a faucibus dolor. Praesent consectetur suscipit erat nec volutpat. Nullam tristique velit non magna ultricies, ac mattis sem tincidunt. Donec consectetur cursus semper. Nam nec massa arcu. Morbi tristique neque vel fringilla ullamcorper. Donec pretium maximus lorem, nec finibus sem suscipit eu. Quisque ut nulla lacus. Integer aliquam arcu ac feugiat consequat. Phasellus purus ante, iaculis vitae sodales at, pharetra et mi.",
    "isOpen": false
  },
  {
    "id": 4,
    "question": "Вартість проектування, якщо це складний виріб",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis justo, sed egestas dui. Donec ut suscipit tortor, a faucibus dolor. Praesent consectetur suscipit erat nec volutpat. Nullam tristique velit non magna ultricies, ac mattis sem tincidunt. Donec consectetur cursus semper. Nam nec massa arcu. Morbi tristique neque vel fringilla ullamcorper. Donec pretium maximus lorem, nec finibus sem suscipit eu. Quisque ut nulla lacus. Integer aliquam arcu ac feugiat consequat. Phasellus purus ante, iaculis vitae sodales at, pharetra et mi.",
    "isOpen": false
  },
  {
    "id": 5,
    "question": "Вартість монтажу, якщо виріб монтується у Вас по місцю його експлуатації (наприклад навіс, ворота, тощо)",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis justo, sed egestas dui. Donec ut suscipit tortor, a faucibus dolor. Praesent consectetur suscipit erat nec volutpat. Nullam tristique velit non magna ultricies, ac mattis sem tincidunt. Donec consectetur cursus semper. Nam nec massa arcu. Morbi tristique neque vel fringilla ullamcorper. Donec pretium maximus lorem, nec finibus sem suscipit eu. Quisque ut nulla lacus. Integer aliquam arcu ac feugiat consequat. Phasellus purus ante, iaculis vitae sodales at, pharetra et mi.",
    "isOpen": false
  },
  {
    "id": 6,
    "question": "Вартість орендної плати та витраченої електроенергії, якщо виріб/конструкція виготовляється у нас в цеху",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sagittis justo, sed egestas dui. Donec ut suscipit tortor, a faucibus dolor. Praesent consectetur suscipit erat nec volutpat. Nullam tristique velit non magna ultricies, ac mattis sem tincidunt. Donec consectetur cursus semper. Nam nec massa arcu. Morbi tristique neque vel fringilla ullamcorper. Donec pretium maximus lorem, nec finibus sem suscipit eu. Quisque ut nulla lacus. Integer aliquam arcu ac feugiat consequat. Phasellus purus ante, iaculis vitae sodales at, pharetra et mi.",
    "isOpen": false
  },
])

const toggleAnswer = id => {
  items.value = items.value.map(item => item.id === id ? {...item, isOpen: !item.isOpen} : item)
}
</script>

<template>
  <div id="our-prices" class="our-prices wrapper">
    <block-title title="Ціни на послуги"/>
    <p class="text">Ціни визначаються здебільшого індивідуально, в залежності від декількох факторів, а саме:</p>
    <ul class="factors-list">
      <li v-for="(factor, index) in factors" :key="index" class="factor-item">
        <block-title :title="factor.title" is-subtitle/>
        <p class="factor-item__description">{{ factor.description }}</p>
      </li>
    </ul>
    <p class="marked-text">До прикладу якщо виготовляється виріб або конструкція з алюмінію ціна може формуватись
      орієнтовно так:</p>
    <div class="accordion-item-wrapper">
      <accordion-item
          v-for="item in items"
          :key="item.id"
          :item="item"
          @toggle-answer="toggleAnswer"
      />
    </div>
    <p class="accent-text">І в результаті ви отримуєте виріб, який
      <mark>не обов’язково фарбувати</mark>
      , так як він практично не
      страждає від корозії та
      <mark>є значно легшим</mark>
      від свого сталевого аналогу. Має сріблястий колір (свій природній)
    </p>
    <div class="factor-item">
      <block-title is-subtitle title="Примітка"/>
      <p class="factor-item__description">Також якщо це зварювально ремонтні роботи слід памятати, що алюміній - дуже
        "капризний" метал, коли мова йде про його зварювання і в цьому плані "любить абсолютну чистоту". І дуже часто
        буває так що деталі (наприклад автодеталі - ГБЦ, піддон) та багато інших подібних деталей приносять в
        забрудненому виді, їх потрібно додатково відмивати та обезжирювати, однозначно це теж впливає на ціну, так як це
        додатково витрачений час та ресурси</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "our-prices";
</style>