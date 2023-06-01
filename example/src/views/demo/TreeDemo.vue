<script setup>
import { ref } from 'vue'

import UTree from '../../../../packages/components/src/components/Tree.vue'
import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const checkedValues2 = ref([])
const checkedValues3 = ref([])
const checkedValues4 = ref([])

const state = ref({
  checkedValues: [],
  selectable: true,
  cascade: true,
  custom: false,
})

const snippets = {
  base: [
`const options = [
  {
    label: '1',
    value: 1,
    children: [
      { label: '11', value: 11 },
      { label: '12', value: 12 },
      { label: '13', value: 13, disabled: true },
    ],
  },
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
          {
            label: 'B33',
            value: 'B33',
            children: [
              { label: 'B331', value: 'B331' },
              { label: 'B332', value: 'B332' },
              {
                label: 'B333',
                value: 'B333',
                children: [
                  { label: 'B3331', value: 'B3331' },
                  { label: 'B3332', value: 'B3332' },
                  { label: 'B3333', value: 'B3333' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]`,
'<UTree :options="options" />',
  ],
  selectableAndCascade: [
    '<UTree v-model="checkedValues2" :options="options" selectable cascade />',
  ],
  defaultExpanded: [
`<UTree
  v-model="checkedValues3"
  :options="options"
  :default-expanded-keys="['A', 'B', 'B3', 'B33']"
/>`,
  ],
  custom: [
`<UTree v-model="checkedValues4" :options="options" cascade selectable>
  <template #option="{ item, level }">
    <div class="flex items-center gap-1">
      <span class="i-mdi:lightning-bolt h-4 w-4" />
      {{ level }} - {{ item.label }}
    </div>
  </template>
</UTree>`,
  ],
}

const options = [
  {
    label: '1',
    value: 1,
    children: [
      { label: '11', value: 11 },
      { label: '12', value: 12 },
      { label: '13', value: 13, disabled: true },
    ],
  },
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
          {
            label: 'B33',
            value: 'B33',
            children: [
              { label: 'B331', value: 'B331' },
              { label: 'B332', value: 'B332' },
              {
                label: 'B333',
                value: 'B333',
                children: [
                  { label: 'B3331', value: 'B3331' },
                  { label: 'B3332', value: 'B3332' },
                  { label: 'B3333', value: 'B3333' },
                ],
              },
            ],
          },
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
            :options="options"
            :cascade="state.cascade"
            :selectable="state.selectable"
          >
            <template v-if="state.custom" #option="{ item }">
              <div class="flex items-center gap-1">
                <span class="i-mdi:lightning-bolt h-4 w-4" />
                {{ item.label }}
              </div>
            </template>
          </UTree>
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
    <Sample title="selectable & cascade" :snippets="snippets.selectableAndCascade">
      <UTree v-model="checkedValues2" :options="options" selectable cascade />
    </Sample>
    <Sample title="default-expanded-keys" :snippets="snippets.defaultExpanded">
      <UTree
        v-model="checkedValues3"
        :options="options"
        :default-expanded-keys="['A', 'B', 'B3', 'B33']"
      />
    </Sample>
    <Sample title="custom" :snippets="snippets.custom">
      <UTree v-model="checkedValues4" :options="options" cascade selectable>
        <template #option="{ item, level }">
          <div class="flex items-center gap-1">
            <span class="i-mdi:lightning-bolt h-4 w-4" />
            {{ level }} - {{ item.label }}
          </div>
        </template>
      </UTree>
    </Sample>
  </DocWrap>
</template>
