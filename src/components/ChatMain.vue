<template>
  <ChatList
      v-if="!selectedChatId"
      :chats="chatList"
      @select="selectChat"
  />
  <ChatView
      v-else
      :name="selectedChat?.name || ''"
      :avatar="selectedChat?.avatar || ''"
      @back="unselectChat"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ChatList from './ChatList.vue';
import ChatView from './ChatView.vue';

interface ChatListItem {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
}

const chatList = ref<ChatListItem[]>([
  {
    id: 1,
    name: 'Иван Петров',
    avatar: 'https://placehold.co/40?text=IP',
    lastMessage: 'Привет! Как дела?',
    lastTime: '14:30',
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    avatar: 'https://placehold.co/40?text=MS',
    lastMessage: 'Когда встретимся?',
    lastTime: '13:10',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 1,
    name: 'Иван Петров',
    avatar: 'https://placehold.co/40?text=IP',
    lastMessage: 'Привет! Как дела?',
    lastTime: '14:30',
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    avatar: 'https://placehold.co/40?text=MS',
    lastMessage: 'Когда встретимся?',
    lastTime: '13:10',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 1,
    name: 'Иван Петров',
    avatar: 'https://placehold.co/40?text=IP',
    lastMessage: 'Привет! Как дела?',
    lastTime: '14:30',
  },
  {
    id: 2,
    name: 'Мария Сидорова',
    avatar: 'https://placehold.co/40?text=MS',
    lastMessage: 'Когда встретимся?',
    lastTime: '13:10',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
  {
    id: 3,
    name: 'Другой контакт',
    avatar: 'https://placehold.co/40?text=DC',
    lastMessage: 'Ок, принято!',
    lastTime: 'Вчера',
  },
]);

const selectedChatId = ref<number | null>(null);

function selectChat(chatId: number) {
  selectedChatId.value = chatId;
}

function unselectChat() {
  selectedChatId.value = null;
}

const selectedChat = computed(() =>
    chatList.value.find((item) => item.id === selectedChatId.value)
);
</script>
