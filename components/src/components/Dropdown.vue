<script setup lang="ts">
import type { VNode } from 'vue'
import { nextTick, reactive, ref } from 'vue'

export interface DropdownOption {
  key: string
  label: string
  icon?: string | VNode
}

defineProps<{
  options?: DropdownOption[]
}>()

const emit = defineEmits<{
  (evt: 'select', val: DropdownOption): void
}>()

const target = ref()
const dropdown = ref()

const flux = reactive({
  status: false,
  timeout: undefined as ReturnType<typeof setTimeout> | undefined,
  onMouseenter() {
    flux.status = true
    clearTimeout(flux.timeout)

    nextTick(() => {
      const rect = target.value.getBoundingClientRect()

      const center = window.innerHeight / 2
      const middle = window.innerWidth / 2

      rect.top > center
        ? dropdown.value.style.bottom = 'calc(100% + 0.5rem)'
        : dropdown.value.classList.add('mt-2')

      rect.right > middle
        ? dropdown.value.classList.add('right-0')
        : dropdown.value.classList.add('left-0')
    })
  },
  onMouseleave() {
    flux.timeout = setTimeout(() => flux.status = false, 250)
  },

  select(option: DropdownOption) {
    flux.status = false
    flux.timeout = undefined

    emit('select', option)
  },
})
</script>

<script lang="ts">
export default {
  name: 'UDropdown',
}
</script>

<template>
  <div
    class="relative inline-block text-left"
    @mouseleave="flux.onMouseleave"
  >
    <div
      ref="target"
      class="w-full inline-flex items-center justify-center rounded-md"
      @mouseenter="flux.onMouseenter"
    >
      <slot />
    </div>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="flux.status"
        ref="dropdown"
        class="absolute rounded-lg bg-white z-10 min-w-max shadow-lg dark:bg-slate-800"
        tabindex="-1"
        @mouseenter="flux.onMouseenter"
      >
        <div class="py-1">
          <slot name="options">
            <div class="px-1 py-2 text-sm">
              <template v-for="option in options" :key="option.key">
                <div
                  v-if="option"
                  class="flex cursor-pointer items-center rounded-md py-1 px-3 hover:bg-primary-200 hover:text-primary-600"
                  @click.stop="flux.select(option)"
                >
                  <template v-if="typeof option.icon === 'string'">
                    <div :class="option.icon" class="w-5 text-gray-500" />
                  </template>
                  <template v-else>
                    <component :is="option.icon as VNode" class="w-5" />
                  </template>
                  <span class="ml-2">{{ option.label }}</span>
                </div>
                <div v-else class="border my-2 dark:border-slate-600" />
              </template>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
