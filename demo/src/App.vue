<script setup>
import { ref } from 'vue'

import { UAlert, UButton, UDrawer, ULoading, UModal, UTag, UToast } from 'unocss-ui'

const drawer = ref(false)
const modal = ref(false)

const welcome = ref('hi! gratulation to you! you can use this ui lib!')
</script>

<template>
  <div class="m-5 space-y-5">
    <div class="text-2xl p-3 border">
      unocss-ui
    </div>
    <div class="space-x-4">
      <UAlert type="success">
        {{ welcome }}
      </UAlert>
    </div>
    <div class="space-y-3 sm:space-x-4">
      <UButton type="primary" @click="$refs.toast?.success(welcome)">
        Show Toast
      </UButton>
      <UButton type="secondary" @click="modal = true">
        Show Modal
      </UButton>
      <UButton type="accent" @click="drawer = true">
        Show Drawer
      </UButton>
    </div>
    <div class="flex gap-4">
      <ULoading type="primary" />
      <ULoading type="secondary" />
      <ULoading type="accent" />
    </div>
    <div class="flex gap-4">
      <UTag type="primary">
        Good
      </UTag>
      <UTag type="secondary">
        Nice
      </UTag>
      <UTag type="accent">
        Well
      </UTag>
    </div>
  </div>

  <UModal v-model="modal">
    <div class="text-xl">
      {{ welcome }}
    </div>
  </UModal>

  <UDrawer v-model="drawer" placement="bottom">
    <div class="p-3 text-xl flex items-center justify-center w-full h-full">
      {{ welcome }}
    </div>
  </UDrawer>

  <UToast ref="toast" />
</template>
