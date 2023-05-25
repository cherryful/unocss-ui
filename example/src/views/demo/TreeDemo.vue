<script setup>
import { ref } from 'vue'
import UTree from '../../../../packages/components/src/components/Tree.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const checkedValues1 = ref([])
const checkedValues2 = ref([])
const checkedValues3 = ref([])
const checkedValues4 = ref([])
const checkedValues5 = ref([])

const state = ref({
  checkedValues: [],
  selectable: true,
  cascade: true,
  custom: false,
})

const snippets = {
  base: [],
  selectable: [],
  cascade: [],
  defaultExpanded: [],
  custom: [],
}

const options = [
  {
    label: 'A',
    value: 'A',
    children: [
      { label: 'A1', value: 'A1' },
      { label: 'A2', value: 'A2' },
      { label: 'A3', value: 'A3', disabled: true },
    ],
  },
  {
    label: 'B',
    value: 'B',
    children: [
      { label: 'B1', value: 'B1' },
      { label: 'B2', value: 'B2' },
      {
        label: 'B3',
        value: 'B3',
        children: [
          { label: 'B31', value: 'B31' },
          { label: 'B32', value: 'B32' },
          { label: 'B33', value: 'B33' },
        ],
      },
    ],
  },
]

const stateOptions = [
  {
    label: 'AA',
    value: 'AA',
    children: [
      { label: 'AA1', value: 'AA1' },
      { label: 'AA2', value: 'AA2' },
      { label: 'AA3', value: 'AA3', disabled: true },
    ],
  },
  {
    label: 'BB',
    value: 'BB',
    children: [
      { label: 'BB1', value: 'BB1' },
      { label: 'BB2', value: 'BB2' },
      {
        label: 'BB3',
        value: 'BB3',
        children: [
          { label: 'BB31', value: 'BB31' },
          { label: 'BB32', value: 'BB32' },
          { label: 'BB33', value: 'BB33' },
        ],
      },
    ],
  },
]
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <div class="w-full">
          <div class="mb-3">
            checkedValues: {{ state.checkedValues }}
          </div>
          <UTree
            v-model="state.checkedValues"
            :options="stateOptions"
            :cascade="state.cascade"
            :selectable="state.selectable"
          />
        </div>
      </template>
      <template #props>
        <div class="flex gap-2">
          <UCheckbox v-model="state.selectable">
            selectable
          </UCheckbox>
          <UCheckbox v-model="state.cascade">
            cascade
          </UCheckbox>
          <UCheckbox v-model="state.custom">
            custom
          </UCheckbox>
        </div>
      </template>
    </Playground>
    <Sample title="base" :snippets="snippets.base">
      <UTree :options="options" />
    </Sample>
    <Sample title="selectable" :snippets="snippets.selectable">
      <UTree v-model="checkedValues2" :options="options" selectable />
    </Sample>
    <Sample title="cascade" :snippets="snippets.cascade">
      <UTree v-model="checkedValues3" :options="options" selectable cascade />
    </Sample>
    <!-- <Sample title="default-expanded-keys" :snippets="snippets.defaultExpanded">
      <UTree v-model="checkedValues4" :options="options" :default-expanded-keys="['A']" />
    </Sample> -->
    <Sample title="custom" :snippets="snippets.custom">
      <UTree v-model="checkedValues5" :options="options" cascade selectable>
        <template #option="{ item }">
          <div class="flex items-center gap-1">
            <span class="i-mdi:lightning-bolt h-4 w-4" />
            {{ item.label }}
          </div>
        </template>
      </UTree>
    </Sample>
  </DocWrap>
</template>
