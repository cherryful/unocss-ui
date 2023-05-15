<script lang="ts" setup>
import { provide, reactive, useSlots } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: number | string | null
  full?: boolean
  type?: 'card' | 'flex'
}>(), {
  modelValue: null,
  full: false,
  type: 'card',
})

const emits = defineEmits(['update:modelValue'])

provide('tabs', { value: props.modelValue })

const slots = useSlots()
const defaultSlot = slots.default?.()

const flux = reactive({
  tab: [] as any[],
  activeValue(tab: any, idx: number) {
    if (typeof props.modelValue === 'number')
      return idx
    if (typeof props.modelValue === 'string')
      return tab.value
  },
  selectTab(tab: any, idx: number) {
    if (typeof props.modelValue === 'number')
      emits('update:modelValue', idx)
    if (typeof props.modelValue === 'string')
      emits('update:modelValue', tab.value)
  },
})

if (defaultSlot) {
  for (let i = 0; i < defaultSlot.length; i++)
    flux.tab.push(defaultSlot[i].props)
}

function Render() {
  if (slots.default) {
    if (typeof props.modelValue === 'number')
      return slots.default()[props.modelValue]
    if (typeof props.modelValue === 'string' && defaultSlot) {
      for (let i = 0; i < defaultSlot.length; i++) {
        const tab = defaultSlot[i]
        if (tab.props?.value === props.modelValue)
          return slots.default()[i]
      }
    }
  }
}
</script>

<script lang="ts">
export default {
  name: 'UTabs',
}
</script>

<template>
  <div class="w-full px-3">
    <div class="flex items-center">
      <div v-if="$slots.prefix" class="mr-3 text-gray-600">
        <slot name="prefix" />
      </div>
      <div
        v-for="(tab, idx) in flux.tab" :key="idx"
        class="tab"
        :class="{
          'active': flux.activeValue(tab, idx) === modelValue,
          'w-full justify-center': type === 'flex',
        }"
        @click="flux.selectTab(tab, idx)"
      >
        <span> {{ tab?.title }} </span>
        <span class="inline-block h-5 w-5 ml-1" :class="tab?.icon" />
      </div>
    </div>
    <div class="p-3">
      <Render />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  @apply flex items-center cursor-pointer my-2 px-4 pt-4 pb-3 border-b-2 border-transparent;
  @apply text-sm font-medium uppercase leading-tight text-neutral-500;
  &.active {
    @apply text-primary-500 border-primary-500;
  }
}
</style>
