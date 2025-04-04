<template>
  <!-- Если чат не выбран – показываем список, иначе – детальный чат -->
  <ChatList
      v-if="!selectedChatId"
      :chats="chatList"
  />
<!--  <ChatView-->
<!--      v-else-->
<!--      :name="selectedChat?.name || ''"-->
<!--      :avatar="selectedChat?.avatar || ''"-->
<!--      @back="unselectChat"-->
<!--  />-->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ChatList from './ChatList.vue';
import ChatView from './ChatView.vue';

// Тип для элемента списка чатов
interface ChatListItem {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  lastTime: string;
}

// Исходный список чатов (можно загрузить с сервера и т. д.)
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

// Идентификатор выбранного чата
const selectedChatId = ref<number | null>(null);

// При клике на чат в списке:
function selectChat(chatId: number) {
  selectedChatId.value = chatId;
}

// При нажатии "назад" в детальном экране:
function unselectChat() {
  selectedChatId.value = null;
}

// Текущий выбранный чат
const selectedChat = computed(() =>
    chatList.value.find((item) => item.id === selectedChatId.value)
);
</script>

<style scoped>
/* При желании любые стили для контейнера */
</style>
