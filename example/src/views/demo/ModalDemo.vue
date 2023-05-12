<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const size = ref<'base' | 'sm' | 'md' | 'lg' | 'xl' | 'full'>('base')
</script>

<template>
  <div>
    UModal Demo:
    <div class="mt-4 space-x-3">
      size:
      <UButton
        type="primary" @click="() => {
          size = 'sm'
          show = true
        }"
      >
        sm
      </UButton>
      <UButton
        type="primary" @click="() => {
          size = 'base'
          show = true
        }"
      >
        base
      </UButton>
      <UButton
        type="primary" @click="() => {
          size = 'md'
          show = true
        }"
      >
        md
      </UButton>
      <UButton
        type="primary" @click="() => {
          size = 'lg'
          show = true
        }"
      >
        lg
      </UButton>
      <UButton
        type="primary" @click="() => {
          size = 'xl'
          show = true
        }"
      >
        xl
      </UButton>
      <UButton
        type="primary" @click="() => {
          size = 'full'
          show = true
        }"
      >
        full
      </UButton>
    </div>
  </div>

  <UModal v-model="show" :size="size">
    <div class="text-lg font-bold">
      Header
    </div>
    <div class="my-5 text-sm">
      Hello World!
    </div>
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
      <button
        type="button"
        class="w-full inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="show = false"
      >
        Deactivate
      </button>
      <button
        class="mt-3 w-full inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="show = false"
      >
        Cancel
      </button>
    </div>
  </UModal>
</template>
