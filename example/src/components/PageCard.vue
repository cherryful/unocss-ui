<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <p class="text-2xl font-bold">
    {{ title }}
  </p>
  <p class="mb-5 mt-3">
    <slot name="description" />
  </p>
  <div class="max-w-7xl w-full rounded bg-white p-6 shadow space-y-3 sm:space-y-6">
    <slot />
  </div>
</template>
