<script setup>
</script>

<template>
  <div> UBadgeDemo: </div>
  <div class="space-x-16">
    <span>type:</span>
    <UBadge content="default" type="default">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="success" type="success">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="info" type="info">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="warning" type="warning">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="error" type="error">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="primary" type="primary">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="secondary" type="secondary">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="accent" type="accent">
      <span class="text-xl"> update</span>
    </UBadge>
  </div>
  <div class="space-x-20">
    <span>size:</span>
    <UBadge content="xs" size="sm">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="base">
      <span class="text-xl"> update</span>
    </UBadge>
    <UBadge content="lg" size="lg">
      <span class="text-xl"> update</span>
    </UBadge>
  </div>
  <div class="space-x-20">
    <span>other:</span>
    <UBadge>
      <span class="text-xl"> demo </span>
    </UBadge>
  </div>
</template>
