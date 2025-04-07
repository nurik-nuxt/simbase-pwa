<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue'
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
