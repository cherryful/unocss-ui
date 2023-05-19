<script setup>
import { ref } from 'vue'

import UInput from '../../../../packages/components/src/components/Input.vue'
import PageWrap from '@/components/PageWrap.vue'
import Playground from '@/components/Playground.vue'
import Sample from '@/components/Sample.vue'

const value = ref('')

const snippets = {
  placeholder: [
    '<UInput v-model="value" placeholder="Custom placeholder" />',
  ],
  label: [
    '<UInput v-model="value" label="Name" />',
  ],
  icon: [
    '<UInput v-model="value" left-icon="i-mdi:magnify" />',
    '<UInput v-model="value" right-icon="i-mdi:magnify" />',
  ],
  clearable: [
    '<UInput v-model="value" clearable />',
  ],
  size: [
    '<UInput v-model="value" size="sm" />',
    '<UInput v-model="value" size="md" />',
    '<UInput v-model="value" size="lg" />',
  ],
  errorMessage: [
    '<UInput v-model="value" error-message="oh!!!!" />',
  ],
  slots: [
    `<UInput v-model="value">
  <template #prepend>
    <div class="i-mdi:lightning-bolt text-lg" />
  </template>
  <template #append>
    <div class="i-mdi:apple text-lg" />
  </template>
</UInput>`,
`<UInput v-model="value">
  <template #prepend>
    https://
  </template>
  <template #append>
    .com
  </template>
</UInput>`,
  ],
  other: [
    '<UInput v-model="value" @keyup.enter="value = \'enter\'" />',
  ],
}

const state = ref({
  value: '',
  clearable: false,
  disabled: false,
  required: false,
  type: 'text',
  size: 'md',
  label: '',
  placeholder: 'Please Input',
  errorMessage: '',
  prepend: '',
  append: '',
  leftIcon: '',
  rightIcon: '',
})

function onClear() {
  console.log('clear')
}

const sizes = ['sm', 'md', 'lg']
const inputTypes = ['text', 'password', 'number']
</script>

<template>
  <PageWrap title="Input Demo">
    <Playground>
      <template #preview>
        <UInput
          v-model="state.value"
          :clearable="state.clearable"
          :required="state.required"
          :disabled="state.disabled"
          :label="state.label"
          :placeholder="state.placeholder"
          :error-message="state.errorMessage"
          :type="state.type"
          :size="state.size"
          :left-icon="state.leftIcon ? 'i-mdi:magnify' : ''"
          :right-icon="state.rightIcon ? 'i-mdi:magnify' : ''"
          @click-left="state.value = 'click left'"
          @click-right="state.value = 'click right'"
          @clear="onClear"
        >
          <template v-if="state.prepend" #prepend>
            {{ state.prepend }}
          </template>
          <template v-if="state.append" #append>
            {{ state.append }}
          </template>
        </UInput>
      </template>
      <template #props>
        <div class="flex flex-wrap gap-2">
          <UCheckbox v-model="state.clearable">
            clearable
          </UCheckbox>
          <UCheckbox v-model="state.disabled">
            disabled
          </UCheckbox>
          <UCheckbox v-model="state.leftIcon">
            left-icon
          </UCheckbox>
          <UCheckbox v-model="state.rightIcon">
            right-icon
          </UCheckbox>
          <UCheckbox v-model="state.required">
            required
          </UCheckbox>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-32">
            type
          </div>
          <URadio
            v-for="item in inputTypes" :key="item"
            v-model="state.type"
            :type="item"
            :value="item"
            @update:model-value="state.type = item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-32">
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
          <div class="w-40">
            label
          </div>
          <UInput v-model="state.label" placeholder="label" clearable />
        </div>
        <div class="flex items-center gap-2">
          <div class="w-40">
            placeholder
          </div>
          <UInput v-model="state.placeholder" placeholder="placeholder" clearable />
        </div>
        <div class="flex items-center gap-2">
          <div class="w-40">
            error-message
          </div>
          <UInput v-model="state.errorMessage" placeholder="error-message" clearable />
        </div>
        <div class="flex items-center gap-2">
          <span>slot</span>
          <UInput v-model="state.prepend" placeholder="prepend" clearable />
          <UInput v-model="state.append" placeholder="append" clearable />
        </div>
      </template>
    </Playground>
    <Sample title="placeholder" :snippets="snippets.placeholder">
      <UInput v-model="value" placeholder="Custom placeholder" />
    </Sample>
    <Sample title="label" :snippets="snippets.label">
      <UInput v-model="value" label="Name" />
    </Sample>
    <Sample title="clearable" :snippets="snippets.clearable">
      <div class="flex flex-col gap-4">
        <UInput v-model="value" clearable />
      </div>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <div class="flex flex-col gap-4">
        <UInput v-model="value" left-icon="i-mdi:magnify" />
        <UInput v-model="value" right-icon="i-mdi:magnify" />
      </div>
    </Sample>
    <Sample title="#prepend & #append" :snippets="snippets.slots">
      <div class="flex flex-col gap-4">
        <UInput v-model="value">
          <template #prepend>
            <div class="i-mdi:lightning-bolt text-lg" />
          </template>
          <template #append>
            <div class="i-mdi:apple text-lg" />
          </template>
        </UInput>
        <UInput v-model="value">
          <template #prepend>
            https://
          </template>
          <template #append>
            .com
          </template>
        </UInput>
      </div>
    </Sample>
    <Sample title="size" :snippets="snippets.size">
      <div class="flex flex-col gap-4">
        <UInput v-model="value" size="sm" />
        <UInput v-model="value" size="md" />
        <UInput v-model="value" size="lg" />
      </div>
    </Sample>
    <Sample title="error-message" :snippets="snippets.errorMessage">
      <UInput v-model="value" error-message="oh!!!!" />
    </Sample>
    <Sample title="other" :snippets="snippets.other">
      <UInput v-model="value" @keyup.enter="value = 'enter'" />
    </Sample>
  </PageWrap>
</template>
