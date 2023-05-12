<script setup lang="ts">
</script>

<template>
  <div class="space-y-4">
    Button Demo:
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        size:
      </span>
      <UButton size="sm">
        button
      </UButton>
      <UButton>
        button
      </UButton>
      <UButton size="lg">
        button
      </UButton>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        type:
      </span>
      <UButton type="default">
        default
      </UButton>
      <UButton type="primary">
        primary
      </UButton>
      <UButton type="secondary">
        secondary
      </UButton>
      <UButton type="accent">
        accent
      </UButton>
      <UButton type="success">
        success
      </UButton>
      <UButton type="info">
        info
      </UButton>
      <UButton type="warning">
        warning
      </UButton>
      <UButton type="error">
        error
      </UButton>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        disabled:
      </span>
      <UButton disabled>
        disabled
      </UButton>
    </div>
    <div class="flex items-center space-x-3">
      <span class="inline-block w-20">
        icon:
      </span>
      <UButton>
        <div class="flex items-center justify-center">
          <span class="i-mdi:lightning-bolt text-4" />
          <span> Lightning </span>
        </div>
      </UButton>
      <UButton text>
        text
      </UButton>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        custom:
      </span>
      <UButton custom="bg-pink-500 text-white hover:bg-pink-700 focus:ring-pink-500 p-2">
        Pink Button
      </UButton>
      <UButton custom="bg-orange-500 text-white hover:bg-orange-700 focus:ring-orange-500 border-rounded p-3">
        Orange Huge Button
      </UButton>
    </div>
  </div>
</template>
