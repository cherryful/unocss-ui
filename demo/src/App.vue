<script setup>
import { h, ref } from 'vue'
import { UAlert, UButton, UCheckbox, UDrawer, UDropdown, UDynamicTags, UInput, ULoading, UModal, UPopover, URadio, USelect, USwitch, UTable, UTag, UToast } from 'unocss-ui'

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

const tableData = [
  { id: 1, name: 'Alice', age: 18, email: 'alice@example.com', status: 'active' },
  { id: 2, name: 'Bob', age: 20, email: 'bob@example.com', status: 'active' },
  { id: 3, name: 'Cindy', age: 22, email: 'cindy@example.com', status: 'inactive' },
]

const bulkActions = [
  {
    name: 'Delete All',
    clicked: keys => alert(keys),
  },
]

const dropdownOptions = [
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

const tagNames = ref(['Vue', 'React', 'Angular'])
</script>

<template>
  <div class="m-5 space-y-5">
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse sm:gap-3" />
    <div class="flex items-center gap-2">
      <span class="i-mdi:github inline-block h-6 w-6" />
      <a href="https://github.com/cherryful/unocss-ui" target="_blank">
        https://github.com/cherryful/unocss-ui
      </a>
    </div>
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
      <UCheckbox v-model="checkboxValue" type="accent" label-left>
        accent
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
    <div class="flex gap-4">
      <UPopover trigger="click" position="right">
        <UButton>
          click-right popover
        </UButton>
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover trigger="hover" position="top">
        <UButton> hover-top popover </UButton>
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
    </div>
    <div class="flex gap-4">
      <UDropdown :options="dropdownOptions">
        <UButton> click dropdown </UButton>
      </UDropdown>
      <UDropdown trigger="hover" :options="dropdownOptions">
        <UButton> hover dropdown </UButton>
      </UDropdown>
    </div>
    <div class="max-w-5xl w-full">
      <UTable header-color :data="tableData" :actions="bulkActions">
        <template #headers>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.name }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.age }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.email }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.status }}
          </td>
        </template>
      </UTable>
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
