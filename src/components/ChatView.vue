<template>
  <div class="chat-view" ref="chatView">
    <div class="header">
      <img :src="avatar" alt="Avatar" class="avatar" />
      <span class="name">{{ name }}</span>
    </div>

    <div class="messages" ref="messagesContainer" @scroll="handleScroll">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="message"
        :class="{ incoming: msg.sender === 'them', outgoing: msg.sender === 'me' }"
      >
        <div class="bubble">{{ msg.text }}</div>
      </div>
    </div>

    <div class="input-area" :class="{ 'keyboard-visible': isInputFocused }">
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
        <button type="submit" class="send-button" :disabled="!messageText.trim()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="currentColor"/>
          </svg>
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
  { text: 'Привет!', sender: 'them' },
  { text: 'Как дела?', sender: 'them' },
  { text: 'Всё отлично, а у тебя?', sender: 'me' },
  { text: 'Привет!', sender: 'them' },
  { text: 'Как дела?', sender: 'them' },
  { text: 'Всё отлично, а у тебя?', sender: 'me' },
  { text: 'Привет!', sender: 'them' },
  { text: 'Как дела?', sender: 'them' },
  { text: 'Всё отлично, а у тебя?', sender: 'me' },
  { text: 'Привет!', sender: 'them' },
  { text: 'Как дела?', sender: 'them' },
  { text: 'Всё отлично, а у тебя?', sender: 'me' },
  { text: 'Привет!', sender: 'them' },
  { text: 'Как дела?', sender: 'them' },
  { text: 'Всё отлично, а у тебя?', sender: 'me' },
  { text: 'Привет!', sender: 'them' },
  { text: 'Как дела?', sender: 'them' },
  { text: 'Всё отлично, а у тебя?', sender: 'me' },
  { text: 'Привет!', sender: 'them' },
  { text: 'Как дела?', sender: 'them' },
  { text: 'Всё отлично, а у тебя?', sender: 'me' },
]);

const messageText = ref('');
const messagesContainer = ref(null);
const chatView = ref(null);
const inputField = ref(null);
const isInputFocused = ref(false);
const lastScrollPosition = ref(0);
const isAndroid = !CSS.supports('-webkit-touch-callout', 'none');

function handleScroll(event) {
  lastScrollPosition.value = event.target.scrollTop;
}

function scrollToBottom(force = false) {
  if (!messagesContainer.value) return;
  
  const container = messagesContainer.value;
  const scrollHeight = container.scrollHeight;
  const maxScroll = scrollHeight - container.clientHeight;
  
  requestAnimationFrame(() => {
    if (force || container.scrollTop >= maxScroll - 100) {
      container.scrollTo({
        top: maxScroll,
        behavior: force ? 'auto' : 'smooth'
      });
      
      // Дополнительная проверка прокрутки
      if (isAndroid) {
        setTimeout(() => {
          if (container.scrollTop < maxScroll) {
            container.scrollTop = maxScroll;
          }
        }, 50);
      }
    }
  });
}

function restoreScroll() {
  if (messagesContainer.value && lastScrollPosition.value) {
    messagesContainer.value.scrollTop = lastScrollPosition.value;
  }
}

const onFocus = () => {
  isInputFocused.value = true;
  
  // Сохраняем текущую позицию скролла
  if (messagesContainer.value) {
    lastScrollPosition.value = messagesContainer.value.scrollTop;
  }
  
  // Разная обработка для Android и iOS
  if (isAndroid) {
    // На Android даем больше времени для появления клавиатуры
    setTimeout(() => {
      if (messagesContainer.value) {
        // Восстанавливаем позицию скролла
        messagesContainer.value.scrollTop = lastScrollPosition.value;
        // Если были внизу, прокручиваем к последнему сообщению
        const container = messagesContainer.value;
        const maxScroll = container.scrollHeight - container.clientHeight;
        if (lastScrollPosition.value >= maxScroll - 100) {
          scrollToBottom(true);
        }
      }
    }, 300);
  } else {
    // На iOS прокручиваем сразу
    requestAnimationFrame(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = lastScrollPosition.value;
      }
    });
  }
};

const onBlur = () => {
  isInputFocused.value = false;
  
  if (isAndroid) {
    // На Android восстанавливаем скролл после закрытия клавиатуры
    setTimeout(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = lastScrollPosition.value;
      }
    }, 100);
  }
};

function sendMessage() {
  if (messageText.value.trim() !== '') {
    messages.value.push({ text: messageText.value, sender: 'me' });
    messageText.value = '';
    scrollToBottom(true);
  }
}

onMounted(() => {
  scrollToBottom(true);
  
  // Отключаем скролл документа
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  
  // Обработка изменения размера viewport на Android
  if (isAndroid) {
    window.visualViewport?.addEventListener('resize', () => {
      if (isInputFocused.value) {
        requestAnimationFrame(() => {
          if (messagesContainer.value) {
            messagesContainer.value.scrollTop = lastScrollPosition.value;
          }
        });
      }
    });
  }
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
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
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  width: 100%;
}
</style>

<style scoped>
.chat-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: white;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}

.header {
  position: fixed;
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
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 56px;
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
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  border-top: 1px solid #e0e0e0;
  padding: 8px 16px;
  z-index: 10;
  min-height: 56px;
}

.keyboard-visible {
  transform: translate3d(0, 0, 0);
  will-change: transform;
}

.input-form {
  display: flex;
  gap: 8px;
  align-items: center;
  background: white;
  border-radius: 22px;
  padding: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.message-input {
  flex: 1;
  --padding-start: 10px;
  --padding-end: 10px;
  --padding-top: 8px;
  --padding-bottom: 8px;
  --background: transparent;
  --border-radius: 0;
  --border-width: 0;
  --placeholder-color: #8e8e93;
  font-size: 16px;
  margin: 0;
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
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 15px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.send-button:active {
  opacity: 0.8;
}

/* Стили для Android */
@supports not (-webkit-touch-callout: none) {
  .chat-view {
    height: 100vh;
  }
  
  .messages {
    height: calc(100vh - 112px);
  }
  
  .input-area.keyboard-visible {
    position: sticky;
  }
}

/* Стили для iOS */
@supports (-webkit-touch-callout: none) {
  .chat-view {
    height: -webkit-fill-available;
  }
  
  .messages {
    height: calc(100% - 112px);
  }
  
  .input-area {
    padding-bottom: calc(8px + env(safe-area-inset-bottom));
  }
}

/* Общие медиа-запросы для мобильных устройств */
@media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    .messages {
      bottom: calc(56px + env(safe-area-inset-bottom));
    }
    
    .input-area {
      min-height: calc(56px + env(safe-area-inset-bottom));
    }
  }
  
  @supports not (-webkit-touch-callout: none) {
    .messages {
      bottom: 56px;
    }
    
    .input-area.keyboard-visible {
      position: fixed;
    }
  }
}
</style>