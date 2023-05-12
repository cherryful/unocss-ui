<script setup>
import { reactive } from 'vue'

const drawer = reactive({
  left: false,
  right: false,
  top: false,
  bottom: false,
})
</script>

<template>
  <div class="space-y-4">
    UDrawer Demo:
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        placement:
      </span>
      <button class="rounded-md bg-indigo-500 px-2 py-1 text-white" @click="drawer.left = true">
        left
      </button>
      <button class="rounded-md bg-indigo-500 px-2 py-1 text-white" @click="drawer.right = true">
        right
      </button>
      <button class="rounded-md bg-indigo-500 px-2 py-1 text-white" @click="drawer.top = true">
        top
      </button>
      <button class="rounded-md bg-indigo-500 px-2 py-1 text-white" @click="drawer.bottom = true">
        bottom
      </button>
    </div>
  </div>

  <UDrawer v-model="drawer.left" placement="left" />
  <UDrawer v-model="drawer.right" placement="right" />
  <UDrawer v-model="drawer.top" placement="top" />
  <UDrawer v-model="drawer.bottom" placement="bottom" />
</template>
