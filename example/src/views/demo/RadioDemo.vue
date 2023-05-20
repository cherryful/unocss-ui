<script setup>
import { ref } from 'vue'

// import URadio from '../../../../packages/components/src/components/Radio.vue'
import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const checkValue = ref(true)

const state = ref({
  checkValue: false,
  type: 'primary',
  disabled: false,
  hidden: false,
  bordered: false,
  circleColored: false,
  defaultSlot: true,
})

const snippets = {
  type: [
`<URadio v-model="checkValue" value="primary" type="primary">
  primary
</URadio>`,
`<URadio v-model="checkValue" value="secondary" type="secondary">
  secondary
</URadio>`,
`<URadio v-model="checkValue" value="accent" type="accent">
  accent
</URadio>`,
`<URadio v-model="checkValue" value="success" type="success">
  success
</URadio>`,
`<URadio v-model="checkValue" value="info" type="info">
  info
</URadio>`,
`<URadio v-model="checkValue" value="warning" type="warning">
  warning
</URadio>`,
`<URadio v-model="checkValue" value="error" type="error">
  error
</URadio>`,
  ],
  disabled: [
`<URadio v-model="checkValue" value="disabled" disabled>
  disabled
</URadio>`,
  ],
  bordered: [
`<URadio v-model="checkValue" value="bordered" bordered>
  bordered
</URadio>`,
`<URadio v-model="checkValue" value="circle-colored" circle-colored>
  circle-colored
</URadio>`,
  ],
  custom: [
`<URadio v-slot="{ checked }" v-model="checkValue" hidden type="success" value="success">
  <div
    class="h-8 w-8 border-2 border-white rounded-full bg-green-500"
    :class=" { 'ring-green-500 ring-2': checked }"
  />
</URadio>`,
`<URadio v-slot="{ checked }" v-model="checkValue" hidden type="info" value="info">
  <div
    class="h-8 w-8 border-2 border-white rounded-full bg-blue-500"
    :class="{ 'ring-blue-500 ring-2': checked }" 
  />
</URadio>`,
`<URadio v-slot="{ checked }" v-model="checkValue" hidden type="warning" value="warning">
  <div
    class="h-8 w-8 border-2 border-white rounded-full bg-yellow-500"
    :class="{ 'ring-yellow-500 ring-2': checked }"
  />
</URadio>`,
  ],
}

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UToast ref="toast" />
        <div class="flex gap-4">
          <URadio
            v-model="state.checkValue"
            :type="state.type"
            :disabled="state.disabled"
            :bordered="state.bordered"
            :circle-colored="state.circleColored"
            :hidden="state.hidden"
            :value="true"
            @update:model-value="val => $refs.toast.info(`update:model-value: ${val}`)"
          >
            <template v-if="state.defaultSlot">
              true
            </template>
          </URadio>
          <URadio
            v-model="state.checkValue"
            :type="state.type"
            :disabled="state.disabled"
            :bordered="state.bordered"
            :circle-colored="state.circleColored"
            :hidden="state.hidden"
            :value="false"
            @update:model-value="val => $refs.toast.info(`update:model-value: ${val}`)"
          >
            <template v-if="state.defaultSlot">
              false
            </template>
          </URadio>
        </div>
      </template>
      <template #props>
        <div class="flex flex-wrap gap-2">
          <UCheckbox v-model="state.disabled">
            disabled
          </UCheckbox>
          <UCheckbox v-model="state.bordered">
            bordered
          </UCheckbox>
          <UCheckbox v-model="state.hidden">
            hidden
          </UCheckbox>
          <UCheckbox v-model="state.circleColored">
            circleColored
          </UCheckbox>
          <UCheckbox v-model="state.defaultSlot">
            defaultSlot
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            type
          </div>
          <URadio
            v-for="item in types" :key="item"
            v-model="state.type"
            :type="item"
            :value="item"
            @update:model-value="state.type = item"
          >
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>
    <Sample title="type" :snippets="snippets.type">
      <div class="flex flex-wrap gap-4">
        <URadio v-model="checkValue" value="primary" type="primary">
          primary
        </URadio>
        <URadio v-model="checkValue" value="secondary" type="secondary">
          secondary
        </URadio>
        <URadio v-model="checkValue" value="accent" type="accent">
          accent
        </URadio>
        <URadio v-model="checkValue" value="success" type="success">
          success
        </URadio>
        <URadio v-model="checkValue" value="info" type="info">
          info
        </URadio>
        <URadio v-model="checkValue" value="warning" type="warning">
          warning
        </URadio>
        <URadio v-model="checkValue" value="error" type="error">
          error
        </URadio>
      </div>
    </Sample>
    <Sample title="disabled" :snippets="snippets.disabled">
      <div class="flex gap-4">
        <URadio v-model="checkValue" value="disabled" disabled>
          disabled
        </URadio>
      </div>
    </Sample>
    <Sample title="border && circle-colored" :snippets="snippets.bordered">
      <div class="flex gap-4">
        <URadio v-model="checkValue" value="bordered" bordered>
          bordered
        </URadio>
        <URadio v-model="checkValue" value="circle-colored" circle-colored>
          circle-colored
        </URadio>
      </div>
    </Sample>
    <Sample title="custom" :snippets="snippets.custom">
      <div class="flex gap-4">
        <URadio v-slot="{ checked }" v-model="checkValue" hidden type="success" value="success">
          <div
            class="h-8 w-8 border-2 border-white rounded-full bg-green-500"
            :class=" { 'ring-green-500 ring-2': checked }"
          />
        </URadio>
        <URadio v-slot="{ checked }" v-model="checkValue" hidden type="info" value="info">
          <div
            class="h-8 w-8 border-2 border-white rounded-full bg-blue-500"
            :class="{ 'ring-blue-500 ring-2': checked }"
          />
        </URadio>
        <URadio v-slot="{ checked }" v-model="checkValue" hidden type="warning" value="warning">
          <div
            class="h-8 w-8 border-2 border-white rounded-full bg-yellow-500"
            :class="{ 'ring-yellow-500 ring-2': checked }"
          />
        </URadio>
      </div>
    </Sample>
  </DocWrap>
</template>
