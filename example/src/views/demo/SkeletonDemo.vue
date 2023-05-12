<script setup lang="ts">
function onClick() {
  alert(1)
}
</script>

<template>
  <USkeleton />
  <div class="flex">
    <USkeleton class="w-full bg-primary-300" />
    <USkeleton class="w-full bg-secondary-300" />
    <USkeleton class="w-full bg-accent-300" />
  </div>
  <div class="flex gap-5">
    <USkeleton as="button" class="h-16 w-16 rounded-full" @click="onClick" />
    <USkeleton class="h-16 w-16 rounded-full bg-success-300" />
    <USkeleton class="h-16 w-16 rounded-full bg-info-300" />
    <USkeleton class="h-16 w-16 rounded-full bg-warning-300" />
    <USkeleton class="h-16 w-16 rounded-full bg-error-300" />
  </div>
</template>
