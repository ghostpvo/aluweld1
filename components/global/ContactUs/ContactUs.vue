<script lang="ts" setup>
import emailjs from '@emailjs/browser';

import BlockTitle from "~/components/elements/BlockTitle/BlockTitle.vue";
import MainButton from "~/components/elements/MainButton/MainButton.vue";

const name = ref('')
const phone = ref('')
const mail = ref('')
const message = ref('')

const submitForm = () => {
  console.log(`Submitted! Name: ${name.value}, phone: ${phone.value}, mail: ${mail.value}, message: ${message.value}`)
}

const sendEmail = () => {
  const templateParams = {
    inputName: name.value,
    inputPhone: phone.value,
    inputEmail: mail.value,
    inputMessage: message.value,
    currentRoute: "aluweld.uz.ua",
  };

  emailjs.init("OExYJ8S5Bi3EIZptu");

  emailjs.send('service_psjorb9', 'template_6p3qkym', templateParams)
      .then((response: Object) => {
        console.log('Email sent:', response);
      })
      .catch((error: Object) => {
        console.error('Email error:', error);
      });

  alert("Дякуємо за заявку! Очікуйте на дзвінок.");
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
        <main-button title="Зв’затись з нами" @click="sendEmail" />
      </form>
    </div>
    <img alt="" class="pic" src="/img/contact-us-pic.jpg">
  </div>
</template>

<style lang="scss" scoped>
@use "contact-us";
</style>
