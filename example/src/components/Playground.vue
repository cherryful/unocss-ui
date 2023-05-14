<script setup lang="ts">
</script>

<template>
  <div class="bg-white p-3 space-y-3 shadow rounded-lg sm:p-4">
    <div class="flex justify-between">
      <span class="font-bold text-lg text-primary">
        Interactive Playground
      </span>
    </div>
    <div class="space-y-3">
      <div class="flex justify-center items-center border-2 border-dashed p-5 min-h-20">
        <slot name="preview" />
      </div>
      <div class="space-y-5">
        <slot name="props" />
      </div>
    </div>
  </div>
</template>
