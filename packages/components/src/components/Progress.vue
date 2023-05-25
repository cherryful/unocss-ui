<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: 'primary' | 'secondary' | 'accent' | 'error' | 'success' | 'warning' | 'info'
  percentage: number
  scoreLength?: number
  tag?: string
  variant?: 'bar' | 'circle' | 'score'
}>(), {
  type: 'primary',
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
      <div class="overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
        <div
          v-bind="$attrs"
          class="h-2 rounded-lg"
          :class="`bg-${type}-500 text-${type}-500`"
          :style="{ width: `${percentage}%` }"
        />
      </div>
    </template>
    <template v-else-if="variant === 'circle'">
      <svg class="-rotate-90" viewBox="0 0 100 100">
        <circle
          class="text-gray-200 dark:text-gray-700"
          stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-width="8" fill="none" cx="50" cy="50" r="40"
        />
        <circle
          :class="`bg-${type}-500 text-${type}-500`"
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
            'bg-gray-200': !isScoreActive(index),
            [`bg-${type}-500`]: isScoreActive(index),
          }"
        />
      </div>
    </template>
  </component>
</template>
