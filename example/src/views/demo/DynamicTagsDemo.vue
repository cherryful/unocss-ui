<script setup lang="ts">
import { h, nextTick, ref, watch } from 'vue'

import UTag from '../../../../packages/components/src/components/Tag.vue'
import UDynamicTags from '../../../../packages/components/src/components/DynamicTags.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const tagNames = ref(['Vue', 'React', 'Angular'])

function renderTag(tag: string, index: number) {
  return h(UTag, {
    type: index % 2 ? 'primary' : 'success',
    closeable: true,
    onClose: () => tagNames.value.splice(index, 1),
  }, {
    default: () => tag,
  })
}

// for custom
const newTagValue = ref('')
const newTagInputRef = ref<HTMLInputElement | null>(null)
watch(newTagInputRef, (value) => {
  nextTick(() => value?.focus())
})

const snippets = {
  base: [
    'const tagNames = ref([\'Vue\', \'React\', \'Angular\'])',
    '<UDynamicTags v-model="tagNames" />',
  ],
  max: [
    '<UDynamicTags v-model="tagNames" :max="3" />',
  ],
  closeable: [
    '<UDynamicTags v-model="tagNames" :closeable="false" />',
  ],
  renderTag: [
`function renderTag(tag: string, index: number) {
  return h(UTag, {
    type: index % 2 ? 'primary' : 'success',
    closeable: true,
    onClose: () => tagNames.value.splice(index, 1),
  }, {
    default: () => tag,
  })
}`,
'<UDynamicTags v-model="tagNames" :render-tag="renderTag" />',
  ],
  custom: [
`<UDynamicTags v-model="tagNames">
  <template #trigger>
    <button class="h-4 w-4 flex items-center rounded-full bg-red-500" />
  </template>
  <template #input="{ submit, deactive }">
    <input
      ref="newTagInputRef"
      v-model="newTagValue"
      class="h-7 w-20 border border-gray-300 rounded px-2 text-sm focus:outline-none"
      @keyup.enter="$event => {
        submit($event)
        newTagValue = ''
      }"
      @blur="deactive"
    >
  </template>
</UDynamicTags>`,
  ],
}

const state = ref({
  tagNames: ['AAAA', 'BBBB', 'CCCC'],
  max: 5,
  closeable: true,
  render: false,
  custom: false,
})

const nums = [1, 3, 5, 7]
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UDynamicTags
          v-model="state.tagNames"
          :closeable="state.closeable"
          :max="state.max"
          :render-tag="state.render ? renderTag : undefined"
        >
          <template v-if="state.custom" #trigger>
            <button class="h-4 w-4 flex items-center rounded-full bg-red-500" />
          </template>
          <template v-if="state.custom" #input="{ submit, deactive }">
            <input
              ref="newTagInputRef"
              v-model="newTagValue"
              class="h-7 w-20 border border-gray-300 rounded px-2 text-sm"
              @keyup.enter="$event => {
                submit($event)
                newTagValue = ''
              }"
              @blur="deactive"
            >
          </template>
        </UDynamicTags>
      </template>
      <template #props>
        <div class="flex gap-2">
          <UCheckbox v-model="state.closeable">
            closeable
          </UCheckbox>
          <UCheckbox v-model="state.render">
            render-tag
          </UCheckbox>
          <UCheckbox v-model="state.custom">
            custom
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            max
          </div>
          <URadio v-for="item in nums" :key="item" v-model="state.max" :value="item">
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>
    <Sample title="basic" :snippets="snippets.base">
      <UDynamicTags v-model="tagNames" />
    </Sample>
    <Sample title="max" :snippets="snippets.max">
      <UDynamicTags v-model="tagNames" :max="3" />
    </Sample>
    <Sample title="closeable" :snippets="snippets.closeable">
      <UDynamicTags v-model="tagNames" :closeable="false" />
    </Sample>
    <Sample title="renderTag" :snippets="snippets.renderTag">
      <UDynamicTags v-model="tagNames" :render-tag="renderTag" />
    </Sample>
    <Sample title="custom" :snippets="snippets.custom">
      <UDynamicTags v-model="tagNames">
        <template #trigger>
          <button class="h-4 w-4 flex items-center rounded-full bg-red-500" />
        </template>
        <template #input="{ submit, deactive }">
          <input
            ref="newTagInputRef"
            v-model="newTagValue"
            class="h-7 w-20 border border-gray-300 rounded px-2 text-sm focus:outline-none"
            @keyup.enter="$event => {
              submit($event)
              newTagValue = ''
            }"
            @blur="deactive"
          >
        </template>
      </UDynamicTags>
    </Sample>
  </DocWrap>
</template>
