<script setup lang="ts">
withDefaults(defineProps<{
  show?: boolean
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  thickness?: number
}>(), {
  show: true,
  type: 'primary',
  thickness: 5,
})
</script>

<script lang="ts">
export default {
  name: 'USpin',
}
</script>

<template>
  <div
    v-bind="$attrs" :class="{
      'h-8 w-8': !$attrs.hasOwnProperty('class'),
    }"
  >
    <slot name="icon">
      <div
        class="inline-block h-full w-full animate-spin border-gray-300 rounded-full bg-transparent"
        :class="[`border-r-${type}-500`, `border-${thickness}`]"
      >
        <span class="sr-only">loading</span>
      </div>
    </slot>
  </div>
</template>
