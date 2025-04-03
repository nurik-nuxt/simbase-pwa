<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSlides,
  IonSlide
} from '@ionic/vue'
import { ref } from "vue";

const slideOptions = ref({
  initialSlide: 1,
  speed: 500,
})
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Мои экраны со свайпом</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ionic-slides :options="slideOptions">
        <!-- Левый экран -->
        <ion-slide>
          <h2>Левый экран (виджеты)</h2>
          <!-- Ваш контент -->
        </ion-slide>

        <!-- Главный экран -->
        <ion-slide>
          <h2>Главный экран (центральный)</h2>
          <!-- Ваш контент -->
        </ion-slide>

        <!-- Правый экран -->
        <ion-slide>
          <h2>Правый экран (чат)</h2>
          <!-- Ваш контент -->
        </ion-slide>
      </ionic-slides>
    </ion-content>
  </ion-page>
</template>