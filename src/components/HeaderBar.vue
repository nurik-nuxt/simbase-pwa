<script setup lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/vue'
import { ellipsisVertical } from 'ionicons/icons'
</script>

<template>
  <ion-header>
    <ion-toolbar style="--ion-title-text-align: start;">
      <ion-title>Simbase</ion-title>
      <ion-buttons slot="start">
        <ion-button>
          <img
              src="../assets/vite.svg"
              alt="Логотип"
              style="height: 24px; vertical-align: middle;"
          />
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button>
          <ion-icon :icon="ellipsisVertical" />
        </ion-button>
      </ion-buttons>
    </ion-toolbar>

  </ion-header>
</template>

<style scoped>
</style>
