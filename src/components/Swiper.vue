<template>
  <div class="swiper-wrapper">
    <swiper
        class="mySwiper"
        :initial-slide="initialSlide"
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

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import '../style.css';
import ChatView from "./ChatView.vue";
import ChatMain from "./ChatMain.vue";
import Widgets from "./Widgets.vue";
import MainPage from "./MainPage.vue";

export default {
  props: {
    // Пропс для начального слайда
    initialSlide: {
      type: Number,
      default: 1,
    },
  },
  components: {
    MainPage,
    Widgets,
    ChatMain,
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    return {
      // Передаем пропс в шаблон
      initialSlide: props.initialSlide,
    };
  },
};
</script>

<style scoped>
.swiper-wrapper {
  padding-bottom: env(safe-area-inset-bottom);
  height: 100%;
}
</style>
