<template>
  <div class="chat-view">
    <div class="header">
      <img :src="avatar" alt="Avatar" class="avatar" />
      <span class="name">{{ name }}</span>
    </div>

    <div class="messages" ref="messagesContainer">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="message"
        :class="{ incoming: msg.sender === 'them', outgoing: msg.sender === 'me' }"
      >
        <div class="bubble">{{ msg.text }}</div>
      </div>
    </div>

    <div class="input-area">
      <form @submit.prevent="sendMessage" class="input-form">
        <ion-input
          ref="inputField"
          v-model="messageText"
          placeholder="Напишите сообщение..."
          class="message-input"
          :class="{ 'input-focused': isInputFocused }"
          @ionFocus="onFocus"
          @ionBlur="onBlur"
        />
        <button type="submit" class="send-button">
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  name: { type: String, default: 'Собеседник' },
  avatar: { type: String, default: 'https://via.placeholder.com/40' },
});

const messages = ref([
  { text: 'Привет!', sender: 'them' },
  { text: 'Как дела?', sender: 'them' },
  { text: 'Всё отлично, а у тебя?', sender: 'me' },
]);

const messageText = ref('');
const messagesContainer = ref(null);
const inputField = ref(null);
const isInputFocused = ref(false);

function scrollToBottom() {
  if (messagesContainer.value) {
    const container = messagesContainer.value;
    const scrollHeight = container.scrollHeight;
    const maxScroll = scrollHeight - container.clientHeight;
    
    // Плавно прокручиваем к последнему сообщению
    container.scrollTo({
      top: maxScroll,
      behavior: 'smooth'
    });
  }
}

function sendMessage() {
  if (messageText.value.trim() !== '') {
    messages.value.push({ text: messageText.value, sender: 'me' });
    messageText.value = '';
    setTimeout(scrollToBottom, 10);
  }
}

const onFocus = () => {
  isInputFocused.value = true;
  // Даем время клавиатуре появиться и затем прокручиваем контент
  setTimeout(() => {
    // Сначала прокручиваем к последнему сообщению
    scrollToBottom();
    // Затем фиксируем позицию экрана
    if (window.visualViewport) {
      window.scrollTo(0, 0);
      document.body.style.height = `${window.visualViewport.height}px`;
    }
    // Еще раз прокручиваем к последнему сообщению для надежности
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, 100);
};

const onBlur = () => {
  isInputFocused.value = false;
  document.body.style.height = '';
  // После скрытия клавиатуры снова прокручиваем к последнему сообщению
  setTimeout(() => {
    scrollToBottom();
  }, 100);
};

onMounted(() => {
  scrollToBottom();
  
  // Prevent bounce effect
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) return;
    e.preventDefault();
  }, { passive: false });
});

onBeforeUnmount(() => {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
});
</script>

<style>
html, body {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overscroll-behavior-y: none;
  -webkit-overflow-scrolling: none;
}
</style>

<style scoped>
.chat-view {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: white;
  height: 100%;
  overflow: hidden;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: #f6f6f6;
  border-bottom: 1px solid #ccc;
  z-index: 10;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.name {
  font-weight: bold;
}

.messages {
  position: absolute;
  top: 56px; /* header height */
  left: 0;
  right: 0;
  bottom: 56px; /* input-area height */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: #e5e5ea;
  padding: 10px;
  z-index: 1;
}

.message {
  display: flex;
  margin: 0.25rem 0;
}

.message.incoming {
  justify-content: flex-start;
}

.message.outgoing {
  justify-content: flex-end;
}

.bubble {
  max-width: 70%;
  padding: 0.5rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.95rem;
  line-height: 1.4;
  word-wrap: break-word;
}

.message.incoming .bubble {
  background: #fff;
  color: #000;
  border-top-left-radius: 0.3rem;
}

.message.outgoing .bubble {
  background: #0088cc;
  color: #fff;
  border-top-right-radius: 0.3rem;
}

.input-area {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  border-top: 1px solid #ccc;
  padding: 0.5rem;
  z-index: 10;
}

.input-form {
  display: flex;
  gap: 8px;
}

.message-input {
  flex: 1;
  --padding-start: 12px;
  --padding-end: 12px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  --background: #fff;
  --border-radius: 0.5rem;
  --border-width: 1px;
  --border-color: #ccc;
  text-align: left;
}

ion-input {
  text-align: left !important;
  --text-align: left !important;
}

.message-input::part(input) {
  text-align: left !important;
  margin: 0;
  padding: 0;
}

.input-focused {
  --padding-bottom: env(safe-area-inset-bottom);
}

.send-button {
  background: #0088cc;
  border: none;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  white-space: nowrap;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.send-button:active {
  opacity: 0.8;
}

@supports (-webkit-touch-callout: none) {
  .chat-view {
    height: -webkit-fill-available;
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>