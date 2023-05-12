<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'base' | 'lg'
  rounded?: 'sm' | 'base' | 'lg' | 'full'
  border?: boolean
  closeable?: boolean
  custom?: string
}>(), {
  type: 'default',
  size: 'base',
  rounded: 'sm',
  border: false,
  closeable: false,
  custom: '',
})

defineEmits<{
  (evt: 'close'): void
}>()
</script>

<script lang="ts">
export default {
  name: 'UTag',
}
</script>

<template>
  <div
    class="inline-block cursor-default whitespace-nowrap text-xs font-medium shadow-sm"
    :class="custom || [[type], {
      'border border-gray-300': border,

      'px-2 py-1': size === 'sm',
      'px-3 py-1.5': size === 'base',
      'px-6 py-3': size === 'lg',

      'rounded-sm': rounded === 'sm',
      'rounded-md': rounded === 'base',
      'rounded-lg': rounded === 'lg',
      'rounded-full': rounded === 'full',
    },
    ]"
  >
    <div class="flex items-center justify-center">
      <div v-if="closeable" class="flex">
        <slot />
        <svg
          class="ml-1 h-4 w-4 cursor-pointer stroke-2 transition-colors duration-150 ease-in-out hover:text-gray-700"
          width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none" role="presentation"
          @click="$emit('close')"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
      <template v-else>
        <slot />
      </template>
    </div>
  </div>
</template>

<style scoped>
.default {
  @apply text-gray-800 bg-gray-100
}
.primary {
  @apply bg-primary-100 text-primary-800
}
.secondary {
  @apply bg-secondary-100 text-secondary-800
}
.accent {
  @apply bg-accent-100 text-accent-800
}
.success {
  @apply bg-success-100 text-success-800
}
.info {
  @apply bg-info-100 text-info-800
}
.warning {
  @apply bg-warning-100 text-warning-800
}
.error {
  @apply bg-error-100 text-error-800
}
</style>
