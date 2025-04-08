<template>
  <!-- Высота контейнера динамически задаётся через style -->
  <div class="chat-container" :style="{ height: chatContainerHeight }">
    <!-- Шапка чата -->
    <header class="chat-header">
      <button class="back-button" @click="onBack">
        <span>←</span>
      </button>
      <div class="chat-user-info">
        <img class="user-avatar" src="../assets/men.png" alt="User Avatar" />
        <span class="user-name">{{ name }}</span>
      </div>
      <div class="chat-actions">
        <button>...</button>
      </div>
    </header>

    <!-- Список сообщений -->
    <main class="chat-messages" ref="messagesRef">
      <div
          v-for="(msg, i) in messages"
          :key="i"
          class="message"
          :class="msg.from"
      >
        <p class="message-text">{{ msg.text }}</p>
        <span class="message-time">{{ msg.time }}</span>
      </div>
    </main>

    <!-- Поле ввода нового сообщения -->
    <footer class="chat-footer">
      <input
          v-model="newMessage"
          class="chat-input"
          type="text"
          placeholder="Сообщение"
          @keyup.enter="sendMessage"
          @focus="handleFocus"
          @blur="handleBlur"
      />
      <button class="send-button" @click="sendMessage">
        Отправить
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { defineProps, defineEmits } from 'vue';

type FromType = 'message-from-me' | 'message-from-them';

interface ChatMessage {
  text: string;
  time: string;
  from: FromType;
}

const props = defineProps<{
  name: string;
  avatar: string;
}>();

const emits = defineEmits<{ (e: 'back'): void }>();

const messages = ref<ChatMessage[]>([
  {
    text: 'Привет! Как дела?',
    time: '14:30',
    from: 'message-from-them',
  },
  {
    text: 'Привет! Всё отлично, спасибо!',
    time: '14:32',
    from: 'message-from-me',
  },
]);

const newMessage = ref('');
const messagesRef = ref<HTMLElement | null>(null);
// Значение высоты контейнера — изначально полная высота окна
const chatContainerHeight = ref('100vh');

onMounted(() => {
  // Автопрокрутка к последнему сообщению при инициализации
  if (messagesRef.value) {
    messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
  }
});

// Отправка сообщения и автопрокрутка вниз
function sendMessage() {
  if (!newMessage.value.trim()) return;
  const msg: ChatMessage = {
    text: newMessage.value,
    time: new Date().toLocaleTimeString().slice(0, 5),
    from: 'message-from-me',
  };
  messages.value.push(msg);
  newMessage.value = '';

  // Прокручиваем список сообщений вниз
  setTimeout(() => {
    if (messagesRef.value) {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
    }
  }, 0);
}

function onBack() {
  emits('back');
}

/**
 * При фокусе (открытии клавиатуры) фиксируем высоту контейнера,
 * чтобы избежать перерасчёта 100vh и «прыгания» контента.
 */
function handleFocus() {
  chatContainerHeight.value = window.innerHeight + 'px';
}

/**
 * После потери фокуса возвращаем высоту контейнера обратно.
 */
function handleBlur() {
  chatContainerHeight.value = '100vh';
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* Шапка чата */
.chat-header {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
}

.back-button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #1a1a1a;
}

.chat-user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: 600;
}

.chat-actions {
  margin-left: auto;
}

.chat-actions button {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

/* Основная часть – список сообщений */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  -webkit-overflow-scrolling: touch;
  background-color: #f2f2f2;
  /* Резервируем место для фиксированного футера */
  margin-bottom: 60px;
}

.message {
  max-width: 70%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  word-break: break-word;
}

.message-from-me {
  margin-left: auto;
  background-color: #dcf8c6;
}

.message-from-them {
  margin-right: auto;
  background-color: #fff;
}

.message-text {
  margin: 0;
  text-align: justify;
}

.message-time {
  display: block;
  font-size: 0.7rem;
  color: #666;
  margin-top: 0.25rem;
  text-align: right;
}

/* Футер – поле ввода */
.chat-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  background-color: #fff;
  padding: 0.5rem;
  padding-bottom: calc(0.5rem + env(safe-area-inset-bottom)); /* учёт safe-area */
  z-index: 10;
}

.chat-input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  font-size: 1rem;
}

.send-button {
  background-color: #0088cc;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
}

.send-button:hover {
  opacity: 0.9;
}
</style>
