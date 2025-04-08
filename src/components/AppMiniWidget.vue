<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MiniWidget from "./MiniWidget.vue";

const container = ref<HTMLElement | null>(null);

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

// Предотвращаем всплытие события wheel (прокрутка колесиком мыши)
function handleWheel(event: WheelEvent) {
  event.stopPropagation();
  event.preventDefault();

  const scrollAmount = event.deltaX || event.deltaY; // Учитываем горизонтальную или вертикальную прокрутку
  container.value?.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Предотвращаем всплытие событий касания (touch)
function handleTouchMove(event: TouchEvent) {
  event.stopPropagation();
}

onMounted(() => {
  container.value?.addEventListener('touchmove', handleTouchMove, { passive: false });
});

onBeforeUnmount(() => {
  container.value?.removeEventListener('touchmove', handleTouchMove);
});
</script>

<template>
  <div class="app-mini-widget-wrapper">
    <button class="scroll-button left" @click="scrollLeft"><</button>
    <div
        ref="container"
        class="app-mini-widget"
        @wheel="handleWheel"
        @touchmove="handleTouchMove"
        @touchend="handleTouchMove"
    >
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи" />
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи" />
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи" />
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи" />
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
      <MiniWidget value="300" />
      <MiniWidget :value="20" footer-value="Пользователи" />
      <MiniWidget :value="3" />
      <MiniWidget value="12:40" footer-value="UTC+05:00" />
    </div>
    <button class="scroll-button right" @click="scrollRight">></button>
  </div>
</template>

<style scoped>
.app-mini-widget-wrapper {
  display: flex;
  align-items: stretch;
  margin-top: 16px;
}

.app-mini-widget {
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
  border-radius: 4px;
  display: flex;
  align-items: center;
  outline: none;
}

.scroll-button.left {
  margin-right: 4px;
}

.scroll-button.right {
  margin-left: 4px;
}
</style>