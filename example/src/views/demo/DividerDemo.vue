<script setup>
import { ref } from 'vue'

import UDivider from '../../../../packages/components/src/components/Divider.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const state = ref({
  content: 'divider',
  align: 'center',
  dashed: false,
  thickness: 2,
})

const snippets = {
  align: [
    '<UDivider> center </UDivider>',
    '<UDivider align="left"> Left </UDivider>',
    '<UDivider align="right"> Right </UDivider>',
  ],
  thickness: [
    '<UDivider :thickness="1" />',
    '<UDivider :thickness="2" />',
    '<UDivider :thickness="3" />',
  ],
  dashed: [
    '<UDivider :thickness="1" dashed />',
    '<UDivider :thickness="2" dashed />',
    '<UDivider :thickness="3" dashed />',
  ],
  slot: [
`<UDivider dashed>
  <div class="i-mdi:lightning-bolt h-6 w-6" />
</UDivider>`,
`<UDivider>
  <button type="button" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
    Button text
  </button>
</UDivider>`,
  ],
}

const aligns = ['left', 'center', 'right']
const thicknesses = [1, 2, 3, 4, 5]
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <div class="w-full">
          <UDivider
            :dashed="state.dashed"
            :align="state.align"
            :thickness="state.thickness"
          >
            {{ state.content }}
          </UDivider>
        </div>
      </template>
      <template #props>
        <div class="flex gap-2">
          <UCheckbox v-model="state.dashed">
            dashed
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-20">
            thickness
          </div>
          <URadio v-for="item in thicknesses" :key="item" v-model="state.thickness" :value="item">
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-20">
            align
          </div>
          <URadio
            v-for="item in aligns" :key="item"
            v-model="state.align"
            :value="item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-20">
            content
          </div>
          <UInput v-model="state.content" placeholder="content" />
        </div>
      </template>
    </Playground>
    <Sample title="align" :snippets="snippets.align">
      <div class="w-full space-y-3">
        <UDivider>
          center
        </UDivider>
        <UDivider align="left">
          Left
        </UDivider>
        <UDivider align="right">
          Right
        </UDivider>
      </div>
    </Sample>
    <Sample title="thickness" :snippets="snippets.thickness">
      <div class="w-full space-y-8">
        <UDivider :thickness="1" />
        <UDivider :thickness="2" />
        <UDivider :thickness="3" />
        <UDivider :thickness="4" />
      </div>
    </Sample>
    <Sample title="dashed" :snippets="snippets.dashed">
      <div class="w-full space-y-8">
        <UDivider :thickness="1" dashed />
        <UDivider :thickness="2" dashed />
        <UDivider :thickness="3" dashed />
      </div>
    </Sample>
    <Sample title="slot" :snippets="snippets.slot">
      <div class="w-full space-y-3">
        <UDivider dashed>
          <div class="i-mdi:lightning-bolt h-6 w-6" />
        </UDivider>
        <UDivider>
          <button type="button" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
            Button text
          </button>
        </UDivider>
      </div>
    </Sample>
    <Sample title="custom" :snippets="snippets.slot">
      <div class="w-full">
        111
        <UDivider class="my-10" />
        222
      </div>
    </Sample>
  </DocWrap>
</template>
