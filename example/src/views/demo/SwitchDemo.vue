<script setup>
import { ref } from 'vue'

const value = ref(true)
const checkedValue = ref('checked')

function onChange(val) {
  alert(val)
}
</script>

<template>
  <div class="space-y-4">
    USwitch Demo:

    <div class="flex space-x-3">
      <span class="inline-block w-20">
        size:
      </span>
      <USwitch v-model="value" size="sm" />
      <USwitch v-model="value" size="base" />
      <USwitch v-model="value" size="lg" />
    </div>

    <div class="flex space-x-3">
      <span class="inline-block w-20">
        type:
      </span>
      <USwitch v-model="value" />
      <USwitch v-model="value" type="secondary" />
      <USwitch v-model="value" type="accent" />
      <USwitch v-model="value" type="success" />
      <USwitch v-model="value" type="info" />
      <USwitch v-model="value" type="warning" />
      <USwitch v-model="value" type="error" />
      <USwitch v-model="value" disabled />
    </div>
    <div class="flex space-x-3">
      <span class="inline-block w-20">
        icon:
      </span>
      <USwitch v-model="value" icon type="primary" />
      <USwitch v-model="value" icon type="secondary" />
      <USwitch v-model="value" icon type="accent" />
      <USwitch v-model="value" icon type="success" />
      <USwitch v-model="value" icon type="info" />
      <USwitch v-model="value" icon type="warning" />
      <USwitch v-model="value" icon type="error" />
    </div>
    <div class="flex space-x-3">
      <span class="inline-block w-20">
        other:
      </span>
      <USwitch v-model="value" icon>
        Enabled
      </USwitch>
      <USwitch icon checked readonly>
        readonly
      </USwitch>
      <USwitch v-model="value" @update:model-value="onChange">
        @update:model-value
      </USwitch>
      <USwitch v-model="checkedValue" checked-value="checked" unchecked-value="unchecked" @update:model-value="onChange">
        custom-value
      </USwitch>
      <USwitch :model-value="value" @update:model-value="$e => value = $e">
        manual control
      </USwitch>
      <USwitch loading>
        loading
      </USwitch>
    </div>
  </div>
</template>
