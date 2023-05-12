<script setup lang="ts">
import { ref } from 'vue'

const msg1 = ref('closed')
const msg2 = ref('closed')
</script>

<template>
  <div class="space-y-4">
    UPopover Demo:
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        Position:
      </span>
      <UPopover>
        auto
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover position="left">
        left
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover position="right">
        right
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover position="top">
        top
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover position="bottom">
        bottom
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        Hover:
      </span>
      <UPopover trigger="hover">
        auto
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover position="left" trigger="hover">
        left
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover position="right" trigger="hover">
        right
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover position="top" trigger="hover">
        top
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover position="bottom" trigger="hover">
        bottom
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        Event:
      </span>
      <UPopover @open="msg1 = 'opened'" @close="msg1 = 'closed'">
        <UButton type="secondary">
          click {{ msg1 }}
        </UButton>
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover trigger="hover" @open="msg2 = 'opened'" @close="msg2 = 'closed'">
        <UButton type="secondary">
          hover {{ msg2 }}
        </UButton>
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        other:
      </span>
      <UPopover dissmissable>
        <UButton type="secondary">
          dissmissable
        </UButton>
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover trigger="hover" sustain>
        <UButton type="secondary">
          hover & sustain
        </UButton>
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
      <UPopover trigger="hover" hover-alive>
        <UButton type="secondary">
          hover-alive
        </UButton>
        <template #content>
          <div class="px-4 py-2">
            The content of the UPopover.
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>
