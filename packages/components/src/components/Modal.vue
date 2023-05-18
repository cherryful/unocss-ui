<script setup lang="ts">
import { computed } from 'vue'

// import { useDOMScrollLock } from '../composables/useDOMScrollLock'

const props = withDefaults(defineProps<{
  modelValue: boolean
  dismissible?: boolean
  dismissButton?: boolean
  width?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'full'
  padded?: boolean
  zIndex?: number
}>(), {
  dismissible: true,
  dismissButton: true,
  padded: true,
  width: 'base',
  zIndex: 30,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

function close() {
  if (props.dismissible)
    isOpen.value = false
  emit('close')
}

// Lock DOM scroll when modelValue is `true`
// !️ We need to use type assertion here because of this issue: https://github.com/johnsoncodehk/volar/issues/2219
// useDOMScrollLock(toRef(props, 'modelValue') as Ref<boolean>)
</script>

<script lang="ts">
export default {
  name: 'UModal',
}
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 overflow-y-auto transition-all ease-in"
      :class="[
        isOpen ? 'visible' : 'invisible duration-100 ease-in',
      ]"
      :style="{
        zIndex,
      }"
    >
      <!-- overlay -->
      <div
        class="fixed inset-0 bg-gray-500 transition-opacity dark:bg-gray-600"
        :class="[
          isOpen ? 'opacity-75 duration-75 ease-out' : 'opacity-0 duration-75 ease-in',
        ]"
        @click.self="close"
      />
      <!-- dialog -->
      <div class="min-h-full flex items-center justify-center p-2 sm:p-6">
        <div
          v-bind="$attrs"
          class="relative inline-block w-full rounded-lg bg-white shadow-xl transition-all dark:bg-gray-900"
          :class="[
            {
              'sm:max-w-sm': width === 'sm',
              'sm:max-w-lg': width === 'base',
              'sm:max-w-xl': width === 'md',
              'sm:max-w-3xl': width === 'lg',
              'sm:max-w-5xl': width === 'xl',
              'sm:max-w-full': width === 'full',
              'p-4 sm:p-6': padded,
            },
            isOpen
              ? 'translate-y-0 opacity-100 duration-300 sm:scale-100'
              : 'translate-y-4 opacity-0 duration-300 sm:translate-y-0 sm:scale-95',
          ]"
          role="dialog"
          aria-modal="true"
        >
          <button
            v-if="dismissButton"
            class="absolute right-4 top-4 h-6 w-6 rounded-full bg-gray-100 p-1 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="close"
            @click="close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div v-if="$slots.header" class="mb-5 text-lg font-bold">
            <slot name="header">
              Header
            </slot>
          </div>
          <slot />
          <div v-if="$slots.footer" class="mt-5 sm:flex sm:flex-row-reverse sm:gap-2">
            <slot name="footer">
              Footer
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
// html.scroll-lock {
  // position: fixed;
  // overflow-y: scroll;
  // top: var(--window-scroll-top);
  // width: 100%;
// }
</style>
