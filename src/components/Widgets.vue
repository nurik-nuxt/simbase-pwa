<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppMiniWidget from "./AppMiniWidget.vue";
import BigWidgets from "./BigWidgets.vue";

const safeAreaBottom = ref<string>('0px');
const safeAreaTop = ref<string>('0px');

onMounted(() => {
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  safeAreaBottom.value = computedStyle.getPropertyValue('safe-area-inset-bottom').trim() || '0px';
  safeAreaTop.value = computedStyle.getPropertyValue('safe-area-inset-top').trim() || '0px';
});
</script>

<template>
  <div class="widgets">
    <p>Safe Area Bottom: {{ safeAreaBottom }}</p>
    <p>Safe Area Top: {{ safeAreaTop }}</p>
    <AppMiniWidget />
    <BigWidgets style="margin-top: 3rem; padding-bottom: calc(env(safe-area-inset-bottom, 0px) + env(safe-area-inset-top, 0px))" />
  </div>
</template>

<style scoped>
:root {
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
}
.widgets {
  padding: 0 16px;
}
</style>