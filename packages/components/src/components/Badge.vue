<script setup lang="ts">
// TODO: Update component and demo
withDefaults(defineProps<{
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  content?: string
}>(), {
  type: 'default',
  size: 'md',
  content: '',
})
</script>

<script lang="ts">
export default {
  name: 'UBadge',
}
</script>

<template>
  <div class="relative cursor-default">
    <slot />
    <p
      v-if="content"
      class="absolute flex translate-x-1/2 items-center justify-center rounded-full object-cover text-white" :class="[
        [type],
        {
          'text-[8px] p-[2px] -top-1 right-0  aspect-square': size === 'sm',
          'px-1 py-0.5 text-xs -top-1/2 -right-1  aspect-square': size === 'md',
          'px-1.5 py-[3px] text-sm -top-1/3 -right-1/4': size === 'lg',
        },
      ]" :style="{ lineHeight: '1' }"
    >
      {{ content }}
    </p>
    <span
      v-else class="absolute translate-x-1/2 rounded-full text-white" :class="[
        [type],
        {
          'h-2 w-2 top-0.5 right-0': size === 'sm',
          'h-3 w-3 top-0 -right-0.5': size === 'md',
          'h-4 w-4 -top-1 -right-1': size === 'lg',
        },
      ]"
    />
  </div>
</template>

<style scoped>
.default {
  @apply text-black bg-gray-100
}

.primary {
  @apply text-white bg-primary-500 bg-opacity-80
}

.secondary {
  @apply text-white bg-secondary-500
}

.accent {
  @apply text-white bg-accent-500
}

.success {
  @apply text-white bg-success-500
}

.info {
  @apply text-white bg-info-500
}

.warning {
  @apply text-white bg-warning-500
}

.error {
  @apply text-white bg-error-500
}
</style>
