<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

const props = withDefaults(defineProps<{
  expanded?: boolean
  disabled?: boolean
  iconLeft?: boolean
}>(), {
  expanded: false,
  disabled: false,
  iconLeft: false,
})

const content = ref<HTMLElement | null>(null)

const flux = reactive({
  collapsed: !props.expanded,
  expandedCompleted: false,
  maxHeight: 0,
  toggleExpand() {
    if (props.disabled)
      return

    flux.expandedCompleted = false

    if (flux.collapsed) {
      setTimeout(() => {
        flux.expandedCompleted = true
      }, 300)
    }

    flux.collapsed = !flux.collapsed
    flux.resizeContent()
  },
  resizeContent() {
    flux.maxHeight = flux.collapsed ? 0 : (content.value?.offsetHeight || 0)
  },
})

onMounted(() => flux.resizeContent())
</script>

<script lang="ts">
export default {
  name: 'UCollapse',
}
</script>

<template>
  <div class="border border-gray-100 rounded-md p-4">
    <div
      class="flex items-center"
      :class="[
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        {
          'flex-row-reverse': iconLeft,
        },
      ]"
      @click="flux.toggleExpand"
    >
      <div class="flex-1">
        <slot />
      </div>
      <div
        class="transition transition-transform duration-200 ease-in-out"
        :class="[
          iconLeft ? 'mr-2' : 'ml-2',
          {
            'rotate-180': !flux.collapsed,
          },
        ]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
    <div
      class="transition-all duration-300 ease-in-out"
      :class=" {
        'overflow-y-hidden': !flux.expandedCompleted,
      }"
      :style="{ maxHeight: `${flux.maxHeight}px` }"
    >
      <div ref="content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
