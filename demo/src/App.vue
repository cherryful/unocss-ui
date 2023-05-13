<script setup>
import { ref } from 'vue';

const toast = ref(null)
const drawer = ref(false)
const modal = ref(false)
</script>

<template>
  <div class="m-5 space-y-5">
    <div class="bg-red">
      Test import unocss-ui
    </div>
    <div class="space-x-4">
      <UAlert type="success">hi! gratulation to you! you can use this ui lib!</UAlert>
    </div>
    <div class="space-x-4">
      <UButton type="primary" @click="toast?.success('hi! gratulation to you! you can use this ui lib!')">
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
      <UTag type="primary">Good</UTag>
      <UTag type="secondary">Nice</UTag>
      <UTag type="accent">Well</UTag>
    </div>
    <div class="flex gap-4">
      <UTag type="primary">Good</UTag>
      <UTag type="secondary">Nice</UTag>
      <UTag type="accent">Well</UTag>
    </div>
  </div>

  <UDrawer v-model="drawer"></UDrawer>
  <UModal v-model="modal">
    <div class="font-lg">
      HELLO WORLD
    </div>
  </UModal>
  <UToast ref="toast"></UToast>
</template>
