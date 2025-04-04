<template>
  <swiper class="mySwiper" :initial-slide="1">
    <swiper-slide>Виджеты</swiper-slide>
    <swiper-slide>Главная экран</swiper-slide>
    <swiper-slide>
      <ChatMain />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import '../style.css';
import ChatView from "./ChatView.vue";
import ChatMain from "./ChatMain.vue";

export default {
  components: {
    ChatMain,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
};
</script>
