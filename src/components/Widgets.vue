<template>
  <div class="widgets">
    <!-- Передаём полученную ссылку mainSwiper дальше в AppMiniWidget -->
    <AppMiniWidget :main-swiper="props.mainSwiper" />
    <BigWidgets />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps<{ mainSwiper: any }>();
import AppMiniWidget from "./AppMiniWidget.vue";
import BigWidgets from "./BigWidgets.vue";
</script>

<style scoped>
.widgets {
  padding: 0 16px;
}
</style>
