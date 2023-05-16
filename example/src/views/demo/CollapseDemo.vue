<script setup>
import Sample from '@/components/Sample.vue'

// const snippets = {
//   size: [
//     '<UBadge size="sm">sm</UBadge>',
//     '<UBadge size="base">base</UBadge>',
//     '<UBadge size="lg">lg</UBadge>',
//   ],
//   type: [
//     '<UBadge type="primary">primary</UBadge>',
//     '<UBadge type="secondary">secondary</UBadge>',
//     '<UBadge type="accent">accent</UBadge>',
//     '<UBadge type="success">success</UBadge>',
//     '<UBadge type="info">info</UBadge>',
//     '<UBadge type="warning">warning</UBadge>',
//     '<UBadge type="error">error</UBadge>',
//   ],
//   disabled: [
//     '<UBadge disabled>disabled</UBadge>',
//   ],
// }
</script>

<template>
  <div class="h-full min-h-2xl rounded-md bg-white p-5">
    <div> UCollapseDemo: </div>
    <Sample title="basic">
      <UCollapse class="w-lg">
        <p class="my-2">
          basic collapse
        </p>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </template>
      </UCollapse>
    </Sample>

    <Sample title="disabled & expanded">
      <UCollapse class="w-lg" disabled expanded>
        <p class="my-2">
          default expanded && disabled
        </p>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </template>
      </UCollapse>
    </Sample>

    <Sample title="left icon ">
      <UCollapse class="w-lg" icon-left>
        <p class="my-2">
          left icon collapse
        </p>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </template>
      </UCollapse>
    </Sample>
  </div>
</template>
