<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const props = withDefaults(defineProps<{
  position?: 'left' | 'right' | 'top' | 'bottom' | 'auto'
  trigger?: 'click' | 'hover'
  dissmissable?: boolean
  sustain?: boolean
  hoverAlive?: boolean
}>(), {
  position: 'auto',
  trigger: 'click',
  dissmissable: false,
  sustain: false,
  hoverAlive: false,
})

const emit = defineEmits(['open', 'close'])

const target = ref < HTMLElement | null > (null)
const dropdown = ref< HTMLElement | null >(null)

const flux = reactive({
  inPanel: false,
  status: false,
  onClick: () => {
    props.trigger === 'click' && flux.toggleStatus()
  },
  onMouseenter() {
    props.trigger === 'hover' && flux.open()
  },
  onMouseleave() {
    props.trigger === 'hover' && flux.close()
  },

  toggleStatus() {
    flux.status = !flux.status
    flux.status ? flux.open() : flux.close()
  },

  open() {
    flux.status = true
    emit('open')

    nextTick(() => {
      const rect = target.value!.getBoundingClientRect()

      dropdown.value!.style.left = `${rect.x}px`
      dropdown.value!.style.top = `${rect.y}px`

      let xAxis, yAxis
      if (props.position === 'auto') {
        const center = window.innerHeight / 2
        xAxis = `calc(${rect.width / 2}px - 50%)`
        yAxis = (rect.top > center) ? 'calc(-100% - 0.25rem)' : `calc(${rect.height}px + 0.25rem)`
      }
      else if (props.position === 'left') {
        xAxis = 'calc(-100% - 0.25rem)'
        yAxis = `calc(${rect.height / 2}px - 50%)`
      }
      else if (props.position === 'right') {
        xAxis = `calc(${rect.width}px + 0.25rem)`
        yAxis = `calc(${rect.height / 2}px - 50%)`
      }
      else if (props.position === 'top') {
        xAxis = `calc(${rect.width / 2}px - 50%)`
        yAxis = 'calc(-100% - 0.25rem)'
      }
      else if (props.position === 'bottom') {
        xAxis = `calc(${rect.width / 2}px - 50%)`
        yAxis = `calc(${rect.height}px + 0.25rem)`
      }

      dropdown.value!.style.transform = `translate(${xAxis}, ${yAxis})`
    })
  },

  close() {
    flux.status && emit('close')
    setTimeout(() => flux.status = false, 100)
  },

})
</script>

<script lang="ts">
export default {
  name: 'UPopover',
}
</script>

<template>
  <div
    v-on-click-outside="flux.close"
    class="relative inline-block text-left"
  >
    <div
      ref="target"
      class="w-full inline-flex items-center justify-center rounded-md"
      @click="flux.onClick"
      @mouseenter="flux.onMouseenter"
      @mouseleave="sustain ? null : flux.onMouseleave()"
    >
      <slot />
    </div>

    <Transition
      enter-active-class="transition-opacity duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="(hoverAlive && flux.inPanel) || flux.status"
        ref="dropdown"
        class="fixed left-0 top-0 z-10 min-w-max rounded-lg bg-white shadow-lg dark:bg-slate-800"
        tabindex="-1"
      >
        <div
          class="py-1"
          @mouseenter="flux.inPanel = true"
          @mouseleave="flux.inPanel = false"
          @click="dissmissable ? flux.close() : null"
        >
          <slot name="content" />
        </div>
      </div>
    </Transition>
  </div>
</template>
