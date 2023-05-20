<script setup>
import { ref } from 'vue'

import UTag from '../../../../packages/components/src/components/Tag.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const snippets = {
  size: [
    '<UTag size="sm">sm</UTag>',
    '<UTag size="md">md</UTag>',
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
    '<UTag rounded="md">md</UTag>',
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
  <DocWrap>
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
      <div class="flex flex-wrap gap-4">
        <UTag>
          default
        </UTag>
        <UTag type="primary">
          primary
        </UTag>
        <UTag type="secondary">
          secondary
        </UTag>
        <UTag type="accent">
          accent
        </UTag>
        <UTag type="success">
          success
        </UTag>
        <UTag type="info">
          info
        </UTag>
        <UTag type="warning">
          warning
        </UTag>
        <UTag type="error">
          error
        </UTag>
      </div>
    </Sample>
    <Sample title="size" :snippets="snippets.size">
      <div class="flex gap-4">
        <UTag size="sm">
          sm
        </UTag>
        <UTag size="md">
          md
        </UTag>
        <UTag size="lg">
          lg
        </UTag>
      </div>
    </Sample>
    <Sample title="rounded" :snippets="snippets.rounded">
      <div class="flex gap-4">
        <UTag rounded="sm">
          sm
        </UTag>
        <UTag rounded="md">
          md
        </UTag>
        <UTag rounded="lg">
          lg
        </UTag>
        <UTag rounded="full">
          full
        </UTag>
      </div>
    </Sample>
    <Sample title="closeable" :snippets="snippets.closeable">
      <UToast ref="toast" />
      <UTag closeable @close="$refs.toast?.info('click close')">
        closeable
      </UTag>
    </Sample>
    <Sample title="border" :snippets="snippets.border">
      <UTag border>
        border
      </UTag>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <UTag>
        <div class="flex items-center justify-center">
          <span class="i-mdi:lightning-bolt text-4" />
          <span> Lightning </span>
        </div>
      </UTag>
    </Sample>
  </DocWrap>
</template>
