<script setup lang="ts">
withDefaults(defineProps<{
  align?: 'left' | 'right' | 'center'
  dashed?: boolean
  thickness: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
}>(), {
  align: 'center',
  dashed: false,
  thickness: 2,
})
</script>

<script lang="ts">
export default {
  name: 'UDivider',
}
</script>

<template>
  <div class="w-full" v-bind="$attrs">
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <div
          class="w-full border-t border-t-1 border-gray-300"
          :class="[`border-t-${thickness}`, { 'border-dashed': dashed }]"
        />
      </div>
      <div
        class="relative flex"
        :class="{
          'justify-center': align === 'center',
          'justify-end': align === 'right',
          'justify-start': align === 'left',
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
