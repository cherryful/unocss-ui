<script setup>
import { ref } from 'vue'

import USwitch from '../../../../packages/components/src/components/Switch.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const checkValue = ref(true)
const customValue = ref('checked')

const state = ref({
  checkValue: true,
  checkedValue: '',
  uncheckedValue: '',
  type: 'primary',
  size: 'base',
  disabled: false,
  icon: false,
})

const snippets = {
  size: [
    '<USwitch v-model="checksValue" size="sm" />',
    '<USwitch v-model="checksValue" size="base" />',
    '<USwitch v-model="checksValue" size="lg" />',
  ],
  type: [
    '<USwitch v-model="checkValue" type="primary" />',
    '<USwitch v-model="checkValue" type="secondary" />',
    '<USwitch v-model="checkValue" type="accent" />',
    '<USwitch v-model="checkValue" type="success" />',
    '<USwitch v-model="checkValue" type="info" />',
    '<USwitch v-model="checkValue" type="warning" />',
    '<USwitch v-model="checkValue" type="error" />',
  ],
  icon: [
    '<USwitch v-model="checkValue" icon />',
  ],
  disabled: [
    '<USwitch disabled />',
    '<USwitch readonly />',
    '<USwitch checked readonly />',
  ],
  customValue: [
    `<USwitch v-model="customValue" checked-value="checked" unchecked-value="unchecked">
  {{ customValue }}
</USwitch>`,
  ],
  loading: [
    '<USwitch loading />',
  ],
  other: [
    `<USwitch :model-value="checkValue" @update:model-value="v => checkValue = v">
  manual
</USwitch>`,
  ],
}

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const sizes = ['sm', 'base', 'lg']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <USwitch
          v-model="state.checkValue"
          :type="state.type"
          :size="state.size"
          :disabled="state.disabled"
          :icon="state.icon"
          :loading="state.loading"
          :checked-value="state.checkedValue"
          :unchecked-value="state.uncheckedValue"
        >
          {{ state.checkValue }}
        </USwitch>
      </template>
      <template #props>
        <div class="flex gap-2">
          <UCheckbox v-model="state.disabled">
            disabled
          </UCheckbox>
          <UCheckbox v-model="state.icon">
            icon
          </UCheckbox>
          <UCheckbox v-model="state.loading">
            loading
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
        <div class="flex items-center gap-2">
          <div class="w-16">
            custom
          </div>
          <UInput v-model="state.checkedValue" clearable placeholder="checkedVal" />
          <UInput v-model="state.uncheckedValue" clearable placeholder="uncheckedVal" />
        </div>
      </template>
    </Playground>
    <Sample title="size" :snippets="snippets.size">
      <div class="flex gap-4">
        <USwitch v-model="checkValue" size="sm" />
        <USwitch v-model="checkValue" size="base" />
        <USwitch v-model="checkValue" size="lg" />
      </div>
    </Sample>
    <Sample title="type" :snippets="snippets.type">
      <div class="flex flex-wrap gap-4">
        <USwitch v-model="checkValue" type="primary" />
        <USwitch v-model="checkValue" type="secondary" />
        <USwitch v-model="checkValue" type="accent" />
        <USwitch v-model="checkValue" type="success" />
        <USwitch v-model="checkValue" type="info" />
        <USwitch v-model="checkValue" type="warning" />
        <USwitch v-model="checkValue" type="error" />
      </div>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <USwitch v-model="checkValue" icon />
    </Sample>
    <Sample title="disabled & readonly" :snippets="snippets.disabled">
      <div class="flex gap-4">
        <USwitch disabled />
        <USwitch readonly />
        <USwitch readonly checked />
      </div>
    </Sample>
    <Sample title="custom value" :snippets="snippets.customValue">
      <USwitch v-model="customValue" checked-value="checked" unchecked-value="unchecked">
        {{ customValue }}
      </USwitch>
    </Sample>
    <Sample title="loading" :snippets="snippets.loading">
      <USwitch loading />
    </Sample>
    <Sample title="other" :snippets="snippets.other">
      <USwitch :model-value="checkValue" @update:model-value="v => checkValue = v">
        manual
      </USwitch>
    </Sample>
  </DocWrap>
</template>
