<script setup>
import { ref } from 'vue'

const xxx = ref(null)

window.showAlert = function (msg) {
  xxx.value.info(msg)
}
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>
