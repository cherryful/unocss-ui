<script setup>
import { ref } from 'vue'

import USkeleton from '../../../../packages/components/src/components/Skeleton.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const snippets = {
  base: [
    '<USkeleton class="w-full bg-indigo-300" />',
    '<USkeleton class="w-full bg-green-300" />',
    '<USkeleton class="w-full bg-red-300" />',
  ],
  as: [
`<UToast ref="toast" />
<USkeleton as="button" class="h-16 w-16 rounded-full" @click="$refs.toast?.info('click skeleton')" />`,
  ],
  custom: [
`<div class="flex gap-5">
  <USkeleton class="h-16 w-16 rounded-full" />
  <USkeleton class="h-16 w-16 rounded-full bg-green-300" />
  <USkeleton class="h-16 w-16 rounded-full bg-yellow-300" />
</div>`,
  ],
}

const state = ref({
  content: 'button',
  as: 'div',
})

const ass = ['div', 'span', 'button']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <USkeleton class="w-full" :as="state.as">
          {{ state.content }}
        </USkeleton>
      </template>
      <template #props>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            as
          </div>
          <URadio
            v-for="item in ass" :key="item"
            v-model="state.as"
            :value="item"
            @update:model-value="state.as = item"
          >
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>
    <Sample title="base" :snippets="snippets.base">
      <div class="w-full space-y-3">
        <USkeleton class="w-full bg-indigo-300" />
        <USkeleton class="w-full bg-green-300" />
        <USkeleton class="w-full bg-red-300" />
      </div>
    </Sample>
    <Sample title="click" :snippets="snippets.as">
      <UToast ref="toast" />
      <USkeleton as="button" class="h-16 w-16 rounded-full" @click="$refs.toast?.info('click skeleton')" />
    </Sample>
    <Sample title="custom" :snippets="snippets.custom">
      <div class="flex gap-5">
        <USkeleton class="h-16 w-16 rounded-full" />
        <USkeleton class="h-16 w-16 rounded-full bg-green-300" />
        <USkeleton class="h-16 w-16 rounded-full bg-yellow-300" />
      </div>
    </Sample>
  </DocWrap>
</template>
