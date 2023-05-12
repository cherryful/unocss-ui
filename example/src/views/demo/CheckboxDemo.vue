<script setup>
import { ref } from 'vue'

const checked = ref(true)
</script>

<template>
  <div class="space-y-4">
    UCheckbox Demo:
    <div class="flex space-x-3">
      <UCheckbox v-model="checked" type="primary" />
      <UCheckbox v-model="checked" type="secondary" />
      <UCheckbox v-model="checked" type="accent" />
      <UCheckbox v-model="checked" type="success" />
      <UCheckbox v-model="checked" type="warning" />
      <UCheckbox v-model="checked" type="error" />
      <UCheckbox v-model="checked" type="info" />
      <UCheckbox disabled checked />
    </div>
    <div class="flex space-x-3">
      <UCheckbox v-model="checked">
        Enabled
      </UCheckbox>
      <UCheckbox checked disabled /> Disabled
    </div>
  </div>
</template>
