<script setup>
import { h, ref } from 'vue'
import UBadge from '../../../../components/src/components/Badge.vue'
import Sample from '@/components/Sample.vue'

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
  disabled: [
    '<UBadge disabled>disabled</UBadge>',
  ],
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
  <div> UBadgeDemo: </div>

  <Sample title="size" :snippets="snippets.size">
    <div class="space-y-3 sm:space-x-4">
      <component :is="h(UBadge, { size: item }, { default: () => item })" v-for="(item, idx) in sizes" :key="idx" />
    </div>
  </Sample>
  <Sample title="type" :snippets="snippets.type">
    <div class="space-y-3 sm:space-x-4">
      <component :is="h(UBadge, { type: item }, { default: () => item })" v-for="(item, idx) in types" :key="idx" />
    </div>
  </Sample>

  <Sample title="custom" :snippets="snippets.type">
    <div class="space-y-3 sm:space-x-4">
      <UBadge content="content" type="primary">
        icon
      </UBadge>
    </div>
  </Sample>
</template>
