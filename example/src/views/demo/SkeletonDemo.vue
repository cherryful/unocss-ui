<script setup lang="ts">
function onClick() {
  alert(1)
}
</script>

<template>
  <USkeleton />
  <div class="flex">
    <USkeleton class="bg-primary-300 w-full" />
    <USkeleton class="bg-secondary-300 w-full" />
    <USkeleton class="bg-accent-300 w-full" />
  </div>
  <div class="flex gap-5">
    <USkeleton as="button" class="h-16 w-16 rounded-full" @click="onClick" />
    <USkeleton class="bg-success-300 h-16 w-16 rounded-full" />
    <USkeleton class="bg-info-300 h-16 w-16 rounded-full" />
    <USkeleton class="bg-warning-300 h-16 w-16 rounded-full" />
    <USkeleton class="bg-error-300 h-16 w-16 rounded-full" />
  </div>
</template>
