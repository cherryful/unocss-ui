<script setup lang="ts">
import type { Component } from 'vue'
import { computed, reactive, ref } from 'vue'
import { uniqueId } from '../helper'
import Tag from './Tag.vue'

const props = withDefaults(defineProps<{
  modelValue?: string[]
  max?: number
  renderTag?: (tag: string, index: number) => Component
  closeable?: boolean
}>(), {
  modelValue: () => [],
  max: 10,
  renderTag: undefined,
  closeable: true,
})

const emits = defineEmits(['update:modelValue'])

const uid = uniqueId('dynamic-tag-')

const tagNames = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})

const newTagInputRef = ref<HTMLInputElement | null>(null)

const flux = reactive({
  newTag: '',
  typing: false,

  clickAdd: () => {
    flux.typing = true
    setTimeout(() => newTagInputRef.value?.focus(), 0)
  },

  removeTag: (tag: string) => {
    tagNames.value = tagNames.value.filter(item => item !== tag)
  },

  addTag: (e: Event) => {
    const target = e.target as HTMLInputElement

    const value = target.value.trim()
    value && tagNames.value.push(value)

    flux.deactive()
  },

  deactive: () => {
    flux.newTag = ''
    flux.typing = false
  },
})
</script>

<script lang="ts">
export default {
  name: 'UDynamicTags',
}
</script>

<template>
  <div class="flex items-center flex-wrap">
    <template v-if="renderTag !== undefined">
      <template v-for="(tag, index) in tagNames" :key="index">
        <Component :is="renderTag(tag, index)" class="mr-2" />
      </template>
    </template>
    <template v-else>
      <Tag
        v-for="tag in tagNames" :key="tag"
        :closeable="closeable"
        class="mr-2"
        @close="flux.removeTag(tag)"
      >
        {{ tag }}
      </Tag>
    </template>
    <template v-if="flux.typing">
      <slot name="input" :submit="flux.addTag" :deactive="flux.deactive">
        <Tag>
          <div class="relative h-4 min-w-7">
            <input
              :id="uid"
              ref="newTagInputRef"
              v-model="flux.newTag"
              class="absolute w-full text-gray-500 focus:outline-none inline h-full border-none bg-transparent outline-transparent"
              @blur="flux.addTag"
              @keyup.enter="($refs.newTagInputRef as HTMLElement).blur()"
            >
            <label :for="uid" class="invisible" v-text="flux.newTag" />
          </div>
        </Tag>
      </slot>
    </template>
    <template v-if="tagNames.length < max && !flux.typing">
      <span class="cursor-pointer" @click="flux.clickAdd">
        <slot name="trigger">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="#888888" d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4v4Zm1 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" /></svg>
        </slot>
      </span>
    </template>
  </div>
</template>
