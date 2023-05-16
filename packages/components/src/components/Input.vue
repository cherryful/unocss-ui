<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import { computed, reactive } from 'vue'

export interface Props extends InputHTMLAttributes {
  modelValue?: string | number
  label?: string
  type?: string
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  required?: boolean
  errorMessage?: string
  placeholder?: string
  clearable?: boolean
  leftIcon?: string
  rightIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  modelValue: '',
  type: 'text',
  size: 'md',
  disabled: false,
  required: false,
  errorMessage: '',
  placeholder: 'Please input',
  clearable: false,
  leftIcon: '',
  rightIcon: '',
})

const emit = defineEmits<{
  (evt: 'update:modelValue', val: string | number): void
  (evt: 'clear'): void
  (evt: 'clickLeft'): void
  (evt: 'clickRight'): void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

const flux = reactive({
  focused: false,
  clear() {
    inputValue.value = ''
    emit('clear')
  },
})
</script>

<script lang="ts">
export default {
  name: 'UInput',
  inheritAttrs: false,
}
</script>

<template>
  <div
    class="w-full flex flex-col"
    :class="{ 'opacity-60': disabled }"
  >
    <label class="mb-1 text-sm empty:hidden">
      <template v-if="label"> {{ label }} </template>
      <slot v-else />
      <span v-if="required" class="text-error-500">*</span>
    </label>

    <div class="flex">
      <span
        v-if="$slots.prepend"
        class="inline-flex items-center border border-r-0 rounded-l-md px-3 text-sm"
        :class="{
          'py-0.5': size === 'sm',
          'py-1.5': size === 'md',
          'py-2': size === 'lg',
        }"
      >
        <slot name="prepend" />
      </span>
      <div class="relative w-full flex items-center">
        <div v-if="leftIcon" class="absolute left-3 z-10">
          <div class="h-5 w-5" :class="leftIcon" @click="$emit('clickLeft')" />
        </div>
        <input
          v-model="inputValue"
          v-bind="$attrs"
          :type="type"
          :disabled="disabled"
          :placeholder="placeholder"
          class="text-field-input"
          :class=" {
            // size
            'py-1': size === 'sm',
            'py-2': size === 'md',
            'py-3': size === 'lg',
            // icon
            'pl-10': leftIcon,
            'pr-10': (rightIcon && !clearable) || (!rightIcon && clearable),
            'pr-15': rightIcon && clearable,
            'px-3': !leftIcon && !rightIcon,

            'prepend': $slots.prepend,
            'append': $slots.append,
            'danger': errorMessage,
            'cursor-not-allowed': disabled,
          }"
          @focus="flux.focused = true"
          @blur="flux.focused = false"
        >
        <div v-if="rightIcon" class="absolute right-3 z-10">
          <div class="h-5 w-5" :class="rightIcon" @click="$emit('clickRight')" />
        </div>
        <!-- X -->
        <div
          class="absolute z-10" :class="{
            'right-3': clearable && !rightIcon,
            'right-10': clearable && rightIcon,
          }"
        >
          <div
            v-if="modelValue && clearable"
            class="i-mdi:close-circle-outline h-5 w-5 cursor-pointer text-gray-400 duration-300 hover:text-gray-500"
            @click="flux.clear"
          />
        </div>
      </div>
      <span
        v-if="$slots.append"
        class="inline-flex items-center border border-l-0 rounded-r-md px-3 text-sm"
        :class="{
          'py-0.5': size === 'sm',
          'py-1.5': size === 'md',
          'py-2': size === 'lg',
        }"
      >
        <slot name="append" />
      </span>
    </div>
    <div v-if="errorMessage" class="text-error-500 text-xs">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-field-input {
  @apply w-full border border-slate-400 rounded z-2 text-sm;
  @apply bg-white dark:bg-slate-800 leading-tight;
  @apply focus:outline-none focus:ring-1 focus:ring-primary-400 focus:border-primary-400;
  @apply placeholder-gray-400 placeholder:text-sm;
  &.danger {
    @apply border-error-500 mb-1;
    @apply focus:ring-error-500 focus:border-error-500;
  }
  &.prepend {
    @apply rounded-l-none;
  }
  &.append {
    @apply rounded-r-none;
  }
}
</style>
