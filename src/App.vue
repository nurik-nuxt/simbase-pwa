<script setup lang="ts">
import {
  IonPage,
  IonContent,
} from '@ionic/vue'
import Swiper from "./components/Swiper.vue";
import HeaderBar from "./components/HeaderBar.vue";


</script>

<template>
  <ion-page>
    <HeaderBar />
    <ion-content>
      <Swiper />
    </ion-content>
  </ion-page>
</template>