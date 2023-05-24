<script setup>
import { ref } from 'vue'

import UButton from '../../../../packages/components/src/components/Button/Button.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const state = ref({
  content: 'button',
  type: 'default',
  size: 'md',
  disabled: false,
  custom: '',
})

const snippets = {
  size: [
    '<UButton size="sm">sm</UButton>',
    '<UButton size="md">md</UButton>',
    '<UButton size="lg">lg</UButton>',
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
}

const types = ['default', 'primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const sizes = ['sm', 'md', 'lg']
</script>

<template>
  <DocWrap>
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
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            type
          </div>
          <URadio
            v-for="item in types" :key="item"
            v-model="state.type"
            :type="item"
            :value="item"
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
    <Sample title="size" :snippets="snippets.size">
      <div class="flex flex-wrap gap-4">
        <UButton size="sm">
          sm
        </UButton>
        <UButton size="md">
          md
        </UButton>
        <UButton size="lg">
          lg
        </UButton>
      </div>
    </Sample>
    <Sample title="type" :snippets="snippets.type">
      <div class="flex flex-wrap gap-4">
        <UButton>default</UButton>
        <UButton type="primary">
          primary
        </UButton>
        <UButton type="secondary">
          secondary
        </UButton>
        <UButton type="accent">
          accent
        </UButton>
        <UButton type="success">
          success
        </UButton>
        <UButton type="info">
          info
        </UButton>
        <UButton type="warning">
          warning
        </UButton>
        <UButton type="error">
          error
        </UButton>
      </div>
    </Sample>
    <Sample title="disabled" :snippets="snippets.disabled">
      <UButton disabled>
        disabled
      </UButton>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <UButton>
        <div class="flex items-center justify-center">
          <span class="i-mdi:lightning-bolt text-4" />
          <span> Lightning </span>
        </div>
      </UButton>
    </Sample>
  </DocWrap>
</template>
