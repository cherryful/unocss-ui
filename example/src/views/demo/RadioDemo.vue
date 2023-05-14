<script setup>
import { ref } from 'vue'

const checkValue = ref('durian')
const onChangeVal = ref('')

function onChange(val) {
  onChangeVal.value = `onChange: ${val}`
}
</script>

<template>
  <div class="space-x-5">
    checked: {{ checkValue }} |
    {{ onChangeVal }}
  </div>
  <div class="flex gap-4">
    <URadio v-model="checkValue" type="success" value="apple" @change="onChange">
      <div>
        apple
      </div>
    </URadio>
    <URadio v-model="checkValue" type="info" value="banana" @change="onChange">
      banana
    </URadio>
    <URadio v-model="checkValue" type="warning" value="orange" @change="onChange">
      orange
    </URadio>
    <URadio v-model="checkValue" type="error" value="pear" @change="onChange">
      pear
    </URadio>
    <URadio v-model="checkValue" type="primary" value="graph" @change="onChange">
      graph
    </URadio>
    <URadio v-model="checkValue" type="secondary" value="mongo" @change="onChange">
      mongo
    </URadio>
    <URadio v-model="checkValue" type="accent" value="watermelon" @change="onChange">
      watermelon
    </URadio>
    <URadio v-model="checkValue" disabled value="durian" @change="onChange">
      durian
    </URadio>
  </div>
  <div class="flex gap-4">
    <URadio v-model="checkValue" bordered type="success" value="apple" @change="onChange">
      apple
    </URadio>
    <URadio v-model="checkValue" bordered type="info" value="banana" @change="onChange">
      banana
    </URadio>
    <URadio v-model="checkValue" bordered type="warning" value="orange" @change="onChange">
      orange
    </URadio>
  </div>
  <div class="flex gap-4">
    <URadio v-slot="{ checked }" v-model="checkValue" hidden type="success" value="apple" @change="onChange">
      <div
        class="h-8 w-8 border-2 rounded-full border-white bg-success-500"
        :class=" {
          'ring-2 ring-success-500': checked,
        }
        "
      />
    </URadio>
    <URadio v-slot="{ checked }" v-model="checkValue" hidden type="info" value="banana" @change="onChange">
      <div
        class="h-8 w-8 border-2 border-white rounded-full bg-info-500"
        :class="{
          'ring-2 ring-info-500': checked,
        }"
      />
    </URadio>
    <URadio v-slot="{ checked }" v-model="checkValue" hidden type="warning" value="orange" @change="onChange">
      <div
        class="h-8 w-8 border-2 border-white rounded-full bg-warning-500"
        :class="{
          'ring-2 ring-warning-500': checked,
        }"
      />
    </URadio>
  </div>
</template>
