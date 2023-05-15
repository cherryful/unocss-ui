<script setup lang="ts">
import { computed } from 'vue'
import { uniqueId } from '../helper'

const props = withDefaults(defineProps<{
  modelValue?: any
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'base' | 'lg'
  checked?: boolean
  disabled?: boolean
  checkedValue?: any
  uncheckedValue?: any
  labelLeft?: boolean
}>(), {
  modelValue: false,
  type: 'primary',
  size: 'base',
  checked: false,
  disabled: false,
  checkedValue: undefined,
  uncheckedValue: undefined,
  labelLeft: false,
})

const emits = defineEmits<{
  (evt: 'update:modelValue', val: any): void
}>()

const uid = uniqueId('checkbox-')

const checkValue = computed({
  get: () => {
    if (props.checkedValue && props.modelValue === props.checkedValue)
      return true
    if (props.uncheckedValue && props.modelValue === props.uncheckedValue)
      return false
    return props.modelValue || props.checked
  },
  set: (val) => {
    if (props.checkedValue && val)
      val = props.checkedValue
    else if (props.uncheckedValue && !val)
      val = props.uncheckedValue
    emits('update:modelValue', val)
  },
})
</script>

<script lang="ts">
export default {
  name: 'UCheckbox',
}
</script>

<template>
  <div class="flex items-center h-6">
    <template v-if="$slots.default && labelLeft">
      <label
        :for="uid"
        class="select-none mr-2"
        :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
      >
        <slot />
      </label>
    </template>
    <input
      :id="uid"
      v-model="checkValue"
      v-bind="$attrs"
      type="checkbox"
      :disabled="disabled"
      class="border-gray-300 rounded"
      :class="[
        `text-${type}-400 focus:ring-${type}-500`,
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer',
        {
          'h-3 w-3': size === 'sm',
          'h-4 w-4': size === 'base',
          'h-5 w-5': size === 'lg',
        },
      ]"
    >
    <template v-if="$slots.default && !labelLeft">
      <label
        :for="uid"
        class="select-none ml-2"
        :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
      >
        <slot />
      </label>
    </template>
  </div>
</template>

<style scoped>
</style>
