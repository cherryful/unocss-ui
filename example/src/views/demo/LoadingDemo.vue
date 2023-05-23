<script setup lang="ts">
import { reactive } from 'vue'

import ULoading from '../../../../packages/components/src/components/Loading.vue'
import USpin from '../../../../packages/components/src/components/Spin.vue'

import DocWrap from '@/components/DocWrap.vue'
import Playground from '@/components/Playground.vue'
import Sample from '@/components/Sample.vue'

const snippets = {
  type: [
    '<ULoading type="primary" />',
    '<ULoading type="secondary" />',
    '<ULoading type="accent" />',
    '<ULoading type="success" />',
    '<ULoading type="info" />',
    '<ULoading type="warning" />',
    '<ULoading type="error" />',
  ],
  thickness: [
    '<ULoading :thickness="2" />',
    '<ULoading :thickness="4" />',
    '<ULoading :thickness="6" />',
    '<ULoading :thickness="8" />',
  ],
  custom: [
    '<ULoading class="h-15 w-15" />',
  ],
  slot: [
`<ULoading>
  <template #icon>
    <div class="animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" /><path stroke="#fff" d="M24 12V15" /><path stroke="#fff" d="M32.4852 15.5147L30.3639 17.636" /><path stroke="#fff" d="M36 24H33" /><path stroke="#fff" d="M32.4852 32.4853L30.3639 30.364" /><path stroke="#fff" d="M24 36V33" /><path stroke="#fff" d="M15.5148 32.4853L17.6361 30.364" /><path stroke="#fff" d="M12 24H15" /><path stroke="#fff" d="M15.5148 15.5147L17.6361 17.636" /></g></svg>
    </div>
  </template>
</ULoading>`,
`<ULoading>
  <div class="block max-w-sm items-center border border-gray-100 rounded-lg bg-white p-6 shadow-md">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      Noteworthy technology acquisitions 2021
    </h5>
    <p class="font-normal text-gray-700">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </div>
</ULoading>`,
  ],
  spin: [
    '<USpin />',
    '<USpin :thickness="8" />',
`<USpin>
  <template #icon>
    <div class="animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" /><path stroke="#fff" d="M24 12V15" /><path stroke="#fff" d="M32.4852 15.5147L30.3639 17.636" /><path stroke="#fff" d="M36 24H33" /><path stroke="#fff" d="M32.4852 32.4853L30.3639 30.364" /><path stroke="#fff" d="M24 36V33" /><path stroke="#fff" d="M15.5148 32.4853L17.6361 30.364" /><path stroke="#fff" d="M12 24H15" /><path stroke="#fff" d="M15.5148 15.5147L17.6361 17.636" /></g></svg>
    </div>
  </template>
</USpin>`,
  ],
}

const state = reactive({
  show: true,
  type: 'primary',
  thickness: 5,
  iconSlot: false,
  wrapSlot: false,
})

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const thicknesses = [2, 3, 4, 5, 6, 7, 9]
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <ULoading
          :show="state.show"
          :type="state.type"
          :thickness="state.thickness"
        >
          <template v-if="state.iconSlot" #icon>
            <div class="animate-spin">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" /><path stroke="#fff" d="M24 12V15" /><path stroke="#fff" d="M32.4852 15.5147L30.3639 17.636" /><path stroke="#fff" d="M36 24H33" /><path stroke="#fff" d="M32.4852 32.4853L30.3639 30.364" /><path stroke="#fff" d="M24 36V33" /><path stroke="#fff" d="M15.5148 32.4853L17.6361 30.364" /><path stroke="#fff" d="M12 24H15" /><path stroke="#fff" d="M15.5148 15.5147L17.6361 17.636" /></g></svg>
            </div>
          </template>
          <template v-if="state.wrapSlot">
            <div class="block max-w-sm items-center border border-gray-100 rounded-lg bg-white p-6 shadow-md">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="font-normal text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
            </div>
          </template>
        </ULoading>
      </template>
      <template #props>
        <div class="flex gap-2">
          <UCheckbox v-model="state.show">
            show
          </UCheckbox>
          <UCheckbox v-model="state.iconSlot">
            iconSlot
          </UCheckbox>
          <UCheckbox v-model="state.wrapSlot">
            wrapSlot
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-20">
            type
          </div>
          <URadio v-for="item in types" :key="item" v-model="state.type" :type="item" :value="item">
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-20">
            thickness
          </div>
          <URadio v-for="item in thicknesses" :key="item" v-model="state.thickness" :value="item">
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>
    <Sample title="type" :snippets="snippets.type">
      <div class="flex gap-3">
        <ULoading type="primary" />
        <ULoading type="secondary" />
        <ULoading type="accent" />
        <ULoading type="success" />
        <ULoading type="info" />
        <ULoading type="warning" />
        <ULoading type="error" />
      </div>
    </Sample>
    <Sample title="thickness" :snippets="snippets.thickness">
      <div class="flex gap-3">
        <ULoading :thickness="2" />
        <ULoading :thickness="4" />
        <ULoading :thickness="6" />
        <ULoading :thickness="8" />
      </div>
    </Sample>
    <Sample title="custom" :snippets="snippets.custom">
      <div class="flex items-center gap-4">
        <ULoading class="h-15 w-15" />
      </div>
    </Sample>
    <Sample title="slot" :snippets="snippets.slot">
      <div class="flex flex-wrap items-center gap-8">
        <ULoading>
          <template #icon>
            <div class="animate-spin">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" /><path stroke="#fff" d="M24 12V15" /><path stroke="#fff" d="M32.4852 15.5147L30.3639 17.636" /><path stroke="#fff" d="M36 24H33" /><path stroke="#fff" d="M32.4852 32.4853L30.3639 30.364" /><path stroke="#fff" d="M24 36V33" /><path stroke="#fff" d="M15.5148 32.4853L17.6361 30.364" /><path stroke="#fff" d="M12 24H15" /><path stroke="#fff" d="M15.5148 15.5147L17.6361 17.636" /></g></svg>
            </div>
          </template>
        </ULoading>
        <ULoading>
          <div class="block max-w-sm items-center border border-gray-100 rounded-lg bg-white p-6 shadow-md">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </ULoading>
      </div>
    </Sample>
    <Sample title="spin" :snippets="snippets.spin">
      <div class="flex flex-wrap items-center gap-4">
        <USpin />
        <USpin :thickness="8" />
        <USpin>
          <template #icon>
            <div class="animate-spin">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" /><path stroke="#fff" d="M24 12V15" /><path stroke="#fff" d="M32.4852 15.5147L30.3639 17.636" /><path stroke="#fff" d="M36 24H33" /><path stroke="#fff" d="M32.4852 32.4853L30.3639 30.364" /><path stroke="#fff" d="M24 36V33" /><path stroke="#fff" d="M15.5148 32.4853L17.6361 30.364" /><path stroke="#fff" d="M12 24H15" /><path stroke="#fff" d="M15.5148 15.5147L17.6361 17.636" /></g></svg>
            </div>
          </template>
        </USpin>
      </div>
    </Sample>
  </DocWrap>
</template>
