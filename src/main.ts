import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import { IonicVue } from '@ionic/vue'
import '@ionic/vue/css/core.css'

// Основные стили Ionic (опционально):
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

const app = createApp(App)
app.use(IonicVue)
// app.use(router)
app.mount('#app')
