<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  icon?: string
  closeable?: boolean
  noIcon?: boolean
  colorful?: boolean
  bordered?: boolean
}>(), {
  type: 'primary',
  icon: '',
  noIcon: false,
  closeable: false,
  colorful: false,
  bordered: false,
})

defineEmits<{
  (evt: 'close'): void
}>()

// TODO: optimize
const computedIcon = computed(() => {
  if (props.noIcon)
    return ''
  if (props.icon)
    return props.icon
  switch (props.type) {
    case 'success':
      return 'i-mdi:check-circle text-success-500'
    case 'info':
      return 'i-mdi:information text-info-500'
    case 'warning':
      return 'i-mdi:alert-circle text-warning-500'
    case 'error':
      return 'i-mdi:close-circle text-error-500'
    case 'primary':
      return 'i-mdi:information-slab-circle text-primary-500'
    case 'secondary':
      return 'i-mdi:information-slab-circle text-secondary-500'
    case 'accent':
      return 'i-mdi:information-slab-circle text-accent-500'
    default:
      return ''
  }
})
</script>

<script lang="ts">
export default {
  name: 'UAlert',
}
</script>

<template>
  <div
    v-bind="$attrs"
    class="max-w-lg flex justify-between rounded-lg px-4 py-3"
    :class="[
      colorful ? `bg-${type}-50 text-${type}-800` : 'bg-white text-gray-700',
      bordered ? 'border border-current' : 'border-none shadow',
    ]"
  >
    <div class="flex">
      <div v-if="!noIcon">
        <div class="mr-3 h-6 w-6" :class="computedIcon" />
      </div>
      <slot />
    </div>
    <div v-if="closeable" class="ml-2 h-6 w-6 flex items-center justify-center">
      <button
        class="i-mdi:close-thick h-4 w-4 cursor-pointer transition hover:scale-125"
        @click="$emit('close')"
      />
    </div>
  </div>
</template>
