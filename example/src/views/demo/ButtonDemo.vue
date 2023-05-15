<script setup>
import { h, ref } from 'vue'

import UButton from '../../../../packages/components/src/components/Button/Button.vue'

import PageWrap from '@/components/PageWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'
import { renderRadio } from '@/helper'

const snippets = {
  size: [
    '<UButton size="sm">button</UButton>',
    '<UButton size="base">button</UButton>',
    '<UButton size="lg">button</UButton>',
  ],
  type: [
    '<UButton>default</UButton>',
    '<UButton type="primary">primary</UButton>',
    '<UButton type="secondary">secondary</UButton>',
    '<UButton type="accent">accent</UButton>',
    '<UButton type="success">success</UButton>',
    '<UButton type="info">info</UButton>',
    '<UButton type="warning">warning</UButton>',
    '<UButton type="error">error</UButton>',
  ],
  disabled: [
    '<UButton disabled> disabled </UButton>',
  ],
  icon: [
    `<UButton>
  <div class="flex items-center justify-center">
    <span class="i-mdi:lightning-bolt text-4" />
    <span> Lightning </span>
  </div>
</UButton>`,
  ],
//   custom: [
//     `<UButton custom="bg-pink-500 text-white hover:bg-pink-700 focus:ring-pink-500 p-2">
//   Pink Button
// </UButton>`,
// `<UButton custom="bg-orange-500 text-white hover:bg-orange-700 focus:ring-orange-500 border-rounded p-3">
//   Orange Huge Button
// </UButton>`,
//   ],
}

const state = ref({
  content: 'button',
  type: 'default',
  size: 'base',
  disabled: false,
  custom: '',
})

const types = ['default', 'primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const sizes = ['sm', 'base', 'lg']
</script>

<template>
  <PageWrap title="Button Demo">
    <Playground>
      <template #preview>
        <UButton
          :type="state.type"
          :size="state.size"
          :disabled="state.disabled"
          :custom="state.custom"
        >
          {{ state.content }}
        </UButton>
      </template>
      <template #props>
        <div class="flex gap-2">
          <UCheckbox v-model="state.disabled">
            disabled
          </UCheckbox>
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="w-16">
            type
          </div>
          <component
            :is="renderRadio(state, 'type', item)"
            v-for="(item, idx) in types" :key="idx"
          />
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="w-16">
            size
          </div>
          <component
            :is="renderRadio(state, 'size', item)"
            v-for="(item, idx) in sizes" :key="idx"
          />
        </div>
        <div class="flex items-center gap-2">
          <div class="w-16">
            content
          </div>
          <UInput v-model="state.content" placeholder="content" />
        </div>
      </template>
    </Playground>
    <Sample title="size" :snippets="snippets.size">
      <div class="space-y-3 space-x-4">
        <component
          :is="h(UButton, { size: item }, { default: () => item })"
          v-for="(item, idx) in sizes" :key="idx"
        />
      </div>
    </Sample>
    <Sample title="type" :snippets="snippets.type">
      <div class="space-y-3 space-x-4">
        <component
          :is="h(UButton, { type: item }, { default: () => item })"
          v-for="(item, idx) in types" :key="idx"
        />
      </div>
    </Sample>
    <Sample title="rounded" :snippets="snippets.type">
      <div class="space-y-3 space-x-4">
        <component
          :is="h(UButton, { type: item }, { default: () => item })"
          v-for="(item, idx) in types" :key="idx"
        />
      </div>
    </Sample>
    <Sample title="disabled" :snippets="snippets.disabled">
      <div class="space-y-3 space-x-4">
        <UButton disabled>
          disabled
        </UButton>
      </div>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <div class="space-y-3 space-x-4">
        <UButton>
          <div class="flex items-center justify-center">
            <span class="i-mdi:lightning-bolt text-4" />
            <span> Lightning </span>
          </div>
        </UButton>
      </div>
    </Sample>
    <!-- <Sample title="custom" :snippets="snippets.custom">
      <div class="space-y-3 space-x-4">
        <UButton custom="bg-pink-500 text-white hover:bg-pink-700 focus:ring-pink-500 p-2">
          Pink Button
        </UButton>
        <UButton custom="bg-orange-500 text-white hover:bg-orange-700 focus:ring-orange-500 border-rounded p-3">
          Orange Huge Button
        </UButton>
      </div>
    </Sample> -->
  </PageWrap>
</template>
