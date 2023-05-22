<script setup>
import { ref } from 'vue'
import UToast from '../../../../packages/components/src/components/Toast.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

// for typescript
// type UToastCtx = InstanceType<typeof UToast>
// const toast = ref<UToastCtx | null>(null)

const snippets = {
  base: [
    `<UToast ref="toast_basic" />
<UButton @click="$refs.toast_basic?.show('success', 'It is simple to use the toast.')">
  show
</UButton>`,
  ],
  type: [
    `<UToast ref="toast_type" />

<div class="space-x-4 space-y-3">
  <UButton type="success" @click="$refs.toast_type?.success('This is the success toast.')">
    success
  </UButton>
  <UButton type="info" @click="$refs.toast_type?.info('This is the info toast.')">
    info
  </UButton>
  <UButton type="warning" @click="$refs.toast_type?.warning('This is the warning toast.')">
    warning
  </UButton>
  <UButton type="error" @click="$refs.toast_type?.error('This is the error toast.')">
    error
  </UButton>
</div>`,
  ],
  timeout: [
    `<UToast ref="toast_timeout" :timeout="500" />
<UButton @click="$refs.toast_timeout?.info('This toast will disappear after 500ms.')">
  500ms
</UButton>`,
  ],
  queue: [
    `<UToast ref="toast_queue" :queue="false" />
<UButton @click="$refs.toast_queue.success('This is the no queue toast.')">
  no queue
</UButton>`,
  ],
  custom: [
`<UToast ref="toast_custom" v-slot="{ type }">
  <div class="pointer-events-auto max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
    <div class="p-4">
      <div class="flex items-start">
        <div class="shrink-0">
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
            This is the custom {{ type }}  toast.
          </p>
          <p class="mt-1 text-sm text-gray-500">
            Anyone with a link can now view this file.
          </p>
        </div>
      </div>
    </div>
  </div>
</UToast>
<div class="space-x-4 space-y-3">
  <UButton
    type="success"
    @click="$refs.toast_custom.success('This is the success toast.')"
  >
    success
  </UButton>
  <UButton
    type="info"
    @click="$refs.toast_custom.info('This is the info toast.')"
  >
    info
  </UButton>
  <UButton
    type="warning"
    @click="$refs.toast_custom.warning('This is the warning toast.')"
  >
    warning
  </UButton>
  <UButton
    type="error"
    @click="$refs.toast_custom.error('This is the error toast.')"
  >
    error
  </UButton>
</div>`,
  ],
  placement: [
    `<UToast ref="toast_top_left" position="top" align="left" />
<UButton @click="$refs.toast_top_left?.success('This is the top left toast.')">
  top-left
</UButton>`,
    `<UToast ref="toast_top_right" position="top" align="right" />
<UButton @click="$refs.toast_top_right?.info('This is the top right toast.')">
  top-right
</UButton>`,
    `<UToast ref="toast_bottom_left" position="bottom" align="left" />
<UButton @click="$refs.toast_bottom_left?.warning('This is the bottom left toast.')">
  bottom-left
</UButton>`,
    `<UToast ref="toast_bottom_right" position="bottom" align="right" />
<UButton @click="$refs.toast_bottom_right?.error('This is the bottom right toast.')">
  bottom-right
</UButton>`,
  ],
}

const state = ref({
  type: 'success',
  timeout: 2500,
  position: 'top',
  align: 'left',
  content: 'This toast is very simple and easy to use.',
  queue: true,
  custom: false,
})

