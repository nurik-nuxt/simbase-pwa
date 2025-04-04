<script setup lang="ts">
import { ref } from 'vue'
import MiniWidget from "./MiniWidget.vue";

const container = ref<HTMLElement | null>(null)

function scrollLeft() {
  container.value?.scrollBy({
    left: -100, // прокручиваем влево на 100px
    behavior: 'smooth'
  })
}

function scrollRight() {
  container.value?.scrollBy({
    left: 100, // прокручиваем вправо на 100px
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="app-mini-widget-wrapper">
    <button class="scroll-button left" @click="scrollLeft"><</button>
    <div ref="container" class="app-mini-widget">
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи"/>
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи"/>
      <MiniWidget :value="3" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи"/>
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи"/>
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи"/>
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи"/>
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
    </div>
    <button class="scroll-button right" @click="scrollRight">></button>
  </div>
</template>

<style scoped>
.app-mini-widget-wrapper {
  display: flex;
  align-items: center;
}
.app-mini-widget {
  margin-top: 16px;
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scroll-behavior: smooth; /* плавная прокрутка */
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
}
.scroll-button {
  background: #6E7077;
  color: #fff;
  border: none;
  padding: 4px;
  cursor: pointer;
}
.scroll-button.left {
  margin-right: 4px;
}
.scroll-button.right {
  margin-left: 4px;
}
</style>
