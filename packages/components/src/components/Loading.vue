<script setup lang="ts">
import { Fragment, computed, h, nextTick, onMounted, ref, useSlots } from 'vue'
import Spin from './Spin.vue'

withDefaults(defineProps<{
  show?: boolean
}>(), {
  show: true,
})

const slots = useSlots()
// Reference: https://github.com/vuejs/core/discussions/6726
const RenderSlot = computed(() => h(Fragment, slots.default ? slots.default() : []))
const slotWidth = ref(1000) // i don't know why, but it works...

onMounted(() => {
  nextTick(() => {
    if (RenderSlot.value && RenderSlot.value.children && (RenderSlot.value.children as any)[0])
      slotWidth.value = (RenderSlot.value.children as any)[0].el.offsetWidth
  })
})
</script>

<script lang="ts">
export default {
  name: 'ULoading',
}
</script>

<template>
  <template v-if="$slots.default">
    <div class="relative" :style="{ width: `${slotWidth}px` }">
      <div :class="{ 'opacity-30': show }">
        <RenderSlot />
      </div>
      <div class="absolute left-1/2 top-2/4 -translate-x-1/2 -translate-y-1/2">
        <Spin v-if="show" v-bind="$attrs">
          <template #icon>
            <slot name="icon" />
          </template>
          <slot />
        </Spin>
      </div>
    </div>
  </template>
  <template v-else>
    <Spin v-if="show" v-bind="$attrs" />
  </template>
</template>
