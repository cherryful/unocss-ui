<script setup>
import { ref } from 'vue'

const numberCurrent = ref(0)
const stringCurrent = ref('vue')
</script>

<template>
  <UTabs
    v-model="numberCurrent"
    class="my-1 border rounded-lg bg-white"
  >
    <UTabPane title="Vue" icon="i-mdi:vuejs">
      <div>modelValue: {{ numberCurrent }}</div>
    </UTabPane>
    <UTabPane title="React" icon="i-mdi:react">
      <div>modelValue: {{ numberCurrent }}</div>
    </UTabPane>
  </UTabs>
  <UTabs
    v-model="numberCurrent"
    type="flex"
    class="my-1 border rounded-lg bg-white"
  >
    <UTabPane title="Vue" icon="i-mdi:vuejs">
      <div>modelValue: {{ numberCurrent }}</div>
    </UTabPane>
    <UTabPane title="React" icon="i-mdi:react">
      <div>modelValue: {{ numberCurrent }}</div>
    </UTabPane>
  </UTabs>
  <UTabs v-model="stringCurrent">
    <template #prefix>
      Prefix
    </template>
    <template #suffix>
      Suffix
    </template>
    <UTabPane title="Vue" value="vue" icon="i-mdi:vuejs">
      <div>modelValue: {{ stringCurrent }}</div>
    </UTabPane>
    <UTabPane title="React" value="react" icon="i-mdi:react">
      <div>modelValue: {{ stringCurrent }}</div>
    </UTabPane>
  </UTabs>
</template>
