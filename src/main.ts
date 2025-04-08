import { createApp } from 'vue';
import App from './App.vue';
import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/core.css';

import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

import 'swiper/swiper-bundle.css';

const app = createApp(App);

app.use(IonicVue);

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: './'
      });
      
      // Проверяем наличие обновлений при загрузке
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Есть обновление
              if (confirm('Доступно обновление приложения. Обновить сейчас?')) {
                window.location.reload();
              }
            }
          });
        }
      });

      // Запрашиваем разрешение на push-уведомления
      if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          console.log('Push notifications enabled');
        }
      }
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  });
}

app.mount('#app');