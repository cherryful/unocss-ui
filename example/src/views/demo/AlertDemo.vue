<script setup>
import { ref } from 'vue'

// import UAlert from '../../../../packages/components/src/components/Alert.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const snippets = {
  type: [
`<UAlert type="primary">
  I'm an alert with the type of primary
</UAlert>`,
`<UAlert type="secondary">
  I'm an alert with the type of secondary
</UAlert>`,
`<UAlert type="accent">
  I'm an alert with the type of accent
</UAlert>`,
`<UAlert type="success">
  I'm an alert with the type of success
</UAlert>`,
`<UAlert type="info">
  I'm an alert with the type of info
</UAlert>`,
`<UAlert type="warning">
  I'm an alert with the type of warning
</UAlert>`,
`<UAlert type="error">
  I'm an alert with the type of error
</UAlert>`,
  ],
  colorful: [
`<UAlert type="primary" colorful>
  I'm an alert with the type of primary
</UAlert>`,
`<UAlert type="secondary" colorful>
  I'm an alert with the type of secondary
</UAlert>`,
`<UAlert type="accent" colorful>
  I'm an alert with the type of accent
</UAlert>`,
`<UAlert type="success" colorful>
  I'm an alert with the type of success
</UAlert>`,
`<UAlert type="info" colorful>
  I'm an alert with the type of info
</UAlert>`,
`<UAlert type="warning" colorful>
  I'm an alert with the type of warning
</UAlert>`,
`<UAlert type="error" colorful>
  I'm an alert with the type of error
</UAlert>`,
  ],
  icon: [
`<UAlert icon="i-mdi:lightning-bolt">
  I'm an alert with the custom icon
</UAlert>`,
`<UAlert no-icon>
  I'm an alert without the icon
</UAlert>`,
  ],
  bordered: [
`<UAlert type="primary" bordered>
  I'm an alert with the type of primary
</UAlert>`,
`<UAlert type="primary" colorful bordered>
  I'm an alert with the type of primary
</UAlert>`,
  ],
  closeable: [
    '<UToast ref="toast" />',
`<UAlert closeable @close="$refs.toast.success('you click the close!')">
  I'm an alert with the close icon and event
</UAlert>`,
`<UAlert closeable @close="$refs.toast.success('you click the close!')">
  I'm an alert with the so lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang text.
</UAlert>`,
  ],
  custom: [],
}

const state = ref({
  content: 'This is the content of the alert!',
  type: 'primary',
  colorful: false,
  bordered: false,
  noIcon: false,
  closeable: false,
  customIcon: false,
})

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UAlert
          :type="state.type"
          :closeable="state.closeable"
          :no-icon="state.noIcon"
          :bordered="state.bordered"
          :colorful="state.colorful"
          :icon="state.customIcon && 'i-mdi:lightning-bolt'"
          @close="$refs.toast.success('you click the close!')"
        >
          {{ state.content }}
        </UAlert>
      </template>
      <template #props>
        <div class="flex flex-wrap gap-2">
          <UCheckbox v-model="state.colorful">
            colorful
          </UCheckbox>
          <UCheckbox v-model="state.bordered">
            bordered
          </UCheckbox>
          <UCheckbox v-model="state.noIcon">
            no-icon
          </UCheckbox>
          <UCheckbox v-model="state.closeable">
            closeable
          </UCheckbox>
          <UCheckbox v-model="state.customIcon">
            customIcon
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
          >
            {{ item }}
          </URadio>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-16">
            content
          </div>
          <UInput v-model="state.content" placeholder="content" />
        </div>
      </template>
    </Playground>
    <Sample title="type" :snippets="snippets.type">
      <div class="space-y-3">
        <UAlert type="primary">
          I'm an alert with the type of primary
        </UAlert>
        <UAlert type="secondary">
          I'm an alert with the type of secondary
        </UAlert>
        <UAlert type="accent">
          I'm an alert with the type of accent
        </UAlert>
        <UAlert type="success">
          I'm an alert with the type of success
        </UAlert>
        <UAlert type="info">
          I'm an alert with the type of info
        </UAlert>
        <UAlert type="warning">
          I'm an alert with the type of warning
        </UAlert>
        <UAlert type="error">
          I'm an alert with the type of error
        </UAlert>
      </div>
    </Sample>
    <Sample title="colorful" :snippets="snippets.colorful">
      <div class="space-y-3">
        <UAlert type="primary" colorful>
          I'm an alert with the type of primary
        </UAlert>
        <UAlert type="secondary" colorful>
          I'm an alert with the type of secondary
        </UAlert>
        <UAlert type="accent" colorful>
          I'm an alert with the type of accent
        </UAlert>
        <UAlert type="success" colorful>
          I'm an alert with the type of success
        </UAlert>
        <UAlert type="info" colorful>
          I'm an alert with the type of info
        </UAlert>
        <UAlert type="warning" colorful>
          I'm an alert with the type of warning
        </UAlert>
        <UAlert type="error" colorful>
          I'm an alert with the type of error
        </UAlert>
      </div>
    </Sample>
    <Sample title="bordered" :snippets="snippets.bordered">
      <div class="space-y-3">
        <UAlert type="primary" bordered>
          I'm an alert with the type of primary
        </UAlert>
        <UAlert type="primary" colorful bordered>
          I'm an alert with the type of primary
        </UAlert>
      </div>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <div class="space-y-3">
        <UAlert icon="i-mdi:lightning-bolt">
          I'm an alert with the custom icon
        </UAlert>
        <UAlert no-icon>
          I'm an alert without the icon
        </UAlert>
      </div>
    </Sample>
    <Sample title="closeable" :snippets="snippets.closeable">
      <div class="space-y-3">
        <UAlert closeable @close="$refs.toast.success('you click the close!')">
          I'm an alert with the close icon and event
        </UAlert>
        <UAlert closeable @close="$refs.toast.success('you click the close!')">
          I'm an alert with the so lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang lang text.
        </UAlert>
      </div>
    </Sample>
  </DocWrap>

  <UToast ref="toast" />
</template>
