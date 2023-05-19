<script setup>
import { h, ref } from 'vue'

import UTag from '../../../../packages/components/src/components/Tag.vue'

import PageWrap from '@/components/PageWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

function onClose() {
  alert('close')
}

const snippets = {
  size: [
    '<UTag size="sm">sm</UTag>',
    '<UTag size="base">base</UTag>',
    '<UTag size="lg">lg</UTag>',
  ],
  type: [
    '<UTag>default</UTag>',
    '<UTag type="primary">primary</UTag>',
    '<UTag type="secondary">secondary</UTag>',
    '<UTag type="accent">accent</UTag>',
    '<UTag type="success">success</UTag>',
    '<UTag type="info">info</UTag>',
    '<UTag type="warning">warning</UTag>',
    '<UTag type="error">error</UTag>',
  ],
  rounded: [
    '<UTag rounded="sm">sm</UTag>',
    '<UTag rounded="base">base</UTag>',
    '<UTag rounded="lg">lg</UTag>',
    '<UTag rounded="full">full</UTag>',
  ],
  closeable: [
    '<UTag closeable @close="onClose">closeable</UTag>',
  ],
  border: [
    '<UTag border>border</UTag>',
  ],
  icon: [
    `<UTag>
  <div class="flex items-center justify-center">
    <span class="i-mdi:lightning-bolt text-4" />
    <span> Lightning </span>
  </div>
</UTag>`,
  ],
  custom: [
    `<UTag custom="bg-pink-200 text-pink-600 px-4 py-2 border-2 border-pink-600 rounded-xl">
  custom
</UTag>`,
  ],
}

const state = ref({
  content: 'tag',
  type: 'default',
  size: 'md',
  closeable: false,
  border: false,
  rounded: 'md',
})

const types = ['default', 'primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const sizes = ['sm', 'md', 'lg']
const rounds = ['sm', 'md', 'lg', 'full']
</script>

<template>
  <PageWrap title="Tag Demo">
    <Playground>
      <template #preview>
        <UTag
          :type="state.type"
          :size="state.size"
          :rounded="state.rounded"
          :border="state.border"
          :closeable="state.closeable"
        >
          {{ state.content }}
        </UTag>
      </template>
      <template #props>
        <div class="flex gap-3">
          <UCheckbox v-model="state.closeable">
            closeable
          </UCheckbox>
          <UCheckbox v-model="state.border">
            border
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            type
          </div>
          <URadio
            v-for="item in types" :key="item"
            v-model="state.type"
            :type="item"
            :value="item"
            @update:model-value="state.type = item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            size
          </div>
          <URadio
            v-for="item in sizes" :key="item"
            v-model="state.size"
            :type="item"
            :value="item"
            @update:model-value="state.size = item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            rounded
          </div>
          <URadio
            v-for="item in rounds" :key="item"
            v-model="state.rounded"
            :type="item"
            :value="item"
            @update:model-value="state.rounded = item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-16">
            content
          </div>
          <UInput v-model="state.content" placeholder="content" />
        </div>
      </template>
    </Playground>
    <Sample title="type" :snippets="snippets.type">
      <div class="space-x-4 space-y-3">
        <component
          :is="h(UTag, { type: item }, { default: () => item })"
          v-for="(item, idx) in types" :key="idx"
        />
      </div>
    </Sample>
    <Sample title="size" :snippets="snippets.size">
      <div class="space-x-4 space-y-3">
        <component
          :is="h(UTag, { size: item }, { default: () => item })"
          v-for="item in sizes" :key="item"
        />
      </div>
    </Sample>
    <Sample title="rounded" :snippets="snippets.rounded">
      <div class="space-x-4 space-y-3">
        <component
          :is="h(UTag, { rounded: item }, { default: () => item })"
          v-for="(item, idx) in rounds" :key="idx"
        />
      </div>
    </Sample>
    <Sample title="closeable" :snippets="snippets.closeable">
      <div class="space-x-4 space-y-3">
        <UTag closeable @close="onClose">
          closeable
        </UTag>
      </div>
    </Sample>
    <Sample title="border" :snippets="snippets.border">
      <div class="space-x-4 space-y-3">
        <UTag border>
          border
        </UTag>
      </div>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <div class="space-x-4 space-y-3">
        <UTag>
          <div class="flex items-center justify-center">
            <span class="i-mdi:lightning-bolt text-4" />
            <span> Lightning </span>
          </div>
        </UTag>
      </div>
    </Sample>
    <Sample title="custom" :snippets="snippets.custom">
      <div class="space-x-4 space-y-3">
        <UTag custom="bg-pink-200 text-pink-600 px-4 py-2 border-2 border-pink-600 rounded-xl">
          custom
        </UTag>
      </div>
    </Sample>
  </PageWrap>
</template>
