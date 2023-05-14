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
    <p class="mt-3 mb-5">
      <slot name="description" />
    </p>
    <div class="w-full space-y-3 max-w-7xl sm:space-y-6">
      <slot />
    </div>
  </div>
</template>
