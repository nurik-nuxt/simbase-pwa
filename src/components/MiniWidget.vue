<script setup lang="ts">
const props = defineProps<{
  value: number | string;
  footerValue?: string | number;
}>()
</script>

<template>
  <div class="mini-widget">
    <div class="mini-widget-value">{{ props.value }}</div>
    <div v-if="props.footerValue" class="mini-widget-footer">{{ props.footerValue }}</div>
  </div>
</template>

<style scoped>
.mini-widget {
  background: #6E7077;
  padding: 6px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 30px;
  flex-shrink: 0;
}

.mini-widget-footer {
  font-size: 0.8rem;
}
</style>