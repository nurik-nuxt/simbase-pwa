<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import Swiper from "./components/Swiper.vue";
import HeaderBar from "./components/HeaderBar.vue";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string; platform: string }>;
}

const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null);

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    e.preventDefault();
    console.log('Событие beforeinstallprompt сработало:', e);
    deferredPrompt.value = e as BeforeInstallPromptEvent;
  });
});

const installApp = async () => {
  if (deferredPrompt.value) {
    await deferredPrompt.value.prompt();
    const { outcome } = await deferredPrompt.value.userChoice;
    console.log(`Пользователь выбрал: ${outcome}`);
    deferredPrompt.value = null;
  } else {
    // Если событие не перехвачено, можно показать сообщение или инструкции
    alert('Установка недоступна. Чтобы установить приложение, воспользуйтесь меню браузера.');
  }
};
</script>

<template>
  <ion-page>
    <HeaderBar />
    <ion-content :fullscreen="true">
      <!-- Кнопка установки всегда видна -->
<!--      <div style="padding: 16px;">-->
<!--        <ion-button @click="installApp">-->
<!--          Установить приложение-->
<!--        </ion-button>-->
<!--      </div>-->
      <Swiper />
    </ion-content>
  </ion-page>
</template>
