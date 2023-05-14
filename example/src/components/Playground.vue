<script setup lang="ts">
</script>

<template>
  <div class="bg-white rounded-lg p-3 space-y-3 shadow sm:p-4">
    <div class="flex justify-between">
      <span class="text-lg font-bold text-primary">
        Interactive Playground
      </span>
    </div>
    <div class="space-y-3">
      <div class="p-5 border-2 border-dashed flex justify-center items-center min-h-20">
        <slot name="preview" />
      </div>
      <div class="space-y-5">
        <slot name="props" />
      </div>
    </div>
  </div>
</template>
