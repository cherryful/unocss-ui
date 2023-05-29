<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

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

watch(() => props.options, (val) => {
  theOptions.value = deepCopy(val)
})

const checkedValues = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

function handleCheck(e: Event) {
  if (!props.cascade)
    return
  const { value } = (e.target as HTMLInputElement)
  checkOption(
    theOptions.value.find(item => item.value === value)!,
    checkedValues.value.includes(value),
  )
}

function checkOption(option: TreeOption, checked: boolean) {
  if (!option || option.disabled)
    return

  if (checked) {
    if (!checkedValues.value.includes(option.value))
      checkedValues.value.push(option.value)
  }
  else {
    if (checkedValues.value.includes(option.value))
      checkedValues.value.splice(checkedValues.value.indexOf(option.value), 1)
  }

  if (props.cascade && option.children)
    option.children.forEach(sub => checkOption(sub, checked))
}

function handleExpand(option: TreeOption) {
  option.hidden = true

  if (!props.defaultExpandedKeys.length)
    return

  if (props.defaultExpandedKeys.includes(option.value))
    option.hidden = false
  option.children?.forEach(sub => handleExpand(sub))
}

onMounted(() => {
  // default expanded keys
  theOptions.value.forEach(item => handleExpand(item))
})

function deepCopy(arr: any) {
  const result: any = Array.isArray(arr) ? [] : {}
  for (const key in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, key)) {
      if (typeof arr[key] === 'object' && arr[key] !== null)
        result[key] = deepCopy(arr[key])
      else
        result[key] = arr[key]
    }
  }
  return result
}
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
            class="focus:ring-primary-500 text-primary-400 border-gray-300 rounded"
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
            <template #option="slotProps: { item: TreeOption } ">
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
