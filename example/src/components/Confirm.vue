<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  content: string
  okText: string
  cancelText: string
  onOk: () => void
  onCancel: () => void
  onClose: () => void
}>(), {
  title: 'warning',
  content: 'warning operation',
  okText: 'YES',
  cancelText: 'NO',
  onOk: () => {},
  onCancel: () => {},
})

const show = ref(false)

function close(action: boolean) {
  show.value = false
  setTimeout(() => {
    action ? props.onOk() : props.onCancel()
    props.onClose()
  }, 300)
}

onMounted(() => {
  setTimeout(() => show.value = true, 10)
})
</script>

<template>
  <UModal v-model="show" @close="close(false)">
    <div class="sm:flex sm:items-start">
      <div class="flex items-center justify-center rounded-full h-12 w-12 mx-auto flex-shrink-0 bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
        <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>
      <div class="text-center mt-3 sm:ml-4 sm:mt-0 sm:text-left">
        <h3 id="modal-title" class="text-base font-semibold leading-6 text-gray-900">
          {{ title }}
        </h3>
        <div class="mt-2">
          <div class="text-sm text-gray-500">
            <div v-html="content" />
          </div>
        </div>
      </div>
    </div>
    <div class="sm:flex mt-5 sm:mt-4 sm:flex-row-reverse">
      <button
        type="button"
        class="w-full inline-flex justify-center py-2 text-sm font-semibold text-white rounded-md px-3 shadow-sm sm:w-auto bg-red-600 sm:ml-3 hover:bg-red-500"
        @click="close(true)"
      >
        {{ okText }}
      </button>
      <button
        type="button"
        class="mt-3 w-full inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm sm:mt-0 sm:w-auto ring-1 ring-inset hover:bg-gray-50 ring-gray-300"
        @click="close(false)"
      >
        {{ cancelText }}
      </button>
    </div>
  </UModal>
</template>
