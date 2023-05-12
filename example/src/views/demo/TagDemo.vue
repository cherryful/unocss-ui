<script setup lang="ts">
function onClose() {
  alert('close')
}
</script>

<template>
  <div class="space-y-4">
    UTag Demo:
    <div class="space-x-3">
      <span class="inline-block w-20">
        size:
      </span>
      <UTag size="sm">
        sm
      </UTag>
      <UTag>
        base
      </UTag>
      <UTag size="lg">
        lg
      </UTag>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        type:
      </span>
      <UTag type="default">
        default
      </UTag>
      <UTag type="success">
        success
      </UTag>
      <UTag type="info">
        info
      </UTag>
      <UTag type="warning">
        warning
      </UTag>
      <UTag type="error">
        error
      </UTag>
      <UTag type="primary">
        primary
      </UTag>
      <UTag type="secondary">
        primary
      </UTag>
      <UTag type="accent">
        primary
      </UTag>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        rounded:
      </span>
      <UTag rounded="sm">
        sm
      </UTag>
      <UTag rounded="base">
        base
      </UTag>
      <UTag rounded="lg">
        lg
      </UTag>
      <UTag>
        full
      </UTag>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        border:
      </span>
      <UTag>
        no-border
      </UTag>
      <UTag :border="true">
        border
      </UTag>
    </div>
    <div class="flex items-center space-x-3">
      <span class="inline-block w-20">
        icon:
      </span>
      <UTag>
        <div class="flex items-center justify-center">
          <span class="i-mdi:lightning-bolt text-4" />
          <span> Lightning </span>
        </div>
      </UTag>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        other:
      </span>
      <UTag custom="bg-pink-200 text-pink-600 px-4 py-2 border-2 border-pink-600 rounded-xl">
        custom
      </UTag>
      <UTag closeable @close="onClose">
        closeable
      </UTag>
    </div>
  </div>
</template>
