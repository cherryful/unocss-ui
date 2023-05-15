<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  color?: 'primary' | 'secondary' | 'accent' | 'error' | 'success' | 'warning' | 'info'
  percentage: number
  scoreLength?: number
  tag?: string
  variant?: 'bar' | 'circle' | 'score'
}>(), {
  color: 'primary',
  scoreLength: 5,
  tag: 'div',
  variant: 'bar',
})

const circleProgress = computed(() => (251 / 100) * props.percentage)

function isScoreActive(i: number) {
  return (i - 1) * (100 / props.scoreLength) <= props.percentage
}
</script>

<script lang="ts">
export default {
  name: 'UProgress',
}
</script>

<template>
  <component :is="tag">
    <template v-if="variant === 'bar'">
      <div class="rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
        <div
          class="rounded-lg h-2"
          :class="[[color]]"
          :style="{ width: `${percentage}%` }"
        />
      </div>
    </template>
    <template v-else-if="variant === 'circle'">
      <svg class="transform -rotate-90" viewBox="0 0 100 100">
        <circle
          class="text-gray-200 dark:text-gray-700"
          stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-width="8" fill="none" cx="50" cy="50" r="40"
        />
        <circle
          :class="[[color]]"
          :style="{ strokeDasharray: `${circleProgress} 252` }"
          stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-width="8" fill="none" cx="50" cy="50" r="40"
        />
      </svg>
    </template>
    <template v-else-if="variant === 'score'">
      <div class="inline-block space-x-1">
        <div
          v-for="index in scoreLength" :key="index"
          class="inline-block h-2 w-3 rounded-sm"
          :class="{
            'bg-gray-200 dark:bg-gray-700': !isScoreActive(index), // TODO: dark mode
            'bg-primary-500': isScoreActive(index) && color === 'primary',
            'bg-secondary-500': isScoreActive(index) && color === 'secondary',
            'bg-success-500': isScoreActive(index) && color === 'success',
            'bg-error-500': isScoreActive(index) && color === 'error',
            'bg-warning-500': isScoreActive(index) && color === 'warning',
            'bg-info-500': isScoreActive(index) && color === 'info',
            'bg-accent-500': isScoreActive(index) && color === 'accent',
          }"
        />
      </div>
    </template>
  </component>
</template>

<style scoped>
.primary {
  @apply bg-primary-500 text-primary-500
}
.secondary {
  @apply bg-secondary-500 text-secondary-500
}
.accent {
  @apply bg-accent-500 text-accent-500
}
.success {
  @apply bg-success-500 text-success-500
}
.info {
  @apply bg-info-500 text-info-500
}
.warning {
  @apply bg-warning-500 text-warning-500
}
.error {
  @apply bg-error-500 text-error-500
}
</style>
