<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  border?: boolean
  closeable?: boolean
}>(), {
  type: 'default',
  size: 'md',
  rounded: 'sm',
  border: false,
  closeable: false,
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
  <div class="flex items-center">
    <div
      class="block cursor-default whitespace-nowrap text-xs font-medium shadow-sm"
      :class="[
        `rounded-${rounded}`,
        type === 'default' ? 'bg-gray-100 text-gray-800' : `bg-${type}-100 text-${type}-800`,
        {
          'border border-gray-300': border,
          'px-2 py-1': size === 'sm',
          'px-3 py-1.5': size === 'md',
          'px-6 py-3': size === 'lg',
        }]"
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
  </div>
</template>
