<script setup lang="ts">

import AppMiniWidget from "./AppMiniWidget.vue";
import BigWidgets from "./BigWidgets.vue";
</script>

<template>
  <div class="widgets">
    <AppMiniWidget />
    <BigWidgets style="margin-top: 3rem"/>
  </div>
</template>

<style scoped>
.widgets {
  padding: 0 16px;
}
</style>