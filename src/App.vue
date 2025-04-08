<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonRefresher, IonRefresherContent } from '@ionic/vue';
import Swiper from "./components/Swiper.vue";
import HeaderBar from "./components/HeaderBar.vue";


// Переменная для хранения текущего слайда
const currentSlide = ref(1);

// Функция, вызываемая при pull-to-refresh
function doRefresh(event: CustomEvent) {

  // Здесь можно разместить логику обновления данных (например, запрос к серверу)
  setTimeout(() => {
    event?.target?.complete();
  }, 1500);
}

// Обработчик события смены слайда, который должен эмиттиться из Swiper
function updateCurrentSlide(newIndex: number) {
  currentSlide.value = newIndex;
  console.log('Текущий слайд:', newIndex);
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
            pullingText="Потяните для обновления"
            refreshingSpinner="crescent"
        />
      </ion-refresher>
      <!-- Передаем текущий слайд в качестве начального и используем динамический key -->
      <Swiper
          :initial-slide="currentSlide"
          @slideChange="updateCurrentSlide"
      />
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
