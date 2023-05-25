<script setup lang="ts">
import { computed } from 'vue'
import uniqueId from 'lodash-es/uniqueId'

const props = withDefaults(defineProps<{
  modelValue?: any
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  checked?: boolean
  disabled?: boolean
  /**
   * for Multiple values
   */
  value?: any
  /**
   * for Single value
   */
  checkedValue?: any
  uncheckedValue?: any
  labelLeft?: boolean
}>(), {
  modelValue: false,
  type: 'primary',
  size: 'md',
  checked: false,
  disabled: false,
  value: null,
  checkedValue: true,
  uncheckedValue: false,
  labelLeft: false,
})

const emit = defineEmits<{
  (evt: 'update:modelValue', val: any): void
}>()

const uid = uniqueId('checkbox-')

const checkValue = computed({
  get: () => {
    // multiple values
    if (props.value)
      return props.modelValue || props.value

    // single value
    if (props.checkedValue && props.modelValue === props.checkedValue)
      return true
    if (props.uncheckedValue && props.modelValue === props.uncheckedValue)
      return false
    return props.modelValue || props.checked
  },
  set: (val) => {
    // multiple values
    if (props.value) {
      emit('update:modelValue', val)
      return
    }

    // single value
    if (props.checkedValue && val) {
      emit('update:modelValue', props.checkedValue)
      return
    }
    else if (props.uncheckedValue && !val) {
      emit('update:modelValue', props.uncheckedValue)
      return
    }

    emit('update:modelValue', val)
  },
})
</script>

<script lang="ts">
export default {
  name: 'UCheckbox',
}
</script>

<template>
  <div class="h-6 flex items-center">
    <template v-if="$slots.default && labelLeft">
      <label
        :for="uid"
        class="mr-2 select-none"
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
      :value="value"
      class="border-gray-300 rounded"
      :class="[
        `text-${type}-400 focus:ring-${type}-500`,
        disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer',
        {
          'h-3 w-3': size === 'sm',
          'h-4 w-4': size === 'md',
          'h-5 w-5': size === 'lg',
        },
      ]"
    >
    <template v-if="$slots.default && !labelLeft">
      <label
        :for="uid"
        class="ml-2 select-none"
        :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
      >
        <slot />
      </label>
    </template>
  </div>
</template>
