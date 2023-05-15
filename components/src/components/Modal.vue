<script setup lang="ts">
import { computed } from 'vue'

// import { useDOMScrollLock } from '../composables/useDOMScrollLock'

const props = withDefaults(defineProps<{
  modelValue: boolean
  dismissible?: boolean
  dismissButton?: boolean
  size?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'full'
  padded?: boolean
}>(), {
  dismissible: true,
  dismissButton: true,
  padded: true,
  size: 'base',
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})

function close() {
  if (props.dismissible)
    isOpen.value = false
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
      class="fixed inset-0 overflow-y-auto transition-all z-30 ease-in"
      :class="[
        isOpen ? 'visible' : 'invisible ease-in duration-100',
      ]"
    >
      <!-- overlay -->
      <div
        class="fixed inset-0 bg-gray-500 transition-opacity dark:bg-gray-600"
        :class="[
          isOpen ? 'ease-out duration-75 opacity-75' : 'ease-in duration-75 opacity-0',
        ]"
        @click.self="close"
      />
      <!-- dialog -->
      <div class="flex items-center justify-center min-h-full p-2 sm:p-6">
        <div
          class="relative bg-white transition-all inline-block rounded-lg transform shadow-xl dark:bg-gray-900"
          :class="[
            {
              'w-full sm:max-w-sm': size === 'sm',
              'w-full sm:max-w-lg': size === 'base',
              'w-full sm:max-w-xl': size === 'md',
              'w-full sm:max-w-3xl': size === 'lg',
              'w-full sm:max-w-5xl': size === 'xl',
              'w-full': size === 'full',
              'p-4 sm:p-6': padded,
            },
            isOpen
              ? 'duration-300 opacity-100 translate-y-0 sm:scale-100'
              : 'duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
          ]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <button
            v-if="dismissButton"
            class="absolute w-6 focus:outline-none focus:ring-2 h-6 rounded-full right-4 top-4 bg-gray-100 p-1 text-gray-700 dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-300 focus:ring-gray-500 dark:hover:bg-gray-700"
            aria-label="close"
            @click="close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <slot />
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
