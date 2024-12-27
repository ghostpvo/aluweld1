<script lang="ts" setup>

import BlockTitle from "~/components/elements/BlockTitle/BlockTitle.vue";
import MainButton from "~/components/elements/MainButton/MainButton.vue";

const name = ref('')
const phone = ref('')
const mail = ref('')
const message = ref('')

const submitForm = () => {
  console.log(`Submitted! Name: ${name.value}, phone: ${phone.value}, mail: ${mail.value}, message: ${message.value}`)
}
</script>

<template>
  <div id="contact-us" class="contact-us wrapper">
    <div class="form-side">
      <block-title title="Зв’язатись з нами"/>
      <form @submit.prevent="submitForm">
        <input v-model="name" class="text-input" placeholder="Ім’я" required type="text">
        <input v-model="phone" class="text-input" placeholder="Номер телефону" required type="tel">
        <input v-model="mail" class="text-input" placeholder="E-mail" type="email">
        <textarea v-model="message" class="textarea" placeholder="Ваше повідомлення"></textarea>
        <main-button title="Зв’затись з нами"/>
      </form>
    </div>
    <img alt="" class="pic" src="/img/contact-us-pic.jpg">
  </div>
</template>

<style lang="scss" scoped>
@use "contact-us";
</style>