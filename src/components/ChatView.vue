<template>
  <div class="chat-container">
    <!-- Шапка чата -->
    <header class="chat-header">
      <button class="back-button" @click="onBack">
        <span>&larr;</span> <!-- Условная иконка назад -->
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
    <main class="chat-messages">
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
      />
      <button
          class="send-button"
          @click="sendMessage"
      >
        Отправить
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

// Тип для поля "from" (от кого сообщение)
type FromType = 'message-from-me' | 'message-from-them';

// Интерфейс одного сообщения
interface ChatMessage {
  text: string;
  time: string;
  from: FromType;
}

// Принимаем из вне имя и аватар текущего чата
const props = defineProps<{
  name: string;
  avatar: string;
}>();

console.log(props)
// Отправляем событие 'back', когда нажимаем кнопку "Назад"
const emits = defineEmits<{ (e: 'back'): void }>();

// Список сообщений (для примера – захардкоженный)
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

// Текущее вводимое сообщение
const newMessage = ref('');

// Метод отправки сообщения
function sendMessage() {
  if (!newMessage.value.trim()) return;
  const msg: ChatMessage = {
    text: newMessage.value,
    time: new Date().toLocaleTimeString().slice(0, 5),
    from: 'message-from-me',
  };
  messages.value.push(msg);
  newMessage.value = '';
}

// Метод "Назад"
function onBack() {
  emits('back');
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Шапка чата */
.chat-header {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
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

/* Основная часть – скролл с сообщениями */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  background-color: #f2f2f2;
}

.message {
  max-width: 70%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  position: relative;
}

/* Свои сообщения (справа) */
.message-from-me {
  margin-left: auto;
  background-color: #dcf8c6;
}

/* Чужие сообщения (слева) */
.message-from-them {
  margin-right: auto;
  background-color: #fff;
}

/* Текст и время сообщения */
.message-text {
  margin: 0;
}
.message-time {
  display: block;
  font-size: 0.7rem;
  color: #666;
  margin-top: 0.25rem;
  text-align: right;
}

/* Поле ввода */
.chat-footer {
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
  background-color: #fff;
  padding: 0.5rem;
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
