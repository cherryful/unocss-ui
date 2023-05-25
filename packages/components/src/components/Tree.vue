<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'

export interface TreeOption {
  label: string
  value: any
  hidden?: boolean
  disabled?: boolean
  children?: TreeOption[]
}

const props = withDefaults(defineProps<{
  modelValue?: any
  options?: Array<TreeOption>
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

const emit = defineEmits(['update:modelValue'])

const theOptions = ref<Array<TreeOption>>(props.options)

const checkedValues = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

function handleCheck(e: Event) {
  if (!props.cascade)
    return
  const val = (e.target as any).value
  theOptions.value.forEach((item) => {
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
  theOptions.value.forEach(item => item.hidden = true)
  nextTick(() => {
    const expandedKeys = props.defaultExpandedKeys
    if (!expandedKeys.length)
      return

    theOptions.value.forEach((item) => {
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
  <div class="w-full">
    <div v-for="(item, idx) of theOptions" :key="item.value + idx">
      <div class="hover:bg-primary-100 flex cursor-pointer items-center gap-1 px-2 py-0.5 transition-100 hover:rounded">
        <span
          class="mr-1 h-4 w-4 cursor-pointer text-gray-500 duration-200"
          :class="{
            'invisible': !item.children,
            '-rotate-90': item.hidden,
          }"
          @click.stop="item.hidden = !item.hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        <div v-if="selectable" class="flex items-center">
          <input
            v-model="checkedValues"
            type="checkbox"
            :disabled="item.disabled"
            :value="item.value"
            class="text-primary-400 focus:ring-primary-500 border-gray-300 rounded"
            :class="item.disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'"
            @change="handleCheck"
          >
          <label
            class="ml-2"
            :class="item.disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
          >
            <slot name="option" :item="item">
              {{ item.label }}
            </slot>
          </label>
        </div>
        <span v-else>
          <slot name="option" :item="item">
            {{ item.label }}
          </slot>
        </span>
      </div>
      <!-- TODO: add animation -->
      <Transition>
        <div v-show="!item.hidden" class="pl-4">
          <UTree
            v-model="checkedValues"
            :cascade="cascade"
            :selectable="selectable"
            :options="item.children"
            :default-expanded-keys="defaultExpandedKeys"
          >
            <template #option="slotProps: any">
              <slot name="option" :item="slotProps.item">
                {{ slotProps.item.label }}
              </slot>
            </template>
          </UTree>
        </div>
      </Transition>
    </div>
  </div>
</template>
