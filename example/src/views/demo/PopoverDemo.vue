<script setup>
import { ref } from 'vue'

import UPopover from '../../../../packages/components/src/components/Popover.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const state = ref({
  position: 'auto',
  trigger: 'click',
  dissmissable: false,
  sustain: false,
  hoverAlive: false,
  event: false,
})

const snippets = {
  trigger: [
`<UPopover trigger="hover">
  hover
  <template #content>
    <div class="px-4 py-2">
      The content of the UPopover.
    </div>
  </template>
</UPopover>`,
`<UPopover trigger="click">
  click
  <template #content>
    <div class="px-4 py-2">
      The content of the UPopover.
    </div>
  </template>
</UPopover>`,
  ],
  position: [
`<UPopover trigger="hover">
  auto
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,

`<UPopover trigger="hover" position="left">
  left
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,
`<UPopover trigger="hover" position="right">
  right
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,
`<UPopover trigger="hover" position="top">
  top
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,
`<UPopover trigger="hover" position="bottom">
  bottom
  <template #content>
    <div class="px-4 py-2">
      The content of the Popover.
    </div>
  </template>
</UPopover>`,
  ],
  dissmissable: [],
  sustain: [],
  hoverAlive: [],
  events: [],
}

const positions = ['auto', 'left', 'right', 'top', 'bottom']
const triggers = ['click', 'hover']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UPopover
          :position="state.position"
          :trigger="state.trigger"
          :dissmissable="state.dissmissable"
          :sustain="state.sustain"
          :hover-alive="state.hoverAlive"
          @open="state.event && $refs.toast?.info('open')"
          @close="state.event && $refs.toast?.info('close')"
        >
          <UButton>
            {{ state.trigger }}
          </UButton>
          <template #content>
            <div class="px-4 py-2">
              The content of the UPopover.
            </div>
          </template>
        </UPopover>
      </template>
      <template #props>
        <div class="flex gap-3">
          <UCheckbox v-model="state.dissmissable">
            dissmissable
          </UCheckbox>
          <UCheckbox v-model="state.sustain">
            sustain
          </UCheckbox>
          <UCheckbox v-model="state.hoverAlive">
            hover-alive
          </UCheckbox>
          <UCheckbox v-model="state.event">
            with event
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
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
          <div class="w-16">
            trigger
          </div>
          <URadio
            v-for="item in triggers" :key="item"
            v-model="state.trigger"
            :type="item"
            :value="item"
          >
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>
    <Sample title="trigger" :snippets="snippets.trigger">
      <div class="flex gap-4">
        <UPopover trigger="hover">
          hover
          <template #content>
            <div class="px-4 py-2">
              The content of the UPopover.
            </div>
          </template>
        </UPopover>
        <UPopover trigger="click">
          click
          <template #content>
            <div class="px-4 py-2">
              The content of the UPopover.
            </div>
          </template>
        </UPopover>
      </div>
    </Sample>
    <Sample title="position" :snippets="snippets.position">
      <div class="flex gap-4">
        <UPopover trigger="hover">
          auto
          <template #content>
            <div class="px-4 py-2">
              The content of the Popover.
            </div>
          </template>
        </UPopover>
        <UPopover trigger="hover" position="left">
          left
          <template #content>
            <div class="px-4 py-2">
              The content of the Popover.
            </div>
          </template>
        </UPopover>
        <UPopover trigger="hover" position="right">
          right
          <template #content>
            <div class="px-4 py-2">
              The content of the Popover.
            </div>
          </template>
        </UPopover>
        <UPopover trigger="hover" position="top">
          top
          <template #content>
            <div class="px-4 py-2">
              The content of the Popover.
            </div>
          </template>
        </UPopover>
        <UPopover trigger="hover" position="bottom">
          bottom
          <template #content>
            <div class="px-4 py-2">
              The content of the Popover.
            </div>
          </template>
        </UPopover>
      </div>
    </Sample>
    <Sample title="dissmissable" :snippets="snippets.dissmissable">
      <UPopover trigger="click" dissmissable>
        dissmissable
        <template #content>
          <div class="px-4 py-2">
            You can close the popover by clicking inside.
          </div>
        </template>
      </UPopover>
    </Sample>
    <Sample title="sustain" :snippets="snippets.sustain">
      <UPopover trigger="hover" sustain>
        hover & sustain
        <template #content>
          <div class="px-4 py-2">
            When hover, you need to click outside to close it.
          </div>
        </template>
      </UPopover>
    </Sample>
    <Sample title="hover-alive" :snippets="snippets.sustain">
      <UPopover trigger="hover" hover-alive>
        hover & hover-alive
        <template #content>
          <div class="px-4 py-2">
            When hover, you can use the mouse to access this panel.
          </div>
        </template>
      </UPopover>
    </Sample>
    <Sample title="events" :snippets="snippets.events">
      <UToast ref="toast" />
      <UPopover
        @open="$refs.toast?.info('open')"
        @close="$refs.toast?.info('close')"
      >
        events
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </UPopover>
    </Sample>
  </DocWrap>
</template>
