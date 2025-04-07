<script setup lang="ts">
import { ref } from 'vue'
import MiniWidget from "./MiniWidget.vue";

const container = ref<HTMLElement | null>(null);
let startX = 0;
let startY = 0;
let isScrolling = false;

function scrollLeft() {
  container.value?.scrollBy({
    left: -100,
    behavior: 'smooth'
  });
}

function scrollRight() {
  container.value?.scrollBy({
    left: 100,
    behavior: 'smooth'
  });
}

// Обработка начала касания
function handleTouchStart(e: TouchEvent) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  isScrolling = false;
}

// Обработка движения касания
function handleTouchMove(e: TouchEvent) {
  if (!container.value) return;

  const currentX = e.touches[0].clientX;
  const currentY = e.touches[0].clientY;
  const deltaX = currentX - startX;
  const deltaY = currentY - startY;

  // Определяем, начался ли горизонтальный скролл
  if (!isScrolling && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 5) {
    isScrolling = true; // Флаг, что начался горизонтальный скролл
  }

  // Если скролл горизонтальный, блокируем Swiper
  if (isScrolling) {
    e.stopPropagation(); // Предотвращаем передачу события в Swiper
  }
}

// Обработка окончания касания
function handleTouchEnd(e: TouchEvent) {
  startX = 0;
  startY = 0;
  isScrolling = false;
}
</script>

<template>
  <div
      class="app-mini-widget-wrapper"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
  >
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
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pinch-zoom; /* Разрешаем горизонтальный скролл и зум */
  -ms-touch-action: pan-x pinch-zoom; /* Поддержка для IE/Edge */
  scrollbar-width: none; /* Убираем полосу прокрутки в Firefox */
}

.app-mini-widget::-webkit-scrollbar {
  display: none; /* Убираем полосу прокрутки в Webkit-браузерах */
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