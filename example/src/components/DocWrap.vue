<script setup lang="ts">
import { useRoute } from 'vue-router'
import AutoDoc from './AutoDoc.vue'

defineProps<{
  title?: string
}>()

const route = useRoute()
</script>

<template>
  <div class="lg:ml-2">
    <p class="text-2xl font-bold">
      {{ title || `${String(route.name)} Demo` }}
    </p>
    <p class="mb-5 mt-3">
      <slot name="description" />
    </p>
    <div class="max-w-7xl w-full space-y-3 sm:space-y-6">
      <slot />
    </div>

    <div class="mt-10 max-w-7xl">
      <AutoDoc :components="`U${String(route.name)}`" />
    </div>
  </div>
</template>
