<script setup lang="ts">
import PageWrap from '@/components/PageWrap.vue'
</script>

<template>
  <PageWrap title="Alert Demo">
    <div class="space-x-3">
      <span class="inline-block w-20">
        type:
      </span>
      <div class="space-y-3">
        <UAlert type="primary">
          I'm an alert with a color of primary
        </UAlert>
        <UAlert type="secondary">
          I'm an alert with a color of secondary
        </UAlert>
        <UAlert type="accent">
          I'm an alert with a color of accent
        </UAlert>
        <UAlert type="success">
          I'm an alert with a color of success
        </UAlert>
        <UAlert type="info">
          I'm an alert with a color of info
        </UAlert>
        <UAlert type="warning">
          I'm an alert with a color of warning
        </UAlert>
        <UAlert type="error">
          I'm an alert with a color of error
        </UAlert>
      </div>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        other:
      </span>
      <div class="space-y-3">
        <UAlert icon="i-mdi:lightning-bolt">
          I'm an alert with a color of primary
        </UAlert>
        <UAlert closeable>
          I'm an alert with a close icon
        </UAlert>
        <UAlert no-icon>
          I'm an alert without icon and close icon
        </UAlert>
        <UAlert closeable>
          Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
        </UAlert>
      </div>
    </div>
  </PageWrap>
</template>
