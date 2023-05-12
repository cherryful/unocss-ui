<script setup>
</script>

<template>
  <div class="h-full min-h-2xl bg-white p-5">
    <div> UCollapseDemo: </div>
    <div class="space-y-8">
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
      <UCollapse class="w-lg" expanded disabled>
        <p class="my-2">
          default expanded && disabled
        </p>
        <template #content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </template>
      </UCollapse>
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
      <div />
    </div>
  </div>
</template>
