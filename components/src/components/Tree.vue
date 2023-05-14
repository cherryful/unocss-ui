<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import Checkbox from './Checkbox.vue'

export interface Option {
  label: string
  value: any
  hidden?: boolean
  disabled?: boolean
  children?: Option[]
}

const props = withDefaults(defineProps<{
  modelValue?: any
  options?: Array<Option>
  cascade?: boolean
  selectable?: boolean
  defaultExpandedKeys?: Array<any>
}>(), {
  modelValue: null,
  selectable: false,
  cascade: false,
  options: () => [],
  defaultExpandedKeys: () => [],
})

const emits = defineEmits(['update:modelValue'])

const options = ref<Array<Option>>(props.options)
const checkedValues = computed({
  get: () => props.modelValue,
  set: val => emits('update:modelValue', val),
})

function handleCheck(e: Event) {
  if (!props.cascade)
    return
  const val = (e.target as any).value
  options.value.forEach((item) => {
    if (item.value === val) {
      if (checkedValues.value.includes(val)) {
        item.children?.forEach((sub) => {
          if (!checkedValues.value.includes(sub.value) && !sub.disabled)
            checkedValues.value.push(sub.value)
        })
      }
      else {
        item.children?.forEach((sub) => {
          if (checkedValues.value.includes(sub.value))
            checkedValues.value.splice(checkedValues.value.indexOf(sub.value), 1)
        })
      }
    }
  })
}

onMounted(() => {
  options.value.forEach(item => item.hidden = true)
  nextTick(() => {
    const expandedKeys = props.defaultExpandedKeys
    if (!expandedKeys.length)
      return

    options.value.forEach((item) => {
      if (expandedKeys.includes(item.value))
        item.hidden = false
      item.children?.forEach((sub) => {
        if (expandedKeys.includes(sub.value))
          item.hidden = false
      })
    })
  })
})
</script>

<script lang="ts">
export default {
  name: 'UTree',
}
</script>

<template>
  <div v-for="item of options" :key="item.value">
    <div class="flex items-center gap-1 px-2 py-0.5 transition-100 hover:rounded hover:bg-gray-100">
      <span
        class="h-4 w-4 cursor-pointer text-gray-500 transition-100" :class="{
          'invisible': !item.children,
          '-rotate-90': item.hidden,
        }"
        @click.stop="item.hidden = !item.hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
      <Checkbox
        v-if="selectable"
        v-model="checkedValues"
        :value="item.value"
        :disabled="item.disabled"
        @change="handleCheck"
      >
        {{ item.label }}
      </Checkbox>
      <span v-else>
        {{ item.label }}
      </span>
    </div>
    <!-- secondary level -->
    <div v-for="sub of item.children" :key="sub.value" class="hover:rounded hover:bg-gray-100 pl-10">
      <!-- TODO: optimize -->
      <Transition>
        <template v-if="!item.hidden">
          <div class="flex cursor-pointer items-center gap-1 px-2 py-0.5 transition-100">
            <Checkbox
              v-if="selectable" v-model="checkedValues" :value="sub.value" :disabled="sub.disabled"
              @change="handleCheck"
            >
              {{ sub.label }}
            </Checkbox>
            <span v-else>
              {{ sub.label }}
            </span>
          </div>
        </template>
      </Transition>
    </div>
  </div>
</template>
