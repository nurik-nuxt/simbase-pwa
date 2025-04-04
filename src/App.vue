<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import Swiper from "./components/Swiper.vue";
import HeaderBar from "./components/HeaderBar.vue";

// Интерфейс для события beforeinstallprompt
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string; platform: string }>;
}

// Реф для сохранения события
const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null);

// При монтировании компонента подписываемся на событие beforeinstallprompt
onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    console.log('beforeinstallprompt')
    e.preventDefault();
    deferredPrompt.value = e as BeforeInstallPromptEvent;
  });
});

// Функция для показа диалога установки
const installApp = async () => {
  if (deferredPrompt.value) {
    await deferredPrompt.value.prompt();
    const { outcome } = await deferredPrompt.value.userChoice;
    console.log(`Пользователь выбрал: ${outcome}`);
    deferredPrompt.value = null;
  }
};
</script>

<template>
  <ion-page>
    {{ deferredPrompt }} aaa
    <HeaderBar />
    <ion-content>
      <!-- Кнопка установки отображается, если событие beforeinstallprompt перехвачено -->
      <div style="padding: 16px;">
        <ion-button v-if="deferredPrompt" @click="installApp">
          Установить приложение
        </ion-button>
      </div>
      <Swiper />
    </ion-content>
  </ion-page>
</template>
