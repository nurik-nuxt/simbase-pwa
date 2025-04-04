import { createApp } from 'vue';
import App from './App.vue';
import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/core.css';

import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

import 'swiper/swiper-bundle.css';

const app = createApp(App);

// Типы для BeforeInstallPromptEvent (для Android)
let deferredPrompt: BeforeInstallPromptEvent | null = null;

// Проверка iOS и режима standalone
const isIOS = (): boolean => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
};

const isInStandaloneMode = (): boolean => {
    return 'standalone' in window.navigator && (window.navigator as any).standalone;
};

// Для Android
window.addEventListener('beforeinstallprompt', (e: Event) => {
    const event = e as BeforeInstallPromptEvent;
    event.preventDefault();
    deferredPrompt = event;
    showInstallPrompt();
});

function showInstallPrompt() {
    if (deferredPrompt) {
        // Android: показываем нативный промпт
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult: PromptResponseObject) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Пользователь принял установку (Android)');
            } else {
                console.log('Пользователь отклонил установку (Android)');
            }
            deferredPrompt = null;
        });
    }
}

// Для iOS: показываем кастомный промпт через глобальное свойство
function checkAndShowIOSPrompt() {
    if (isIOS() && !isInStandaloneMode()) {
        // Устанавливаем флаг для отображения промпта в компоненте
        app.config.globalProperties.$showIOSPrompt = true;
    }
}

// Вызываем проверку для iOS при запуске
checkAndShowIOSPrompt();

app.use(IonicVue);
app.mount('#app');