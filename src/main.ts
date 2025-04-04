import { createApp } from 'vue';
import App from './App.vue';
import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/core.css';

// Основные стили Ionic (опционально):
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

import 'swiper/swiper-bundle.css';

const app = createApp(App);

// Тип для deferredPrompt (BeforeInstallPromptEvent из Web API)
let deferredPrompt: BeforeInstallPromptEvent | null = null;

window.addEventListener('beforeinstallprompt', (e: Event) => {
    console.log('beforeinstallprompt')
    const event = e as BeforeInstallPromptEvent; // Приведение типа
    event.preventDefault();
    deferredPrompt = event;

    showInstallPrompt();
});

function showInstallPrompt() {
    if (deferredPrompt) {
        deferredPrompt.prompt(); // Показываем установочный промпт
        deferredPrompt.userChoice.then((choiceResult: PromptResponseObject) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Пользователь принял установку');
            } else {
                console.log('Пользователь отклонил установку');
            }
            deferredPrompt = null;
        });
    }
}

app.use(IonicVue);
// app.use(router);
app.mount('#app');