<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  as?: 'button' | 'a'
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'base' | 'lg'
  disabled?: boolean
  custom?: string
}>(), {
  as: 'button',
  size: 'base',
  type: 'default',
  disabled: false,
  custom: '',
})

const typeClass = computed(() => {
  if (props.type === 'default')
    return 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500'
  return `text-white bg-${props.type}-500 hover:bg-${props.type}-600 focus:ring-${props.type}-500`
})
</script>

<script lang="ts">
export default {
  name: 'UButton',
}
</script>

<template>
  <component
    :is="as"
    v-bind="$attrs"
    type="button"
    :disabled="disabled"
    :aria-disabled="disabled"
    class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md font-sans text-xs font-semibold leading-4 shadow-sm disabled:cursor-not-allowed disabled:opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[typeClass, {
      'px-2 py-1': size === 'sm',
      'px-3 py-2': size === 'base',
      'px-10 py-4': size === 'lg',
    }]"
  >
    <slot />
  </component>
</template>
