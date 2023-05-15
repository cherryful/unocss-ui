<script setup>
import { ref } from 'vue'

import UCheckbox from '../../../../components/src/components/Checkbox.vue'

import PageWrap from '@/components/PageWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'
import { renderRadio } from '@/helper'

const checkValue = ref(true)
const customValue = ref('checked')

const state = ref({
  checkValue: true,
  checkedValue: '',
  uncheckedValue: '',
  type: 'primary',
  size: 'base',
  disabled: false,
  labelLeft: false,
})

const snippets = {
  size: [
    '<UCheckbox v-model="checksValue" size="sm" />',
    '<UCheckbox v-model="checksValue" size="base" />',
    '<UCheckbox v-model="checksValue" size="lg" />',
  ],
  type: [
    '<UCheckbox v-model="checkValue" type="primary" />',
    '<UCheckbox v-model="checkValue" type="secondary" />',
    '<UCheckbox v-model="checkValue" type="accent" />',
    '<UCheckbox v-model="checkValue" type="success" />',
    '<UCheckbox v-model="checkValue" type="info" />',
    '<UCheckbox v-model="checkValue" type="warning" />',
    '<UCheckbox v-model="checkValue" type="error" />',
  ],
  disabled: [
    '<UCheckbox disabled />',
    '<UCheckbox checked disabled />',
  ],
  customValue: [
   `<UCheckbox v-model="customValue" checked-value="checked" unchecked-value="unchecked">
  {{ customValue }}
</UCheckbox>`,
  ],
  labelLeft: [],
}

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const sizes = ['sm', 'base', 'lg']
</script>

<template>
  <PageWrap title="Checkbox Demo">
    <Playground>
      <template #preview>
        <UCheckbox
          v-model="state.checkValue"
          :type="state.type"
          :size="state.size"
          :disabled="state.disabled"
          :label-left="state.labelLeft"
          :checked-value="state.checkedValue"
          :unchecked-value="state.uncheckedValue"
        >
          {{ state.checkValue }}
        </UCheckbox>
      </template>
      <template #props>
        <div class="flex gap-3">
          <UCheckbox v-model="state.disabled">
            disabled
          </UCheckbox>
          <UCheckbox v-model="state.labelLeft">
            label-left
          </UCheckbox>
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="w-16">
            type
          </div>
          <component
            :is="renderRadio(state, 'type', item)"
            v-for="(item, idx) in types" :key="idx"
          />
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="w-16">
            size
          </div>
          <component
            :is="renderRadio(state, 'size', item)"
            v-for="(item, idx) in sizes" :key="idx"
          />
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
        <UCheckbox v-model="checkValue" size="sm" />
        <UCheckbox v-model="checkValue" size="base" />
        <UCheckbox v-model="checkValue" size="lg" />
      </div>
    </Sample>
    <Sample title="type" :snippets="snippets.type">
      <div class="flex gap-4">
        <UCheckbox v-model="checkValue" type="primary" />
        <UCheckbox v-model="checkValue" type="secondary" />
        <UCheckbox v-model="checkValue" type="accent" />
        <UCheckbox v-model="checkValue" type="success" />
        <UCheckbox v-model="checkValue" type="info" />
        <UCheckbox v-model="checkValue" type="warning" />
        <UCheckbox v-model="checkValue" type="error" />
      </div>
    </Sample>
    <Sample title="disabled" :snippets="snippets.disabled">
      <div class="flex gap-4">
        <UCheckbox disabled />
        <UCheckbox disabled checked />
      </div>
    </Sample>
    <Sample title="custom value" :snippets="snippets.customValue">
      <UCheckbox v-model="customValue" checked-value="checked" unchecked-value="unchecked">
        {{ customValue }}
      </UCheckbox>
    </Sample>
    <Sample title="label left" :snippets="snippets.labelLeft">
      <UCheckbox v-model="checkValue" label-left>
        {{ checkValue }}
      </UCheckbox>
    </Sample>
  </PageWrap>
</template>
