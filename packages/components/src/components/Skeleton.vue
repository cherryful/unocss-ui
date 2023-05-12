<script lang="ts">
export default {
  name: 'USkeleton',
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: 'div' | 'span' | 'button'
}>(), {
  as: 'div',
})
</script>

<template>
  <component
    :is="as"
    v-bind="$attrs"
    class="animate-pulse"
    :class=" {
      'bg-gray-200': !($attrs.class as string)?.includes('bg-'),
    }"
  >
    &#8203;
  </component>
</template>
