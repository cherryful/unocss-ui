<script setup lang="ts">
import { ref } from 'vue'

const options: any = [
  {
    label: 'A',
    value: 'A',
    children: [
      { label: 'A1', value: 'A1' },
      { label: 'A2', value: 'A2' },
      { label: 'A3', value: 'A3', disabled: true },
    ],
  },
  {
    label: 'B',
    value: 'B',
    children: [
      { label: 'B1', value: 'B1' },
      { label: 'B2', value: 'B2' },
      { label: 'B3', value: 'B3' },
    ],
  },
  {
    label: 'C', value: 'C',
  },
]

const checkedValues = ref([])
</script>

<template>
  <div>
    Cascade Selectable Tree : {{ checkedValues }}
    <UTree v-model="checkedValues" :options="options" cascade selectable :default-expanded-keys="['A']" />

    Not Selectable:
    <UTree v-model="checkedValues" :options="options" />
  </div>
</template>
