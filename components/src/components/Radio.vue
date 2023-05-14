<script setup lang="ts">
import { computed } from 'vue'
import { uniqueId } from '../helper'

const props = withDefaults(defineProps<{
  modelValue?: string | number | boolean | any
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  value?: string | number | boolean | any
  disabled?: boolean
  options?: Array<{
    title: string
    value: string
  }>
  bordered?: boolean
  hidden?: boolean
}>(), {
  modelValue: undefined,
  type: 'primary',
  disabled: false,
  value: undefined,
  options: () => [],
  bordered: false,
  hidden: false,
})

const emits = defineEmits<{
  (evt: 'update:modelValue', val: unknown): void
  (evt: 'change', val: unknown): void
}>()

const uid = uniqueId('radio-group-')

const radioValue = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})

const checked = computed(() => props.value === radioValue.value)

const themes = {
  primary: {
    base: 'text-primary-600 focus:ring-primary-500',
    border: 'border-primary-500',
  },
  secondary: {
    base: 'text-secondary-600 focus:ring-secondary-500',
    border: 'border-secondary-500',
  },
  accent: {
    base: 'text-accent-600 focus:ring-accent-500',
    border: 'border-accent-500',
  },
  success: {
    base: 'text-success-600 focus:ring-success-500',
    border: 'border-success-500',
  },
  info: {
    base: 'text-info-600 focus:ring-info-500',
    border: 'border-info-500',
  },
  warning: {
    base: 'text-warning-600 focus:ring-warning-500',
    border: 'border-warning-500',
  },
  error: {
    base: 'text-error-600 focus:ring-error-500',
    border: 'border-error-500',
  },
}
</script>

<script lang="ts">
export default {
  name: 'URadio',
  inheritAttrs: false,
}
</script>

<template>
  <label
    :for="uid"
    class="inline-flex items-center text-sm font-medium leading-6 text-gray-900"
    :class="[
      disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
      {
        'rounded border-1 p-2 transition-colors duration-150 ease-in-out': bordered,
        'border-gray-300': bordered && !checked && !disabled,
        [themes[type].border]: bordered && checked,
      },
    ]"
  >
    <input
      v-bind="$attrs"
      :id="uid"
      v-model="radioValue"
      type="radio"
      :value="value"
      :name="uid"
      :disabled="disabled"
      class="h-4 w-4 border-gray-300"
      :class="[themes[type].base, {
        'sr-only': hidden,
      }]"
      @change="$emit('change', radioValue)"
    >
    <div :class="{ 'pl-2': $slots.default && !hidden }">
      <slot :checked="checked" />
    </div>
  </label>
</template>
