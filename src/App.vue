<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import Swiper from "./components/Swiper.vue";
import HeaderBar from "./components/HeaderBar.vue";

// Функция, вызываемая при pull-to-refresh
function doRefresh(event: CustomEvent) {
  // Приводим event.target к типу HTMLIonRefresherElement
  const refresher = event.target as HTMLIonRefresherElement;

  setTimeout(() => {
    refresher.complete();
  }, 1500);
}
</script>

<template>
  <ion-page>
    <HeaderBar />
    <ion-content :fullscreen="true">
      <!-- Компонент pull-to-refresh -->
      <ion-refresher slot="fixed" @ionRefresh="doRefresh">
        <ion-refresher-content
            pullingIcon="arrow-dropdown"
            refreshingSpinner="crescent"
        />
      </ion-refresher>
      <Swiper/>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-content {
  --padding-bottom: env(safe-area-inset-bottom, 0px);
  --offset-bottom: env(safe-area-inset-bottom, 0px);
}
swiper {
  padding-bottom: env(safe-area-inset-bottom, 0px);
  box-sizing: border-box;
}
</style>
