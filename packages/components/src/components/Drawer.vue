<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: boolean
  placement?: 'top' | 'right' | 'bottom' | 'left'
  width?: 'sm' | 'md' | 'lg' | '1/2' | '1/3' | '1/4' | 'full'
  duration?: '100' | '200' | '300' | '400' | '500' | '600'
  title: string
  header: boolean
}>(), {
  modelValue: false,
  placement: 'left',
  duration: '200',
  width: 'md',
  height: 'md',
  title: 'Drawar Header',
  header: true,
})

const emit = defineEmits(['update:modelValue', 'close'])

watch(
  () => props.modelValue,
  (val) => {
    val && emit('update:modelValue', val)
    document.body.style.overflow = (val ? 'hidden' : 'auto')
  },
)

function close() {
  emit('update:modelValue', false)
  emit('close')
}

onUnmounted(() => {
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
    <!-- FIXME: -->
    <div v-if="modelValue" class="fixed inset-0 z-40" @click="close">
      <div class="absolute inset-0 bg-gray-500 opacity-75" />
    </div>
    <div
      v-bind="$attrs" class="fixed z-50 overflow-y-auto bg-white p-4 transition-all duration-200" :class="[`duration-${duration}`, {
        [`h-screen w-${width}`]: placement === 'right' || placement === 'left',
        [`w-full h-${width}`]: placement === 'top' || placement === 'bottom',

        '-left-full top-0': placement === 'left' && !modelValue,
        'left-0 top-0': placement === 'left' && modelValue,

        '-right-full top-0': placement === 'right' && !modelValue,
        'right-0 top-0': placement === 'right' && modelValue,

        '-top-full left-0': placement === 'top' && !modelValue,
        'top-0 left-0 ': placement === 'top' && modelValue,

        '-bottom-full left-0': placement === 'bottom' && !modelValue,
        'bottom-0 left-0': placement === 'bottom' && modelValue,
      }]"
    >
      <div v-if="header">
        <div class="h-14 w-full flex items-center justify-between">
          <p class="text-xl font-semibold">
            {{ title }}
          </p>
          <div class="h-7 w-7 flex cursor-pointer items-center justify-center rounded-full rounded-full bg-gray-50 p-1 text-gray-600 hover:bg-gray-100 hover:text-gray-800">
            <p class="i-mdi:close h-6 w-6 font-light" @click="close" />
          </div>
        </div>
      </div>
      <slot />
    </div>
  </Teleport>
</template>
