<script setup>
import { h, ref } from 'vue'

import UDropdown from '../../../../packages/components/src/components/Dropdown.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const state = ref({
  trigger: 'click',
  optionSlot: false,
})

const snippets = {
  base: [
    `const options = [
  {
    label: 'Apple',
    value: 'apple',
    icon: 'i-mdi:apple text-red-600 text-xl',
  },
  {
    label: 'Pear',
    value: 'pear',
    icon: 'i-mdi:fruit-pear text-green-600 text-xl',
  },
  {
    label: 'Cherry',
    value: 'cherry',
    icon: h('div', { class: 'i-mdi:fruit-cherries text-red-600 text-xl' }),
  },
  {
    label: 'Watermelon',
    value: 'watermelon',
    icon: h('div', { class: 'i-mdi:fruit-watermelon text-red-600 text-xl' }),
    disabled: true,
  },
]`,
`<UDropdown :options="options">
  <UButton> base </UButton>
</UDropdown>`,
  ],
  trigger: [
`<UDropdown :options="options">
  <UButton>
    click
  </UButton>
</UDropdown>`,
`<UDropdown trigger="hover" :options="options">
  <UButton>
    hover
  </UButton>
</UDropdown>`,
  ],
}

const options = [
  {
    label: 'Apple',
    value: 'apple',
    icon: 'i-mdi:apple text-red-600 text-xl',
  },
  {
    label: 'Pear',
    value: 'pear',
    icon: 'i-mdi:fruit-pear text-green-600 text-xl',
  },
  {
    label: 'Cherry',
    value: 'cherry',
    icon: h('div', { class: 'i-mdi:fruit-cherries text-red-600 text-xl' }),
  },
  {
    label: 'Watermelon',
    value: 'watermelon',
    icon: h('div', { class: 'i-mdi:fruit-watermelon text-red-600 text-xl' }),
    disabled: true,
  },
]

const triggers = ['click', 'hover']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UToast ref="toast" />
        <UDropdown
          :trigger="state.trigger"
          :options="options"
          @select="$refs.toast.info(`select: ${$event.value}`)"
        >
          <UButton type="primary">
            Base
          </UButton>
        </UDropdown>
      </template>
      <template #props>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            trigger
          </div>
          <URadio
            v-for="item in triggers" :key="item"
            v-model="state.trigger"
            :value="item"
          >
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>
    <Sample title="base" :snippets="snippets.base">
      <UDropdown :options="options">
        <UButton>
          base
        </UButton>
      </UDropdown>
    </Sample>
    <Sample title="trigger" :snippets="snippets.trigger">
      <div class="flex gap-8">
        <UDropdown :options="options">
          <UButton>
            click
          </UButton>
        </UDropdown>
        <UDropdown trigger="hover" :options="options">
          <UButton>
            hover
          </UButton>
        </UDropdown>
      </div>
    </Sample>
  </DocWrap>
</template>
