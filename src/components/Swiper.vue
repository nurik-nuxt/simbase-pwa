<template>
  <div class="swiper-wrapper">
    <swiper
        class="mySwiper"
        :initial-slide="0"
        :nested="true"
        :touch-move-stop-propagation="true"
        :touch-ratio="0.5"
    >
      <swiper-slide>
        <Widgets />
      </swiper-slide>
      <swiper-slide>
        <MainPage />
      </swiper-slide>
      <swiper-slide>
        <ChatMain />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import '../style.css';
import ChatMain from './ChatMain.vue';
import Widgets from './Widgets.vue';
import MainPage from './MainPage.vue';

</script>

<style scoped>
.swiper-wrapper {
  padding-bottom: env(safe-area-inset-bottom);
  height: 100%;
}
</style>
