<script setup lang="ts">
import { reactive } from 'vue'
import Alert from './Alert.vue'

export type ToastType = 'success' | 'info' | 'warning' | 'error'
export interface ToastEvent {
  show?: boolean
  id: number
  content: string
  type: ToastType
}

const props = withDefaults(defineProps<{
  show?: false
  position?: 'top' | 'bottom'
  align?: 'left' | 'center' | 'right'
  timeout?: number
  queue?: boolean
  zIndex?: number
  closeable?: boolean
}>(), {
  position: 'top',
  align: 'center',
  timeout: 2500,
  queue: true,
  zIndex: 100,
  closeable: false,
})

const flux = reactive({
  events: [] as ToastEvent[],

  success: (content: string) => flux.add('success', content),
  info: (content: string) => flux.add('info', content),
  warning: (content: string) => flux.add('warning', content),
  error: (content: string) => flux.add('error', content),
  show: (type: ToastType, content: string) => flux.add(type, content),

  add: (type: ToastType, content: string) => {
    if (!props.queue)
      flux.events = []

    setTimeout(() => {
      const event = { id: Date.now(), content, type }
      flux.events.push(event)
      setTimeout(() => flux.remove(event), props.timeout)
    }, 100)
  },
  remove: (event: ToastEvent) => {
    flux.events = flux.events.filter(e => e.id !== event.id)
  },
})

defineExpose({
  show: flux.show,
  success: flux.success,
  info: flux.info,
  warning: flux.warning,
  error: flux.error,
})
</script>

<script lang="ts">
export default {
  name: 'UToast',
}
</script>

<template>
  <div
    v-show="flux.events.length"
    class="fixed w-4/5 sm:w-96"
    :class="{
      'left-1/2 -translate-x-1/2': align === 'center',
      'left-6': align === 'left',
      'right-6': align === 'right',
      'top-4': position === 'top',
      'bottom-6 ': position === 'bottom',
    }"
    :style="{ zIndex }"
  >
    <TransitionGroup
      tag="ul"
      enter-active-class="transition ease-out duration-200"
      leave-active-class="transition ease-in duration-200 absolute w-full"
      :enter-class="position === 'bottom'
        ? 'transform translate-y-3 opacity-0'
        : 'transform -translate-y-3 opacity-0'"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-class="transform translate-y-0 opacity-100"
      :leave-to-class="position === 'bottom'
        ? 'transform translate-y-1/4 opacity-0'
        : 'transform -translate-y-1/4 opacity-0'"
      move-class="ease-in-out duration-200"
      class="inline-block w-full"
    >
      <li
        v-for="event in flux.events" :key="event.id"
        :class="{
          'pb-2': position === 'bottom',
          'pt-2': position === 'top',
        }"
      >
        <slot :type="event.type" :content="event.content">
          <Alert :type="event.type" :closeable="closeable" @close="flux.remove(event)">
            {{ event.content }}
          </Alert>
        </slot>
      </li>
    </TransitionGroup>
  </div>
</template>
