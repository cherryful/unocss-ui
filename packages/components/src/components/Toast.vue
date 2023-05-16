<script setup lang="ts">
import { reactive } from 'vue'
import Alert from './Alert.vue'

export interface ToastEvent {
  show?: boolean
  id: number
  content: string
  type: 'success' | 'info' | 'warning' | 'error'
}

const props = withDefaults(defineProps<{
  show?: false
  position?: 'top' | 'bottom'
  align?: 'left' | 'center' | 'right'
  timeout?: number
  queue?: boolean
}>(), {
  position: 'top',
  align: 'center',
  timeout: 2500,
  queue: true,
})

const flux = reactive({
  events: [] as ToastEvent[],

  success: (content: string) => flux.add(content, 'success'),
  info: (content: string) => flux.add(content, 'info'),
  warning: (content: string) => flux.add(content, 'warning'),
  error: (content: string) => flux.add(content, 'error'),
  show: (type: 'success' | 'info' | 'warning' | 'error', content: string) => flux.add(content, type),

  add: (content: string, type: 'success' | 'info' | 'warning' | 'error') => {
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
    class="fixed z-200 w-4/5 sm:w-96"
    :class="{
      'left-1/2 -translate-x-1/2': align === 'center',
      'left-6': align === 'left',
      'right-6': align === 'right',
      'top-4': position === 'top',
      'bottom-6 ': position === 'bottom',
    }"
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
        <slot :type="event.type">
          <Alert :type="event.type">
            {{ event.content }}
          </Alert>
        </slot>
      </li>
    </TransitionGroup>
  </div>
</template>
