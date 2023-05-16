<script setup>
import { ref } from 'vue'

const value = ref('')

function onEnter() {
  console.log(value.value)
}
</script>

<template>
  <div class="w-72">
    <UInput v-model="value" placeholder="Custom placeholder" label="placeholder" />
    <UInput v-model="value" label="required" required />
    <UInput v-model="value">
      Template:
    </UInput>
  </div>
  <div class="w-72 space-y-3">
    <UInput
      v-model="value"
      label="pre-icon & suff-icon"
      pre-icon="i-mdi:lightning-bolt"
      suff-icon="i-mdi:apple"
    />
    <UInput v-model="value" label="#prepend & #append">
      <template #prepend>
        https://
      </template>
      <template #append>
        .com
      </template>
    </UInput>
    <UInput v-model="value" error-message="oh!!!!" label="error-message" />
  </div>
  <div class="w-72">
    <UInput v-model="value" @keyup.enter="onEnter" />
  </div>
</template>
