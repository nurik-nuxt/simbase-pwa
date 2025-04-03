<template>
  <div class="chat-list-container">
    <div class="chat-list">
      <div
          v-for="chat in chats"
          :key="chat.id"
          class="chat-item"
      >
        <img :src="chat.avatar" alt="avatar" class="chat-item-avatar" />
        <div class="chat-item-info">
          <div class="chat-item-name">{{ chat.name }}</div>
          <div class="chat-item-lastMessage">{{ chat.lastMessage }}</div>
        </div>
        <div class="chat-item-time">{{ chat.lastTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

// Тип для элемента списка чатов
interface ChatListItem {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
}

// Принимаем список чатов через пропс
const props = defineProps<{
  chats: ChatListItem[];
}>();

console.log(props)

// При клике на элемент списка будем эмитить событие 'select'
const emits = defineEmits<{
  (e: 'select', chatId: number): void;
}>();

function onSelectChat(chatId: number) {
  emits('select', chatId);
}
</script>

<style scoped>
.chat-list-container {
  max-height: calc(100vh - 44px);
  overflow-y: auto;
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
  touch-action: manipulation;
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
