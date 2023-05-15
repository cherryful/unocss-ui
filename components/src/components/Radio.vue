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
</script>

<script lang="ts">
export default {
  name: 'URadio',
}
</script>

<template>
  <label
    :for="uid"
    class="inline-flex items-center select-none font-medium leading-6 text-gray-900"
    :class="[
      disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
      {
        'rounded border-1 p-2 transition-colors duration-150 ease-in-out': bordered,
        'border-gray-300': bordered && !checked && !disabled,
        [`border-${type}-500`]: bordered && checked,
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
      :class="
        [
          `text-${type}-600 focus:ring-${type}-500`,
          {
            'sr-only': hidden,
          },
        ]"
      @change="$emit('change', radioValue)"
    >
    <div :class="{ 'pl-2': $slots.default && !hidden }">
      <slot :checked="checked" />
    </div>
  </label>
</template>
