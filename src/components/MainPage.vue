<template>
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
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton },
  setup() {
    const deferredPrompt = ref<any>(null);
    const isInstallable = ref(false);
    // Реф для хранения данных геолокации
    const location = ref<{latitude: number, longitude: number} | null>(null);

    // Идентификатор наблюдения за геолокацией, чтобы остановить наблюдение при размонтировании компонента.
    let watchId: number | null = null;

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
              // Опциональные настройки для более частого обновления:
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
      location
    };
  }
});
</script>
