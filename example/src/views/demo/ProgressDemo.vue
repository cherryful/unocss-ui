<script setup lang="ts">
import { ref } from 'vue'

const percentage = ref(0)
setInterval(() => {
  percentage.value !== 100
    ? percentage.value += 1
    : percentage.value = 0
}, 1000)
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-6">
      Color:
      <div class="w-32">
        <UProgress color="primary" :percentage="percentage" />
      </div>
      <div class="w-32">
        <UProgress color="secondary" :percentage="percentage" />
      </div>
      <div class="w-32">
        <UProgress color="accent" :percentage="percentage" />
      </div>
      <div class="w-32">
        <UProgress color="success" :percentage="percentage" />
      </div>
      <div class="w-32">
        <UProgress color="info" :percentage="percentage" />
      </div>
      <div class="w-32">
        <UProgress color="warning" :percentage="percentage" />
      </div>
      <div class="w-32">
        <UProgress color="error" :percentage="percentage" />
      </div>
    </div>
    <div class="flex items-center gap-5">
      Variant:
      <div class="w-14">
        <UProgress :percentage="percentage" variant="circle" />
      </div>
      <div class="w-32">
        <UProgress :percentage="percentage" variant="score" />
      </div>
    </div>
  </div>
</template>
