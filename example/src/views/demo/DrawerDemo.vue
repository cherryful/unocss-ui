<script setup>
import { reactive } from 'vue'

import UDrawer from '../../../../packages/components/src/components/Drawer.vue'

import DocWrap from '@/components/DocWrap.vue'
import Playground from '@/components/Playground.vue'
import Sample from '@/components/Sample.vue'

const snippets = {
  placement: [
`<UDrawer v-model="drawer.left" placement="left">
  <div class="h-full w-full flex items-center justify-center">
    Left Placement
  </div>
</UDrawer>`,
`<UDrawer v-model="drawer.right" placement="right">
  <div class="h-full w-full flex items-center justify-center">
    Right Placement
  </div>
</UDrawer>`,
`<UDrawer v-model="drawer.top" placement="top">
  <div class="h-full w-full flex items-center justify-center">
    Top Placement
  </div>
</UDrawer>`,
`<UDrawer v-model="drawer.bottom" placement="bottom">
  <div class="h-full w-full flex items-center justify-center">
    Bottom Placement
  </div>
</UDrawer>`,
  ],
  duration: [
`<UDrawer v-model="drawer.duration" duration="600">
  <div class="h-full w-full flex items-center justify-center">
    duration-600
  </div>
</UDrawer>`,
  ],
  width: [
`<UDrawer v-model="drawer.width" width="1/2">
  <div class="h-full w-full flex items-center justify-center">
    width-1/2
  </div>
</UDrawer>`,
`<UDrawer v-model="drawer.width2" style="width: 90%;">
  <div class="h-full w-full flex items-center justify-center">
    width-90%
  </div>
</UDrawer>`,
  ],
}

const state = reactive({
  show: false,
  placement: 'left',
  width: 'md',
  duration: '200',
  content: 'drawer content',
})

const drawer = reactive({
  left: false,
  right: false,
  top: false,
  bottom: false,
  duration: false,
  width: false,
  width2: false,
})

const placements = ['left', 'right', 'top', 'bottom']
const widths = ['sm', 'md', 'lg', '1/2', '1/3', '1/4', 'full']
const durations = ['100', '200', '300', '400', '500', '600']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UToast ref="toast" />
        <UDrawer
          v-model="state.show"
          :placement="state.placement"
          :width="state.width"
          :duration="state.duration"
          @close="$refs.toast?.success('close')"
        >
          <div class="h-full w-full flex items-center justify-center">
            <button class="i-mdi:close h-6 w-6" @click="state.show = false" />
          </div>
        </UDrawer>
        <div class="flex gap-4">
          <button
            class="rounded-md bg-indigo-500 px-2 py-1 text-white"
            @click="state.show = true"
          >
            {{ state.placement }}
          </button>
        </div>
      </template>
      <template #props>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-24">
            placement
          </div>
          <URadio v-for="item in placements" :key="item" v-model="state.placement" :value="item">
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-24">
            width
          </div>
          <URadio v-for="item in widths" :key="item" v-model="state.width" :value="item">
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-24">
            duration
          </div>
          <URadio v-for="item in durations" :key="item" v-model="state.duration" :value="item">
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>
    <Sample title="placement" :snippets="snippets.placement">
      <div class="flex gap-4">
        <UButton @click="drawer.left = true">
          left
        </UButton>
        <UButton @click="drawer.right = true">
          right
        </UButton>
        <UButton @click="drawer.top = true">
          top
        </UButton>
        <UButton @click="drawer.bottom = true">
          bottom
        </UButton>
      </div>
    </Sample>
    <Sample title="duration" :snippets="snippets.duration">
      <UDrawer v-model="drawer.duration" duration="600">
        <div class="h-full w-full flex items-center justify-center">
          duration-600
        </div>
      </UDrawer>
      <UButton @click="drawer.duration = true">
        duration-600
      </UButton>
    </Sample>
    <Sample title="width" :snippets="snippets.width">
      <UDrawer v-model="drawer.width" width="1/2">
        <div class="h-full w-full flex items-center justify-center">
          width-1/2
        </div>
      </UDrawer>
      <UDrawer v-model="drawer.width2" style="width: 90%;">
        <div class="h-full w-full flex items-center justify-center">
          width-90%
        </div>
      </UDrawer>
      <div class="flex gap-4">
        <UButton @click="drawer.width = true">
          width-1/2
        </UButton>
        <UButton @click="drawer.width2 = true">
          width-90%
        </UButton>
      </div>
    </Sample>
  </DocWrap>

  <UDrawer v-model="drawer.left" placement="left">
    <div class="h-full w-full flex items-center justify-center">
      Left Placement
    </div>
  </UDrawer>
  <UDrawer v-model="drawer.right" placement="right">
    <div class="h-full w-full flex items-center justify-center">
      Right Placement
    </div>
  </UDrawer>
  <UDrawer v-model="drawer.top" placement="top">
    <div class="h-full w-full flex items-center justify-center">
      Top Placement
    </div>
  </UDrawer>
  <UDrawer v-model="drawer.bottom" placement="bottom">
    <div class="h-full w-full flex items-center justify-center">
      Bottom Placement
    </div>
  </UDrawer>
</template>
