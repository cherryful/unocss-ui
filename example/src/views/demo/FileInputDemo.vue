<script setup lang="ts">
import { ref } from 'vue'

const fileList = ref<any[]>([])

function afterUpload(event: Event) {
  console.log('File uploaded', event)
}
</script>

<template>
  <div class="my-4 flex items-center space-x-5">
    <div class="w-72">
      <UFileInput
        v-model:file-list="fileList"
        @change="afterUpload"
      />
    </div>
    <div class="w-72">
      <UFileInput
        v-model:file-list="fileList"
        multiple
      />
    </div>
    <!-- FIXME: -->
    <UFileInput>
      <button class="inline-block rounded bg-gray-100 p-2 hover:bg-gray-200">
        <div class="flex items-center justify-center">
          <div class="i-mdi:lightning-bolt" />
          <span class="mr-2">Upload</span>
        </div>
      </button>
      <div v-for="(item, idx) in fileList" :key="idx">
        {{ item.name }}
      </div>
    </UFileInput>
  </div>
</template>
