<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  show?: boolean
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  thickness?: number
}>(), {
  show: true,
  type: 'primary',
  thickness: 8,
})

const wrapper = ref<HTMLElement | null>(null)
const spinner = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    if (wrapper.value && spinner.value) {
      const size = wrapper.value.getBoundingClientRect().width / props.thickness
      spinner.value.style.borderWidth = `${size}px`
    }
  })
})
</script>

<script lang="ts">
export default {
  name: 'USpin',
}
</script>

<template>
  <div
    ref="wrapper"
    v-bind="$attrs"
    :class="{
      'w-8 h-8': !$attrs.hasOwnProperty('class'),
    }"
  >
    <slot name="icon">
      <div
        ref="spinner"
        class="inline-block h-full w-full animate-spin border-gray-300 rounded-full bg-transparent"
        :class="[[type]]"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </slot>
  </div>
</template>

<style scoped>
.primary {
  @apply border-r-primary-500
}

.secondary {
  @apply border-r-secondary-500
}

.accent {
  @apply border-r-accent-500
}

.success {
  @apply border-r-success-500
}

.info {
  @apply border-r-info-500
}

.warning {
  @apply border-r-warning-500
}

.error {
  @apply border-r-error-500
}
</style>
