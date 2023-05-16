<script setup lang="ts">
import { reactive } from 'vue'
import Alert from './Alert.vue'

interface Event {
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
  events: [] as Event[],
  success: (content: string) => flux.add(content, 'success'),
  info: (content: string) => flux.add(content, 'info'),
  warning: (content: string) => flux.add(content, 'warning'),
  error: (content: string) => flux.add(content, 'error'),
  show: (content: string, type: 'success' | 'info' | 'warning' | 'error') => {
    flux.add(content, type)
  },
  add: (content: string, type: 'success' | 'info' | 'warning' | 'error') => {
    if (!props.queue)
      flux.events = []

    setTimeout(() => {
      const event = { id: Date.now(), content, type }
      flux.events.push(event)
      setTimeout(() => flux.remove(event), props.timeout)
    }, 100)
  },
  remove: (event: Event) => {
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
  <TransitionGroup
    tag="div"
    class="fixed z-200 grid gap-2 sm:min-w-96"
    :class="{
      'left-1/2 -translate-x-1/2': align === 'center',
      'left-6': align === 'left',
      'right-6': align === 'right',
      'top-4': position === 'top',
      'bottom-6 ': position === 'bottom',
    }"
  >
    <div v-for="event in flux.events" :key="event.id">
      <slot :type="event.type">
        <Alert :type="event.type">
          {{ event.content }}
        </Alert>
      </slot>
    </div>
  </TransitionGroup>
</template>
