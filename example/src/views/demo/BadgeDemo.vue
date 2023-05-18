<script setup>
import { h, ref } from 'vue'

import UBadge from '../../../../packages/components/src/components/Badge.vue'
import PageWrap from '@/components/PageWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

import { renderRadio } from '@/helper'

const snippets = {
  size: [
    '<UBadge size="sm">sm</UBadge>',
    '<UBadge size="base">base</UBadge>',
    '<UBadge size="lg">lg</UBadge>',
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
  content: 'badge',
  type: 'default',
  size: 'base',
})

const types = ['default', 'primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const sizes = ['sm', 'md', 'lg']
</script>

<template>
  <PageWrap title="Badge Demo">
    <Playground>
      <template #preview>
        <UBadge
          :type="state.type"
          :size="state.size"
        >
          {{ state.content }}
        </UBadge>
      </template>
      <template #props>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            type
          </div>
          <component
            :is="renderRadio(state, 'type', item)"
            v-for="(item, idx) in types" :key="idx"
          />
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            size
          </div>
          <component
            :is="renderRadio(state, 'size', item)"
            v-for="item in sizes" :key="item"
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
      <div class="space-x-4">
        <component
          :is="h(UBadge, { size: item }, { default: () => item })"
          v-for="item in sizes" :key="item"
        />
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
  </PageWrap>
</template>
