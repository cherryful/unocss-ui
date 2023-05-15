<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="lg:ml-2">
    <p class="text-2xl font-bold">
      {{ title }}
    </p>
    <p class="mb-5 mt-3">
      <slot name="description" />
    </p>
    <div class="w-full max-w-7xl space-y-3 sm:space-y-6">
      <slot />
    </div>
  </div>
</template>
