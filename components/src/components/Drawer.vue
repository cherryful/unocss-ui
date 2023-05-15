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
      class="transition-all bg-white fixed overflow-y-auto z-50"
      :class="{
        'w-80 h-screen': placement === 'right' || placement === 'left',
        'top-0 -left-80': placement === 'left' && !modelValue,
        'top-0 left-0': placement === 'left' && modelValue,
        'top-0 -right-80': placement === 'right' && !modelValue,
        'top-0 right-0': placement === 'right' && modelValue,
        'w-full h-80': placement === 'top' || placement === 'bottom',
        'left-0 -top-80': placement === 'top' && !modelValue,
        'left-0 top-0': placement === 'top' && modelValue,
        'left-0 -bottom-80': placement === 'bottom' && !modelValue,
        'left-0 bottom-0': placement === 'bottom' && modelValue,
      }"
    >
      <slot />
    </div>
    <div
      v-if="modelValue"
      class="fixed inset-0 z-40"
      aria-hidden="true"
      @click="close"
    >
      <div class="inset-0 absolute bg-gray-500 opacity-75" />
    </div>
  </Teleport>
</template>
