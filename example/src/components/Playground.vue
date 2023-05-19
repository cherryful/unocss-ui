<script setup lang="ts">
</script>

<template>
  <div class="rounded-lg bg-white p-3 shadow space-y-3 sm:p-4">
    <div class="flex justify-between">
      <span class="text-primary text-lg font-bold">
        Interactive Playground
      </span>
    </div>
    <div class="space-y-3">
      <div class="min-h-24 flex items-center justify-center border-2 border-dashed p-5">
        <slot name="preview" />
      </div>
      <div class="space-y-5">
        <slot name="props" />
      </div>
    </div>
  </div>
</template>