const types = ['success', 'info', 'warning', 'error']
const positions = ['top', 'bottom']
const aligns = ['left', 'center', 'right']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UToast
          ref="toast"
          v-slot="{ type }"
          :type="state.type"
          :timeout="state.timeout"
          :queue="state.queue"
          :position="state.position"
          :align="state.align"
        >
          <template v-if="state.custom">
            <div class="pointer-events-auto max-w-sm w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div class="p-4">
                <div class="flex items-start">
                  <div class="shrink-0">
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
                      This is the custom
                      <span
                        class="font-bold"
                        :class="{
                          'text-success-400': type === 'success',
                          'text-info-400': type === 'info',
                          'text-warning-400': type === 'warning',
                          'text-error-400': type === 'error',
                        }"
                      >
                        {{ type }}
                      </span>
                      toast.
                    </p>
                    <p class="mt-1 text-sm text-gray-500">
                      Anyone with a link can now view this file.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </UToast>
        <UButton @click="$refs.toast.show(state.type, state.content)">
          show
        </UButton>
      </template>
      <template #props>
        <div class="flex flex-wrap gap-2">
          <UCheckbox v-model="state.queue">
            queue
          </UCheckbox>
          <UCheckbox v-model="state.custom">
            custom content
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-20">
            type
          </div>
          <URadio
            v-for="item in types" :key="item"
            v-model="state.type"
            :type="item"
            :value="item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-20">
            position
          </div>
          <URadio
            v-for="item in positions" :key="item"
            v-model="state.position"
            :type="item"
            :value="item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-20">
            align
          </div>
          <URadio
            v-for="item in aligns" :key="item"
            v-model="state.align"
            :type="item"
            :value="item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-20">
            content
          </div>
          <UInput v-model="state.content" placeholder="content" clearable />
        </div>
        <div class="flex items-center">
          <div class="w-20">
            timeout
          </div>
          <div class="w-36">
            <UInput v-model="state.timeout" placeholder="timeout" type="number" />
          </div>
        </div>
      </template>
    </Playground>
    <Sample title="Base" :snippets="snippets.base">
      <UToast ref="toast_basic" />
      <UButton @click="$refs.toast_basic?.show('success', 'It is simple to use the toast.')">
        show
      </UButton>
    </Sample>
    <Sample title="Type" :snippets="snippets.type">
      <UToast ref="toast_type" />
      <div class="flex gap-4">
        <UButton type="success" @click="$refs.toast_type?.success('This is the success toast.')">
          success
        </UButton>
        <UButton type="info" @click="$refs.toast_type?.info('This is the info toast.')">
          info
        </UButton>
        <UButton type="warning" @click="$refs.toast_type?.warning('This is the warning toast.')">
          warning
        </UButton>
        <UButton type="error" @click="$refs.toast_type?.error('This is the error toast.')">
          error
        </UButton>
      </div>
    </Sample>
    <Sample title="Custom" :snippets="snippets.custom">
      <UToast ref="toast_custom" v-slot="{ type }">
        <div class="pointer-events-auto w-full overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="flex items-start p-4">
            <div class="shrink-0">
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
                This is the custom {{ type }}  toast.
              </p>
              <p class="mt-1 text-sm text-gray-500">
                Anyone with a link can now view this file.
              </p>
            </div>
          </div>
        </div>
      </UToast>
      <div class="flex gap-4">
        <UButton
          type="success"
          @click="$refs.toast_custom.success('This is the success toast.')"
        >
          success
        </UButton>
        <UButton
          type="info"
          @click="$refs.toast_custom.info('This is the info toast.')"
        >
          info
        </UButton>
        <UButton
          type="warning"
          @click="$refs.toast_custom.warning('This is the warning toast.')"
        >
          warning
        </UButton>
        <UButton
          type="error"
          @click="$refs.toast_custom.error('This is the error toast.')"
        >
          error
        </UButton>
      </div>
    </Sample>
    <Sample title="Timeout" :snippets="snippets.timeout">
      <UToast ref="toast_timeout" :timeout="500" />
      <div class="flex gap-4">
        <UButton @click="$refs.toast_timeout?.info('This toast will disappear after 500ms.')">
          500 ms
        </UButton>
      </div>
    </Sample>
    <Sample title="No Queue" :snippets="snippets.queue">
      <UToast ref="toast_queue" :queue="false" />
      <div class="flex gap-4">
        <UButton @click="$refs.toast_queue.success('This is the no queue toast.')">
          no queue
        </UButton>
      </div>
    </Sample>
    <Sample title="Placement" :snippets="snippets.placement">
      <div class="flex gap-4">
        <UToast ref="toast_top_left" position="top" align="left" />
        <UButton @click="$refs.toast_top_left?.success('This is the top left toast.')">
          top-left
        </UButton>
        <UToast ref="toast_top_right" position="top" align="right" />
        <UButton @click="$refs.toast_top_right?.info('This is the top right toast.')">
          top-right
        </UButton>
        <UToast ref="toast_bottom_left" position="bottom" align="left" />
        <UButton @click="$refs.toast_bottom_left?.warning('This is the bottom left toast.')">
          bottom-left
        </UButton>
        <UToast ref="toast_bottom_right" position="bottom" align="right" />
        <UButton @click="$refs.toast_bottom_right?.error('This is the bottom right toast.')">
          bottom-right
        </UButton>
      </div>
    </Sample>
  </DocWrap>
</template>
