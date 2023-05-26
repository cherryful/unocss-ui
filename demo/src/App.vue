<script setup>
import { ref } from 'vue'

import { UAlert, UButton, UCheckbox, UDrawer, UDynamicTags, UInput, ULoading, UModal, URadio, USelect, USwitch, UTag, UToast } from 'unocss-ui'

const drawer = ref(false)
const modal = ref(false)

const checkboxValue = ref(true)
const switchValue = ref(true)
const radioValue = ref('primary')
const inputValue = ref('')
const selectedValue = ref('')

const welcome = ref('hi! gratulation to you! you can use this ui lib!')

const selectOptions = [
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

const tagNames = ref(['Vue', 'React', 'Angular'])
</script>

<template>
  <div class="m-5 space-y-5">
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse sm:gap-3" />
    <div class="space-x-4">
      <UAlert type="success">
        {{ welcome }}
      </UAlert>
    </div>
    <div class="flex gap-3">
      <UButton type="primary" @click="$refs.toast?.success(welcome)">
        Show Toast
      </UButton>
      <UButton type="secondary" @click="modal = true">
        Show Modal
      </UButton>
      <UButton type="accent" @click="drawer = true">
        Show Drawer
      </UButton>
    </div>
    <div class="flex gap-4">
      <ULoading type="primary" />
      <ULoading type="secondary" />
      <ULoading type="accent" />
      <ULoading type="success" />
      <ULoading type="info" />
      <ULoading type="warning" />
      <ULoading type="error" />
    </div>
    <div class="flex gap-4">
      <UTag type="primary">
        Good
      </UTag>
      <UTag type="secondary">
        Nice
      </UTag>
      <UTag type="accent">
        Well
      </UTag>
    </div>
    <div class="flex gap-4">
      <UDynamicTags v-model="tagNames" />
    </div>
    <div class="flex gap-4">
      <UCheckbox v-model="checkboxValue" type="primary">
        primary
      </UCheckbox>
      <UCheckbox v-model="checkboxValue" type="secondary">
        secondary
      </UCheckbox>
      <UCheckbox v-model="checkboxValue" type="success" label-left>
        secondary
      </UCheckbox>
    </div>
    <div class="flex gap-4">
      <USwitch v-model="switchValue" type="primary">
        primary
      </USwitch>
      <USwitch v-model="switchValue" type="secondary">
        success
      </USwitch>
    </div>
    <div class="flex gap-4">
      <URadio v-model="radioValue" value="primary" type="primary">
        primary
      </URadio>
      <URadio v-model="radioValue" value="secondary" type="secondary">
        secondary
      </URadio>
    </div>
    <div class="flex items-center gap-4">
      <USelect
        v-model="selectedValue"
        :options="selectOptions"
        clearable
      />
      <UInput
        v-model="inputValue"
        placeholder="Yo~~~~~~~~~~~~~~~"
      />
    </div>
  </div>

  <UModal v-model="modal">
    <div class="text-xl">
      {{ welcome }}
    </div>
  </UModal>

  <UDrawer v-model="drawer" placement="bottom">
    <div class="h-full w-full flex items-center justify-center p-3 text-xl">
      {{ welcome }}
    </div>
  </UDrawer>

  <UToast ref="toast" />
</template>
