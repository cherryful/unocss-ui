<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  icon?: string
  value?: any
}>(), {
  title: '',
  icon: undefined,
  value: undefined,
})
</script>

<script lang="ts">
export default {
  name: 'UTabPane',
}
</script>

<template>
  <div v-bind="$attrs">
    <slot />
  </div>
</template>
