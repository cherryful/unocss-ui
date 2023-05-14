<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import { computed, reactive } from 'vue'

export interface Props extends InputHTMLAttributes {
  modelValue?: string
  label?: string
  type?: string
  disabled?: boolean
  required?: boolean
  preIcon?: string
  suffIcon?: string
  errorMessage?: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  modelValue: '',
  type: 'text',
  disabled: false,
  required: false,
  preIcon: '',
  suffIcon: '',
  errorMessage: '',
  placeholder: 'Please input',
})

const emit = defineEmits<{
  (evt: 'update:modelValue', val: string): void
  (evt: 'prepend'): void
  (evt: 'append'): void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

const flux = reactive({
  focused: false,
})
</script>

<script lang="ts">
export default {
  name: 'UInput',
  inheritAttrs: false,
}
</script>

<template>
  <div class="relative w-full flex flex-col" :class="[disabled && 'opacity-60']">
    <label class="text-sm mb-2 font-bold empty:hidden">
      <template v-if="label">{{ label }}</template>
      <slot v-else />
      <span v-if="required" class="text-error-500">*</span>
    </label>

    <div class="w-full flex items-center">
      <div
        v-if="preIcon"
        class="border rounded bg-white dark:bg-slate-800 z-1 h-9 border-r-0 border-slate-400 rounded-r-none px-2 py-1.5"
        :class="{
          'important:border-red-500 important:ring-red-500 mb-1': errorMessage,
        }"
        @click.stop="emit('prepend')"
      >
        <div :class="preIcon" class="h-4.5 w-4.5" />
      </div>
      <span
        v-if="$slots.prepend && !preIcon"
        class="h-9 inline-flex items-center border border-r-0 border-gray-300 px-3 py-1.5 text-gray-500 rounded-l-md sm:text-sm"
      >
        <slot name="prepend" />
      </span>
      <input
        v-model="inputValue"
        v-bind="$attrs"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        class="text-field-input"
        :class=" {
          danger: errorMessage,
          prepend: preIcon || $slots.prepend,
          append: suffIcon || $slots.append,
        }"
        @focus="flux.focused = true"
        @blur="flux.focused = false"
      >
      <div
        v-if="suffIcon"
        class="z-1 h-9 border border-slate-400 rounded bg-white px-2 py-1.5 dark:bg-slate-800 border-l-0 rounded-l-none"
        :class="{
          'important:border-red-500 important:ring-red-500 mb-1': errorMessage,
        }"
        @click.stop="emit('append')"
      >
        <div :class="suffIcon" class="h-5 w-5" />
      </div>
      <span
        v-if="$slots.append && !suffIcon"
        class="h-9 inline-flex items-center border border-l-0 border-gray-300 px-3 py-1.5 text-gray-500 sm:text-sm rounded-r-md"
      >
        <slot name="append" />
      </span>
    </div>

    <div v-if="errorMessage" class="text-xs text-error-500">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-field-input {
  @apply w-full border border-slate-400 rounded px-3 py-1.5 z-2 text-sm h-9;
  @apply bg-white dark:bg-slate-800 leading-tight;
  @apply focus:outline-none focus:ring-1 focus:ring-primary-400 focus:border-primary-400;
  @apply placeholder-gray-400 placeholder:text-sm;
  &.danger {
    @apply border-red-500 mb-1;
    @apply focus:ring-red-500 focus:border-red-500;
  }
  &.prepend {
    @apply rounded-l-none;
  }
  &.append {
    @apply rounded-r-none;
  }
}
</style>
