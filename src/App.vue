<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import Swiper from "./components/Swiper.vue";
import HeaderBar from "./components/HeaderBar.vue";
</script>

<template>
  <ion-page>
    <HeaderBar />
    <ion-content :fullscreen="true">
      <Swiper />
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content {
  --padding-bottom: env(safe-area-inset-bottom, 0px);
  --offset-bottom: env(safe-area-inset-bottom, 0px);
}

/* Добавляем отступ для Swiper */
swiper {
  padding-bottom: env(safe-area-inset-bottom, 0px);
  box-sizing: border-box;
}
</style>
