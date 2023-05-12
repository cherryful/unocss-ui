<script setup>
// import Divider from '@/components/Divider.vue'
import { Divider } from 'unocss-ui'
</script>

<template>
  <Divider />
  <Divider dashed />
  <Divider align="left">
    Left
  </Divider>
  <Divider align="right">
    Right
  </Divider>
  <Divider dashed>
    <div class="i-mdi:lightning-bolt text-2xl" />
  </Divider>
  <Divider>
    <button type="button" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
      Button text
    </button>
  </Divider>
</template>
