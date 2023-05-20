<script setup>
import { ref } from 'vue'

import USelect from '../../../../packages/components/src/components/Select.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const selectedValue = ref('vue')

const state = ref({
  selectedValue: null,
  disabled: false,
  placeholder: 'Oh, please select',
  filterable: false,
  clearable: false,
  custom: false,
})

const snippets = {
  options: [
    `const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'React', value: 'react' },
  // ...
]`,
    '<USelect v-model="selectedValue" :options="options" />',
  ],
  label: [
    '<USelect v-model="selectedValue" label="favorite" :options="options" />',
  ],
  placeholder: [
    '<USelect v-model="selectedValue" placeholder="Yooooo~" :options="options" />',
  ],
  disabled: [
    '<USelect v-model="selectedValue" :options="options" disabled />',
  ],
  filterable: [
    '<USelect v-model="selectedValue" :options="options" filterable />',
  ],
  clearable: [
    '<USelect v-model="selectedValue" :options="options" clearable />',
  ],
  errorMessage: [
    '<USelect v-model="selectedValue" :options="options" error-message="Some errors have occurred." />',
  ],
  custom: [
`<USelect v-model="selectedValue" :options="options">
  <template #option="{ item, active }">
    <span
      class="mr-2 inline-block h-2 w-2 flex-shrink-0 rounded-full"
      :class="[active ? 'bg-green-400' : 'bg-red-400']"
    />
    {{ item.label }}
  </template>
</USelect>`,
  ],
  other: [
    `<UToast ref="toast" />
<USelect
  v-model="selectedValue"
  :options="options"
  @update:model-value="$refs.toast.info(selectedValue)"
/>`,
  ],
}

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'React', value: 'react' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'UnoCSS', value: 'unocss' },
  { label: 'TailwindCSS', value: 'tailwindcss' },
  { label: 'JQuery', value: 'jquery' },
]
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UToast ref="toast" />
        <USelect
          v-model="state.selectedValue"
          :disabled="state.disabled"
          :placeholder="state.placeholder"
          :filterable="state.filterable"
          :clearable="state.clearable"
          :custom="state.custom"
          :options="options"
          @update:model-value="$refs.toast?.info(`select the option value: ${state.selectedValue}`)"
        >
          <template v-if="state.custom" #option="{ item, active }">
            <span
              class="mr-2 inline-block h-2 w-2 flex-shrink-0 rounded-full"
              :class="[active ? 'bg-green-400' : 'bg-red-400']"
            />
            {{ item.label }}
          </template>
          <template v-if="!state.custom">
            {{ state.selectedValue }}
          </template>
        </USelect>
      </template>
      <template #props>
        <div class="flex flex-wrap gap-2">
          <UCheckbox v-model="state.disabled">
            disabled
          </UCheckbox>
          <UCheckbox v-model="state.filterable">
            filterable
          </UCheckbox>
          <UCheckbox v-model="state.clearable">
            clearable
          </UCheckbox>
          <UCheckbox v-model="state.custom">
            custom option
          </UCheckbox>
        </div>
        <div class="flex items-center gap-2">
          placeholder
          <UInput v-model="state.placeholder" placeholder="placeholder" />
        </div>
      </template>
    </Playground>
    <Sample title="options" :snippets="snippets.options">
      <USelect v-model="selectedValue" :options="options" />
    </Sample>
    <Sample title="label" :snippets="snippets.label">
      <USelect v-model="selectedValue" label="favorite" :options="options" />
    </Sample>
    <Sample title="placeholder" :snippets="snippets.placeholder">
      <USelect v-model="selectedValue" placeholder="Yooooo~" :options="options" />
    </Sample>
    <Sample title="disabled" :snippets="snippets.disabled">
      <USelect v-model="selectedValue" :options="options" disabled />
    </Sample>
    <Sample title="filterable" :snippets="snippets.filterable">
      <USelect v-model="selectedValue" :options="options" filterable />
    </Sample>
    <Sample title="clearable" :snippets="snippets.clearable">
      <USelect v-model="selectedValue" :options="options" clearable />
    </Sample>
    <Sample title="errorMessage" :snippets="snippets.errorMessage">
      <USelect v-model="selectedValue" :options="options" error-message="Some errors have occurred." />
    </Sample>
    <Sample title="" :snippets="snippets.custom">
      <USelect v-model="selectedValue" :options="options">
        <template #option="{ item, active }">
          <span
            class="mr-2 inline-block h-2 w-2 flex-shrink-0 rounded-full"
            :class="[active ? 'bg-green-400' : 'bg-red-400']"
          />
          {{ item.label }}
        </template>
      </USelect>
    </Sample>
    <Sample title="@update:model-value" :snippets="snippets.other">
      <USelect
        v-model="selectedValue"
        :options="options"
        @update:model-value="$refs.toast.info(selectedValue)"
      />
    </Sample>
  </DocWrap>
</template>
