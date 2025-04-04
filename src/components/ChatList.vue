<template>
  <div
      ref="containerRef"
      class="chat-list-container"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
  >
    <ul class="chat-list">
      <li
          v-for="chat in chats"
          :key="chat.id"
          class="chat-item"
          @click="onSelectChat(chat.id)"
      >
        <img :src="chat.avatar" alt="avatar" class="chat-item-avatar" />
        <div class="chat-item-info">
          <div class="chat-item-name">{{ chat.name }}</div>
          <div class="chat-item-lastMessage">{{ chat.lastMessage }}</div>
        </div>
        <div class="chat-item-time">{{ chat.lastTime }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ChatListItem {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
}

const props = defineProps<{
  chats: ChatListItem[];
}>();

const emits = defineEmits<{
  (e: 'select', chatId: number): void;
}>();

function onSelectChat(chatId: number) {
  emits('select', chatId);
}

const containerRef = ref<HTMLElement | null>(null);
let startX = 0;
let startY = 0;

function handleTouchStart(e: TouchEvent) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}

function handleTouchMove(e: TouchEvent) {
  const container = containerRef.value;
  if (!container) return;

  const currentX = e.touches[0].clientX;
  const currentY = e.touches[0].clientY;
  const deltaX = currentX - startX;
  const deltaY = currentY - startY;

  // Определяем, насколько элемент прокручен
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight;
  const clientHeight = container.clientHeight;

  // Если контейнер не находится на краях, блокируем горизонтальный свайп:
  // То есть, если внутри ещё можно скроллить, не даём Swiper'у срабатывать
  if (scrollTop > 0 && scrollTop + clientHeight < scrollHeight) {
    e.stopPropagation();
  } else {
    // Если элемент находится на самом верху, но пользователь тянет вниз – позволяем outer-свайп
    if (scrollTop === 0 && deltaY > 0) {
      // не блокируем событие
    }
    // Если элемент находится внизу, но пользователь тянет вверх – тоже позволяем outer-свайп
    else if (scrollTop + clientHeight === scrollHeight && deltaY < 0) {
      // не блокируем событие
    } else {
      // В остальных случаях блокируем
      e.stopPropagation();
    }
  }
}

function handleTouchEnd(e: TouchEvent) {
  // Сброс значений, если необходимо
}
</script>

<style scoped>
.chat-list-container {
  max-height: calc(100vh - 44px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
}
.chat-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.chat-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}
.chat-item:hover {
  background-color: #f9f9f9;
}
.chat-item-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;
}
.chat-item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: flex-start;
}
.chat-item-name {
  font-weight: bold;
  font-size: 1rem;
}
.chat-item-lastMessage {
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.chat-item-time {
  font-size: 0.8rem;
  color: #999;
  margin-left: auto;
  margin-right: 0.5rem;
}
</style>
