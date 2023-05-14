<script setup lang="ts">
import { ref } from 'vue'
import UToast from '../../../../components/src/components/Toast.vue'

type UToastCtx = InstanceType<typeof UToast>

const toast1 = ref<UToastCtx | null>(null)

const position = ref<'top' | 'bottom' >('top')
const align = ref<'left' | 'center' | 'right'>('center')
</script>

<template>
  <UToast ref="toast1" :queue="false" :timeout="1000" />
  <UToast ref="toast2" v-slot="{ type }">
    <div class="pointer-events-auto max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <div
              class="h-6 w-6"
              :class="{
                'i-mdi:check-circle text-success-400': type === 'success',
                'i-mdi:information-outline text-info-400': type === 'info',
                'i-mdi:alert-outline text-warning-400': type === 'warning',
                'i-mdi:alert-circle-outline text-error-400': type === 'error',
              }"
            />
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              This is the custom {{ type }}  toast!
            </p>
            <p class="mt-1 text-sm text-gray-500">
              Anyone with a link can now view this file.
            </p>
          </div>
        </div>
      </div>
    </div>
  </UToast>
  <UToast ref="toast3" />
  <UToast ref="toast4" :position="position" :align="align" />

  <div class="space-y-4">
    <div class="space-y-2 sm:space-x-4">
      <UButton @click="toast1?.info('This is a no queue toast.')">
        UToast1: no-queue, timeout-1000
      </UButton>
    </div>
    <div class="space-y-2 sm:space-x-4">
      <UButton
        type="success"
        @click="($refs.toast2 as UToastCtx)?.success('This is a custom toast.')"
      >
        UToast2: Custom Slot
      </UButton>
      <UButton
        type="info"
        @click="($refs.toast2 as UToastCtx)?.info('This is a custom toast.')"
      >
        UToast2: Custom Slot
      </UButton>
      <UButton
        type="warning"
        @click="($refs.toast2 as UToastCtx)?.warning('This is a custom toast.')"
      >
        UToast2: Custom Slot
      </UButton>
      <UButton
        type="error"
        @click="($refs.toast2 as UToastCtx)?.error('This is a custom toast.')"
      >
        UToast2: Custom Slot
      </UButton>
    </div>
    <div class="space-y-2 sm:space-x-4">
      <UButton
        type="success"
        @click="($refs.toast3 as UToastCtx).success('This is a warning toast.')"
      >
        UToast3: Success
      </UButton>
      <UButton
        type="info"
        @click="($refs.toast3 as UToastCtx).info('This is a info toast.')"
      >
        UToast3: Info
      </UButton>
      <UButton
        type="warning"
        @click="($refs.toast3 as InstanceType<typeof UToast>).warning('This is a warning toast.')"
      >
        UToast3: Warning
      </UButton>
      <UButton
        type="error"
        @click="($refs.toast3 as UToastCtx).error('This is a error toast.')"
      >
        UToast3: Error
      </UButton>
    </div>
    <div class="space-y-2 sm:space-x-4">
      <UButton
        type="secondary"
        @click="
          position = 'top';
          align = 'center';
          ($refs.toast4 as UToastCtx).info('This is a top-center toast.')
        "
      >
        UToast4: top center
      </UButton>
      <UButton
        type="secondary"
        @click="
          position = 'bottom';
          align = 'center';
          ($refs.toast4 as UToastCtx).info('This is a bottom-center toast.')
        "
      >
        UToast4: bottom center
      </UButton>
      <UButton
        type="secondary"
        @click="
          position = 'top';
          align = 'left';
          ($refs.toast4 as UToastCtx).info('This is a top-left toast.')
        "
      >
        UToast4: top left
      </UButton>
      <UButton
        type="secondary"
        @click="
          position = 'top';
          align = 'right';
          ($refs.toast4 as UToastCtx).info('This is a top-right toast.')
        "
      >
        UToast4: top right
      </UButton>
      <UButton
        type="secondary"
        @click="
          position = 'bottom';
          align = 'left';
          ($refs.toast4 as UToastCtx).info('This is a bottom-left toast.')
        "
      >
        UToast4: bottom left
      </UButton>
      <UButton
        type="secondary"
        @click="
          position = 'bottom';
          align = 'right';
          ($refs.toast4 as UToastCtx).info('This is a bottom-right toast.')
        "
      >
        UToast4: bottom right
      </UButton>
    </div>
  </div>
</template>
