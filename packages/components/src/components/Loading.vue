<script setup lang="ts">
import Spin from './Spin.vue'

withDefaults(defineProps<{
  show?: boolean
}>(), {
  show: true,
})
</script>

<script lang="ts">
export default {
  name: 'ULoading',
}
</script>

<template>
  <template v-if="!$slots.default">
    <Spin v-if="show" v-bind="$attrs">
      <template v-if="$slots.icon" #icon>
        <slot name="icon" />
      </template>
      <slot />
    </Spin>
  </template>
  <template v-else>
    <div class="relative">
      <div :class="{ 'opacity-30': show }">
        <slot />
      </div>
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spin v-if="show" v-bind="$attrs">
          <template #icon>
            <slot name="icon" />
          </template>
        </Spin>
      </div>
    </div>
  </template>
</template>
