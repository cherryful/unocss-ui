<script setup>
import { ref } from 'vue'

import UModal from '../../../../packages/components/src/components/Modal.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const show = ref(false)
const dismissibleShow = ref(false)
const slotShow = ref(false)
const customShow = ref(false)

const width = ref('base')

const snippets = {
  width: [],
  dismissible: [],
  slot: [],
}

const state = ref({
  show: false,
  content: 'This is the content of the modal',
  width: 'base',
  padded: true,
  dismissible: true,
  dismissButton: true,
})

const widths = ['sm', 'base', 'md', 'lg', 'xl', 'full']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UModal
          v-model="state.show"
          :width="state.width"
          :padded="state.padded"
          :dismissible="state.dismissible"
          :dismiss-button="state.dismissButton"
        >
          {{ state.content }}
        </UModal>
        <UButton @click="state.show = true">
          show
        </UButton>
      </template>
      <template #props>
        <div class="flex gap-2">
          <UCheckbox v-model="state.dismissible">
            dismissible
          </UCheckbox>
          <UCheckbox v-model="state.dismissButton">
            dismiss-button
          </UCheckbox>
          <UCheckbox v-model="state.padded">
            padded
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            width
          </div>
          <URadio
            v-for="item in widths" :key="item"
            v-model="state.width"
            :type="item"
            :value="item"
            @update:model-value="state.width = item"
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-16">
            content
          </div>
          <UInput v-model="state.content" placeholder="content" />
        </div>
      </template>
    </Playground>
    <Sample title="width" :snippets="snippets.width">
      <div class="flex flex-wrap gap-3">
        <UButton
          type="primary" @click="() => {
            width = 'sm'
            show = true
          }"
        >
          sm
        </UButton>
        <UButton
          type="primary" @click="() => {
            width = 'base'
            show = true
          }"
        >
          base
        </UButton>
        <UButton
          type="primary" @click="() => {
            width = 'md'
            show = true
          }"
        >
          md
        </UButton>
        <UButton
          type="primary" @click="() => {
            width = 'lg';
            show = true
          }"
        >
          lg
        </UButton>
        <UButton
          type="primary" @click="() => {
            width = 'xl'
            show = true
          }"
        >
          xl
        </UButton>
        <UButton
          type="primary" @click="() => {
            width = 'full'
            show = true
          }"
        >
          full
        </UButton>
        <UModal v-model="show" :width="width">
          <template #header>
            This is the header
          </template>
          This is the content
          <template #footer>
            <UButton type="error" @click="show = false">
              Close
            </UButton>
          </template>
        </UModal>
      </div>
    </Sample>
    <Sample title="dismissible" :snippets="snippets.dismissible">
      <UModal v-model="dismissibleShow" :dismissible="false" :dismiss-button="false">
        <template #header>
          This is the header
        </template>
        You can only dismiss this modal by clicking the buttons below.
        <template #footer>
          <UButton type="error" @click="dismissibleShow = false">
            Close
          </UButton>
        </template>
      </UModal>
      <UButton type="warning" @click="() => { dismissibleShow = true }">
        not dismissible
      </UButton>
    </Sample>
    <Sample title="slot" :snippets="snippets.slot">
      <div class="flex gap-4">
        <UButton @click="() => { slotShow = true }">
          #header, #footer
        </UButton>
        <UButton @click="() => { customShow = true }">
          custom
        </UButton>
      </div>

      <UModal v-model="slotShow" :width="width">
        <template #header>
          This is the header
        </template>
        This is the dialog content
        <template #footer>
          <UButton type="warning" @click="slotShow = false">
            Cancel
          </UButton>
          <UButton type="error" @click="slotShow = false">
            Deactivate
          </UButton>
        </template>
      </UModal>

      <UModal v-model="customShow" :width="width">
        <div class="text-lg font-bold">
          Header
        </div>
        <div class="my-5 text-sm">
          Hello World!
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="show = false"
          >
            Deactivate
          </button>
          <button
            class="mt-3 w-full inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="show = false"
          >
            Cancel
          </button>
        </div>
      </UModal>
    </Sample>
  </DocWrap>
</template>
