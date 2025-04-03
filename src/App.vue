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
<!--    <ion-header>-->
<!--      <ion-toolbar>-->
<!--        <ion-title>Мои экраны со свайпом</ion-title>-->
<!--      </ion-toolbar>-->
<!--    </ion-header>-->
    <HeaderBar />
    <ion-content>
      <Swiper />
    </ion-content>
  </ion-page>
</template>