<script setup lang="ts">
import { ref, watch } from 'vue'
import { Select } from 'unocss-ui'

const props = defineProps({
  total: { type: Number, default: 0 },
  page: { type: Number, default: 1 },
  limit: { type: Number, default: 10 },
})

const emit = defineEmits(['query', 'update:page', 'update:limit'])

const page = ref(props.page)
const limit = ref(props.limit)

watch([() => props.page, () => props.limit], ([p, l]) => {
  page.value = p
  limit.value = l
})

function handlePrev() {
  if (page.value > 1) {
    page.value -= 1
    emit('update:page', page.value)
    emit('query')
  }
}

function handleNext() {
  if (page.value * limit.value < props.total) {
    page.value += 1
    emit('update:page', page.value)
    emit('query')
  }
}

function updateLimit() {
  page.value = 1

  emit('update:limit', limit.value)
  emit('update:page', page.value)
  emit('query')
}

const options = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '20', value: 20 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
]
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <span class="mr-1 font-medium">Total:</span>
      <span class="text-gray-600"> {{ total }}</span>
      <span class="xs:block ml-4 hidden text-gray-700"> View </span>
      <div class="ml-2 w-20">
        <Select
          v-model="limit"
          :options="options"
          :placeholder="String(limit)"
          @change="updateLimit"
        />
      </div>
    </div>
    <nav
      class="flex items-center justify-between py-3"
      aria-label="Pagination"
    >
      <div class="flex flex-1 justify-between sm:justify-end space-x-3">
        <button
          class="relative inline-flex items-center border border-gray-300 rounded-md bg-white p-1 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="handlePrev"
        >
          <span class="i-mdi:chevron-left h-5 w-5" />
        </button>
        <button
          class="relative inline-flex items-center border border-gray-300 rounded-md bg-white p-1 px-2 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="handleNext"
        >
          <span class="i-mdi:chevron-right h-5 w-5" />
        </button>
      </div>
    </nav>
  </div>
</template>
