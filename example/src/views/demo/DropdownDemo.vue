<script setup lang="ts">
import type { VNode } from 'vue'
import { h } from 'vue'

interface DropdownOption {
  key: string
  label: string
  icon?: string | VNode
}

const options: DropdownOption[] = [
  {
    label: 'Action',
    key: 'Action',
    icon: 'i-mdi:lightning-bolt',
  },
  {
    label: 'Another action',
    key: 'Another action',
    icon: 'i-mdi:apple',
  },
  {
    label: 'Something else here',
    key: 'Something else here',
    icon: h('div', { class: 'i-mdi:abacus text-red-500' }),
  },
]

function select(val: DropdownOption) {
  alert(val.key)
}
</script>

<template>
  <div class="mb-4 flex flex-col border p-4 h-32">
    <div class="mb-2">
      Basic
    </div>

    <div class="flex justify-center gap-x-4">
      <UDropdown :options="options">
        <UButton type="primary">
          Base
        </UButton>
      </UDropdown>
      <UDropdown :options="options" @select="select">
        <UButton type="primary">
          @select
        </UButton>
      </UDropdown>
      <UDropdown :options="options">
        <UButton type="primary">
          options slot
        </UButton>
        <template #options>
          <div
            v-for="option of options" :key="option.key"
            class="mx-1 cursor-pointer rounded-md px-2 py-1 hover:bg-amber-500"
            @click="select(option)"
          >
            {{ option.label }}
          </div>
        </template>
      </UDropdown>
    </div>
  </div>
</template>
