<script setup lang="ts">
import { computed } from 'vue'
import uniqueId from 'lodash-es/uniqueId'

const props = withDefaults(defineProps<{
  modelValue?: any
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  value?: any
  disabled?: boolean
  bordered?: boolean
  hidden?: boolean
  circleColored?: boolean
}>(), {
  modelValue: undefined,
  type: 'primary',
  disabled: false,
  value: undefined,
  bordered: false,
  hidden: false,
  circleColored: false,
})

const emit = defineEmits<{
  (evt: 'update:modelValue', val: unknown): void
}>()

const uid = uniqueId('radio-')

const radioValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
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
    class="inline-flex select-none items-center font-medium leading-6 text-gray-900"
    :class="[
      disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
      {
        'border-1 rounded p-2 transition-colors duration-150 ease-in-out': bordered,
        'border-gray-300': bordered && !checked && !disabled,
        [`border-${type}-500`]: bordered && checked,
      },
    ]"
  >
    <input
      :id="uid"
      v-bind="$attrs"
      v-model="radioValue"
      type="radio"
      :value="value"
      :name="uid"
      :disabled="disabled"
      class="h-4 w-4"
      :class="
        [
          circleColored ? `border-${type}-500` : 'border-gray-300',
          disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
          `text-${type}-600 focus:ring-${type}-500`,
          {
            'hidden sr-only': hidden,
          },
        ]"
    >
    <div :class="{ 'pl-2': $slots.default && !hidden }">
      <slot :checked="checked" />
    </div>
  </label>
</template>
