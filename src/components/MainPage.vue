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
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';
import { defineComponent, ref, onMounted } from 'vue';
import InstallButton from './InstallButton.vue';
export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton },
  setup() {
    const deferredPrompt = ref<any>(null)
    const isInstallable = ref(false)

    onMounted(() => {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault()
        deferredPrompt.value = e
        isInstallable.value = true
      })

      window.addEventListener('appinstalled', () => {
        isInstallable.value = false
      })
    })

    const installApp = async () => {
      if (!deferredPrompt.value) return

      deferredPrompt.value.prompt()
      const { outcome } = await deferredPrompt.value.userChoice

      if (outcome === 'accepted') {
        deferredPrompt.value = null
        isInstallable.value = false
      }
    }

    return {
      isInstallable,
      installApp
    }
  }
});
</script>