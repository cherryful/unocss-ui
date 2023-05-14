<script setup lang="ts">
import { h, nextTick, ref, watch } from 'vue'

const tagNames = ref(['AAAA', 'BBBB', 'CCCC'])

function renderTag(tag: string, index: number) {
  return h('div', {
    type: index % 2 === 0 ? 'primary' : 'success',
    closeable: true,
    onClose: () => tagNames.value.splice(index, 1),
  }, {
    default: () => tag,
  })
}

const newTagValue = ref('')
const newTagInputRef = ref<HTMLInputElement | null>(null)
watch(newTagInputRef, (value) => {
  nextTick(() => value?.focus())
})
</script>

<template>
  UDynamicTags Demo:
  <div class="flex items-center gap-4">
    <span> Basic Usage </span>
    <UDynamicTags v-model="tagNames" />
  </div>
  <div class="flex items-center gap-4">
    <span> Max 3 </span>
    <UDynamicTags v-model="tagNames" :max="3" />
  </div>
  <div class="flex items-center gap-4">
    <span> Custom Render </span>
    <UDynamicTags v-model="tagNames" :render-tag="renderTag" />
  </div>
  <div class="flex items-center gap-4">
    <span> Not Closeable </span>
    <UDynamicTags v-model="tagNames" :closeable="false" />
  </div>
  <div class="flex items-center gap-4">
    <span> Custom Trigger </span>
    <UDynamicTags v-model="tagNames">
      <template #trigger>
        <button class="h-4 w-4 flex items-center rounded-full bg-red-500" />
      </template>
    </UDynamicTags>
  </div>
  <div class="flex items-center gap-4">
    <span> Custom Input </span>
    <UDynamicTags v-model="tagNames">
      <template #input="{ submit, deactive }">
        <input
          ref="newTagInputRef"
          v-model="newTagValue"
          class="w-20 border border-gray-300 rounded px-2 text-sm h-7"
          @keyup.enter="$event => {
            submit($event)
            newTagValue = ''
          }"
          @blur="deactive"
        >
      </template>
    </UDynamicTags>
  </div>
</template>
