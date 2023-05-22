<script setup>
import { h, ref } from 'vue'

import UBadge from '../../../../packages/components/src/components/Badge.vue'
import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const snippets = {
  size: [
    '<UBadge size="sm" content="sm">sm</UBadge>',
    '<UBadge size="md" content="md">md</UBadge>',
    '<UBadge size="lg" content="lg">lg</UBadge>',
  ],
  type: [
    '<UBadge type="primary">primary</UBadge>',
    '<UBadge type="secondary">secondary</UBadge>',
    '<UBadge type="accent">accent</UBadge>',
    '<UBadge type="success">success</UBadge>',
    '<UBadge type="info">info</UBadge>',
    '<UBadge type="warning">warning</UBadge>',
    '<UBadge type="error">error</UBadge>',
  ],
}

const state = ref({
  content: '15',
  type: 'default',
  size: 'md',
})

const types = ['default', 'primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const sizes = ['sm', 'md', 'lg']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UBadge
          :type="state.type"
          :size="state.size"
          :content="state.content"
        >
          badge
        </UBadge>
      </template>
      <template #props>
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
      <div class="flex gap-6">
        <UBadge size="sm" content="sm">
          sm
        </UBadge>
        <UBadge size="md" content="md">
          md
        </UBadge>
        <UBadge size="lg" content="lg">
          lg
        </UBadge>
      </div>
    </Sample>
    <Sample title="type" :snippets="snippets.type">
      <div class="space-x-4">
        <component
          :is="h(UBadge, { type: item }, { default: () => item })"
          v-for="(item, idx) in types" :key="idx"
        />
      </div>
    </Sample>
  </DocWrap>
</template>
