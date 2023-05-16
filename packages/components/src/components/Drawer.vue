<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: boolean
  placement?: 'top' | 'right' | 'bottom' | 'left'
}>(), {
  modelValue: false,
  placement: 'left',
})

const emits = defineEmits(['update:modelValue'])

function close() {
  emits('update:modelValue', !props.modelValue)
}

watch(
  () => props.modelValue,
  val => document.body.style.overflow = val ? 'hidden' : 'auto',
)

onUnmounted(() => {
  close()
  document.body.style.overflow = 'auto'
})
</script>

<script lang="ts">
export default {
  name: 'UDrawer',
}
</script>

<template>
  <Teleport to="body">
    <div
      v-bind="$attrs"
      class="fixed z-50 overflow-y-auto bg-white transition-all"
      :class="{
        'h-screen w-80': placement === 'right' || placement === 'left',
        '-left-80 top-0': placement === 'left' && !modelValue,
        'left-0 top-0': placement === 'left' && modelValue,
        '-right-80 top-0': placement === 'right' && !modelValue,
        'right-0 top-0': placement === 'right' && modelValue,
        'h-80 w-full': placement === 'top' || placement === 'bottom',
        '-top-80 left-0': placement === 'top' && !modelValue,
        'top-0 left-0 ': placement === 'top' && modelValue,
        '-bottom-80 left-0': placement === 'bottom' && !modelValue,
        'bottom-0 left-0': placement === 'bottom' && modelValue,
      }"
    >
      <slot />
    </div>
    <div v-if="modelValue" class="fixed inset-0 z-40" aria-hidden="true" @click="close">
      <div class="absolute inset-0 bg-gray-500 opacity-75" />
    </div>
  </Teleport>
</template>
