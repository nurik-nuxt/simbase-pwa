<template>
  <div class="main-page">
    <ion-card>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <ion-card-header>
        <ion-card-title>Главная страница</ion-card-title>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        Here's a small text description for the card content. Nothing more, nothing less.
      </ion-card-content>
    </ion-card>

    <div>
      <ion-button
          v-if="isInstallable"
          expand="block"
          @click="installApp"
      >Установить приложение
      </ion-button>
    </div>

    <!-- Блок для отображения геолокации -->
    <div>
      <h3>Ваше местоположение:</h3>
      <p v-if="location">
        Latitude: {{ location.latitude }}, Longitude: {{ location.longitude }}
      </p>
      <p v-else>Местоположение недоступно или не поддерживается.</p>
    </div>

    <!-- Блок для отображения информации о батарее -->
    <div>
      <h3>Информация о батарее:</h3>
      <p v-if="isSupported">
        Уровень заряда: {{ Math.round(level * 100) }}%,
        {{ charging ? 'Заряжается' : 'Не заряжается' }}
      </p>
      <p v-else>Информация о батарее недоступна.</p>
    </div>

    <!-- Блок для отображения статуса подключения -->
    <div>
      <h3>Статус подключения к интернету:</h3>
      <p>{{ online ? 'Онлайн' : 'Оффлайн' }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { useBattery, useOnline } from '@vueuse/core';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton },
  setup() {
    const deferredPrompt = ref<any>(null);
    const isInstallable = ref(false);
    const location = ref<{ latitude: number, longitude: number } | null>(null);
    let watchId: number | null = null;

    // Получаем информацию о батарее через useBattery
    const { level, charging, isSupported } = useBattery();

    // Получаем статус подключения к сети
    const online = useOnline();

    onMounted(() => {
      // Обработка события для установки приложения
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt.value = e;
        isInstallable.value = true;
      });
      window.addEventListener('appinstalled', () => {
        isInstallable.value = false;
      });

      // Запрос геолокации с отслеживанием изменений
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(
            (position) => {
              location.value = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              };
            },
            (error) => {
              console.error('Ошибка определения местоположения:', error);
              location.value = null;
            },
            {
              enableHighAccuracy: true,
              maximumAge: 0,
              timeout: 5000
            }
        );
      } else {
        console.error('Геолокация не поддерживается браузером');
        location.value = null;
      }
    });

    // Очистка наблюдения за геолокацией при размонтировании компонента
    onUnmounted(() => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    });

    const installApp = async () => {
      if (!deferredPrompt.value) return;
      deferredPrompt.value.prompt();
      const { outcome } = await deferredPrompt.value.userChoice;
      if (outcome === 'accepted') {
        deferredPrompt.value = null;
        isInstallable.value = false;
      }
    };

    return {
      isInstallable,
      installApp,
      location,
      level,
      charging,
      isSupported,
      online
    };
  }
});
</script>

<style scoped>
.main-page {
  height: 500px;
  overflow-y: auto;
  touch-action: pan-y;
}
</style>