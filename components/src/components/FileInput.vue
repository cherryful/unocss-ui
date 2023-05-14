<script setup lang="ts">
import { computed, reactive } from 'vue'
import { uniqueId } from '../helper'

export interface FileInfo {
  id: string
  name: string
  file?: File
}
const props = withDefaults(defineProps<{
  fileList?: Array<FileInfo>
  placeholder?: string
  multiple?: boolean
}>(), {
  placeholder: 'Select a file',
  multiple: false,
})

const emit = defineEmits(['change', 'update:fileList'])
const uid = uniqueId('file-input-')

const theFiles = computed({
  get() {
    return props.fileList || []
  },
  set(value: Array<FileInfo>) {
    emit('update:fileList', value)
  },
})

const flux = reactive({
  fileNames: [] as string[],
  onChange(event: Event) {
    const el = event.target as HTMLInputElement
    const files = Array.from(el.files || [])
    flux.fileNames = files.map(file => file.name)
    theFiles.value = files.map(file => ({
      id: uniqueId('file-'),
      name: file.name,
      file,
    }))
    emit('change', event)
  },
})
</script>

<script lang="ts">
export default {
  name: 'UFileInput',
}
</script>

<template>
  <label
    :for="uid"
    :class="{ upload: !$slots.default }"
  >
    <template v-if="$slots.default">
      <slot />
    </template>

    <template v-else>
      <div v-if="flux.fileNames.length > 1" class="flex flex-wrap gap-1">
        <div
          v-for="item in flux.fileNames" :key="item"
          class="inline-block whitespace-nowrap rounded px-1 text-xs text-whit bg-primary-300 text-center"
        >
          {{ item }}
        </div>
      </div>
      <div v-else-if="flux.fileNames.length === 1" class="text-sm">
        {{ flux.fileNames[0] }}
      </div>
      <div v-else class="text-gray-400">
        {{ placeholder }}
      </div>
      <div class="w-5 text-gray-400 i-mdi:upload h-5" />
    </template>
  </label>
  <input
    :id="uid"
    class="hidden"
    type="file"
    v-bind="$attrs"
    :multiple="multiple"
    @change="flux.onChange"
  >
</template>

<style scoped>
.upload {
  @apply flex justify-between bg-white dark:bg-slate-800 cursor-pointer shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline;
}
</style>
