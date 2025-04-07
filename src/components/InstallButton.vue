<!-- components/InstallButton.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const deferredPrompt = ref<any>(null)
const isInstallable = ref(false)

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt.value = e
    isInstallable.value = true
  })

  window.addEventListener('appinstalled', () => {
    isInstallable.value = false
  })
})

const installApp = async () => {
  if (!deferredPrompt.value) return

  deferredPrompt.value.prompt()
  const { outcome } = await deferredPrompt.value.userChoice

  if (outcome === 'accepted') {
    deferredPrompt.value = null
    isInstallable.value = false
  }
}
</script>

<template>
  <ion-button
      @click="installApp"
      expand="block"
  >
    Установить приложение
  </ion-button>
</template>