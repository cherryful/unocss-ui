<script setup lang="ts">
import type { VNode } from 'vue'
import { nextTick, reactive, ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

export interface DropdownOption {
  value: string
  label: string
  icon?: string | VNode
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  options?: DropdownOption[]
  trigger?: 'click' | 'hover'
}>(), {
  options: () => [],
  trigger: 'click',
})

const emit = defineEmits<{
  (evt: 'select', val: DropdownOption): void
}>()

const targetRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)

const flux = reactive({
  show: false,
  timeout: undefined as ReturnType<typeof setTimeout> | undefined,
  showPanel() {
    flux.show = true
    clearTimeout(flux.timeout)

    nextTick(() => {
      if (targetRef.value && dropdownRef.value) {
        const rect = targetRef.value!.getBoundingClientRect()

        const center = window.innerHeight / 2
        const middle = window.innerWidth / 2

        rect.top > center
          ? dropdownRef.value.style.bottom = 'calc(100% + 0.5rem)'
          : dropdownRef.value.classList.add('mt-2')

        rect.right > middle
          ? dropdownRef.value.classList.add('right-0')
          : dropdownRef.value.classList.add('left-0')
      }
    })
  },
  closePanel() {
    flux.timeout = setTimeout(
      () => flux.show = false,
      props.trigger === 'hover' ? 200 : 0,
    )
  },

  select(option: DropdownOption) {
    if (option.disabled)
      return

    flux.show = false
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
    v-on-click-outside="() => trigger === 'click' && flux.closePanel()"
    class="relative inline-block text-left"
    @mouseleave="() => trigger === 'hover' && flux.closePanel()"
  >
    <div
      ref="targetRef"
      class="w-full inline-flex items-center justify-center rounded-md"
      @mouseenter="() => trigger === 'hover' && flux.showPanel()"
      @click="() => trigger === 'click' && flux.showPanel()"
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
        v-if="flux.show"
        ref="dropdownRef"
        class="absolute z-10 min-w-max rounded-lg bg-white shadow-lg dark:bg-slate-800"
        tabindex="-1"
        @mouseenter="flux.showPanel"
      >
        <div class="py-1">
          <!-- <slot name="options"> -->
          <div class="px-1 py-2 text-sm">
            <template v-for="option in options" :key="option.value">
              <div
                v-if="option"
                class="flex cursor-pointer items-center rounded-md px-3 py-1"
                :class="[
                  option.disabled
                    ? 'text-gray-700 opacity-50 cursor-not-allowed'
                    : 'hover:bg-primary-200 hover:text-primary-600',
                ]"
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
              <div v-else class="my-2 border dark:border-slate-600" />
            </template>
          </div>
          <!-- </slot> -->
        </div>
      </div>
    </Transition>
  </div>
</template>
