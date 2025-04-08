<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import MiniWidget from "./MiniWidget.vue";

const container = ref<HTMLElement | null>(null);

// Флаги и переменные для кастомного drag-to-scroll
let isDragging = false;
let startX = 0;
let scrollStart = 0;

// Функции для кнопок
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

// Обработчик колесика мыши (desktop)
function handleWheel(event: WheelEvent) {
  event.stopPropagation();
  event.preventDefault();
  const scrollAmount = event.deltaX || event.deltaY;
  container.value?.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

// Обработка начала касания: фиксируем позицию и начальное значение scrollLeft
function handleTouchStart(event: TouchEvent) {
  isDragging = true;
  startX = event.touches[0].pageX;
  if (container.value) {
    scrollStart = container.value.scrollLeft;
  }
  event.stopPropagation();
  // Не вызываем preventDefault здесь, чтобы не блокировать возможные другие нужные события
}

// Обработка движения пальца: вычисляем дельту и прокручиваем контейнер
function handleTouchMove(event: TouchEvent) {
  if (!isDragging) return;
  const currentX = event.touches[0].pageX;
  const dx = startX - currentX;
  container.value?.scrollTo({
    left: scrollStart + dx,
    behavior: 'auto' // плавность можно настроить, если нужно
  });
  event.stopPropagation();
  event.preventDefault(); // Блокируем передачу события родительскому swiper
}

// Завершаем процесс свайпа
function handleTouchEnd(event: TouchEvent) {
  isDragging = false;
  event.stopPropagation();
  // preventDefault здесь не обязателен
}

onMounted(() => {
  if (container.value) {
    container.value.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.value.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.value.addEventListener('touchend', handleTouchEnd, { passive: false });
  }
});

onBeforeUnmount(() => {
  if (container.value) {
    container.value.removeEventListener('touchstart', handleTouchStart);
    container.value.removeEventListener('touchmove', handleTouchMove);
    container.value.removeEventListener('touchend', handleTouchEnd);
  }
});
</script>

<template>
  <div class="app-mini-widget-wrapper">
    <button class="scroll-button left" @click="scrollLeft">&lt;</button>
    <!-- Если используется swiper, можно добавить класс no-swiping -->
    <div ref="container" class="app-mini-widget swiper-no-swiping" @wheel="handleWheel">
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
    <button class="scroll-button right" @click="scrollRight">&gt;</button>
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
  /* Разрешаем только горизонтальный скролл и зум */
  touch-action: pan-x pinch-zoom;
  -ms-touch-action: pan-x pinch-zoom;
  scrollbar-width: none; /* для Firefox */
}

.app-mini-widget::-webkit-scrollbar {
  display: none; /* скрываем полосу прокрутки в браузерах на базе Webkit */
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
