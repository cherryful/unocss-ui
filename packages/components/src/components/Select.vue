<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

export interface SelectOption {
  label: string
  value: string | number
  [key: string]: unknown
}

const props = withDefaults(defineProps<{
  label?: string
  modelValue?: string | number | null
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  filterable?: boolean
  options?: Array<SelectOption>
  errorMessage?: string
}>(), {
  label: '',
  modelValue: null,
  placeholder: 'Please select',
  disabled: false,
  clearable: false,
  filterable: false,
  options: () => [],
  errorMessage: '',
})

const emit = defineEmits<{
  (evt: 'update:modelValue', val: string | number | null): void
}>()

const selected = computed({
  get: () => props.modelValue,
  set: (val) => {
    flux.inputValue = selectedLabel(val)
    emit('update:modelValue', val)
  },
})

watch(() => props.modelValue, val => flux.inputValue = selectedLabel(val))

function selectedLabel(val: string | number | null) {
  return props.options?.find(opt => opt.value === val)?.label || ''
}

const filteredOptions = computed(() => {
  if (!props.filterable)
    return props.options
  return props.options?.filter((opt) => {
    return opt.label?.includes(flux.inputValue as string)
  })
})

const flux = reactive({
  show: false,
  inputValue: selectedLabel(props.modelValue),
  onSelect(value: string | number | null) {
    selected.value = value
    flux.show = false
  },
  filter(val: any) {
    if (!props.filterable)
      return
    flux.inputValue = val
    flux.show = true
  },
  toggleMenu() {
    if (props.disabled)
      return
    flux.show = !flux.show
  },
})
</script>

<script lang="ts">
export default {
  name: 'USelect',
}
</script>

<template>
  <div>
    <label id="listbox-label" class="block text-sm font-medium leading-6 text-gray-900">
      {{ label }}
    </label>
    <div
      v-on-click-outside="() => flux.show = false"
      class="relative"
    >
      <input
        type="text"
        class="focus:ring-primary-600 w-full border-0 rounded-md bg-white py-1.5 pl-3 pr-8 text-sm shadow-sm ring-1 ring-inset sm:leading-6 placeholder:text-slate-400 focus:ring-2 focus:ring-inset"
        :class="[
          disabled ? 'cursor-not-allowed opacity-40' : 'cursor-default',
          errorMessage ? 'text-red-500 ring-red-500 focus:ring-red-500' : 'text-gray-700 ring-gray-300 focus:ring-primary-600',
        ]"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="!filterable"
        :value="flux.inputValue"
        @click="() => flux.toggleMenu()"
        @input="($e: any) => {
          flux.show = true
          flux.inputValue = $e.target.value
        }"
      >
      <button
        class="group absolute inset-y-0 right-0 mr-1.5 text-gray-400"
        :class="[disabled ? 'cursor-not-allowed opacity-40' : 'cursor-default']"
        @click="flux.toggleMenu"
      >
        <template v-if="clearable && selected">
          <div
            class="i-mdi:unfold-more-horizontal group-hover:i-mdi:close-circle-outline h-5 w-5 text-gray-400 duration-100 group-hover:h-5 group-hover:w-5 hover:cursor-pointer"
            @click.stop="selected = null"
          />
        </template>
        <template v-else>
          <div class="i-mdi:unfold-more-horizontal h-5 w-5" />
        </template>
      </button>
      <Transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul
          v-if="flux.show && filteredOptions.length"
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" tabindex="-1"
        >
          <li
            v-for="option of filteredOptions" id="listbox-option-0" :key="option.value"
            class="text relative cursor-default select-none py-2 pl-3 duration-100"
            :class="{
              'bg-primary-500 text-white ': modelValue === option.value,
              'hover:bg-primary-500 text-gray-900 hover:text-white': modelValue !== option.value,
            }"
            @click="flux.onSelect(option.value)"
          >
            <slot name="option" :item="option" :active="modelValue === option.value">
              <span class="block truncate font-normal">
                {{ option.label }}
              </span>
              <template v-if="modelValue === option.value">
                <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /> </svg>
                </span>
              </template>
            </slot>
          </li>
        </ul>
      </Transition>
    </div>
    <div v-if="errorMessage" class="text-xs text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>
