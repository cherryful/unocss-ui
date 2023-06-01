<script setup lang="ts">
import { computed, onMounted, ref, useAttrs, watch } from 'vue'
import cloneDeep from 'lodash-es/cloneDeep'

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
  associateParent?: boolean
  selectable?: boolean
  defaultExpandedKeys?: Array<any>
  level?: number
}>(), {
  modelValue: null,
  selectable: false,
  cascade: false,
  associateParent: false,
  options: () => [],
  defaultExpandedKeys: () => [],
  level: 1,
})

const emit = defineEmits(['update:modelValue'])
const theOptions = ref<Array<TreeOption>>(cloneDeep(props.options))

// for 'all-options'
const attrs = useAttrs()

watch(() => props.options, (val) => {
  theOptions.value = cloneDeep(val)
})

const checkedValues = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

function indeterminate(item: TreeOption) {
  if (props.cascade && item.children?.length) {
    let count = 0
    for (const subItem of item.children) {
      if (checkedValues.value.includes(subItem.value))
        count++
    }
    return count > 0 && count < item.children.length
  }
}

function findParentItem(value: string, options: Array<TreeOption>): TreeOption | undefined {
  if (!options)
    return

  for (const item of options) {
    if (item.children) {
      if (item.children.some(sub => String(sub.value) === value)) {
        return item
      }
      else {
        const sub = findParentItem(value, item.children)
        if (sub)
          return sub
      }
    }
  }
}

function checkParent(value: string) {
  if (!props.associateParent)
    return

  const parent = findParentItem(value, (attrs as any)['all-options'])
  if (parent) {
    if (!checkedValues.value.includes(parent.value))
      checkedValues.value.push(parent.value)
    checkParent(parent.value)
  }
}

function uncheckParent(value: string) {
  const parent = findParentItem(value, (attrs as any)['all-options'])
  if (parent) {
    if (checkedValues.value.includes(parent.value))
      checkedValues.value.splice(checkedValues.value.indexOf(parent.value), 1)
    uncheckParent(parent.value)
  }
}

function handleCheck(e: Event) {
  if (!props.cascade)
    return
  const { value, checked } = (e.target as HTMLInputElement)

  // when check the child, check the parent
  // if no child checked, uncheck the parent
  checked ? checkParent(value) : uncheckParent(value)

  // sometimes, the value is string, sometimes it's number
  checkOption(
    theOptions.value.find(item => String(item.value) === value)!,
    checkedValues.value.includes(value) || checkedValues.value.includes(Number(value)),
  )
}

/**
 * @param option the option to check
 * @param checked whether to check or uncheck
 **/
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
            :indeterminate="associateParent ? indeterminate(item) : false"
            @change="handleCheck"
          >
          <label
            class="ml-2"
            :class="item.disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
          >
            <slot name="option" :item="item" :level="level">
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
            :options="item.children || []"
            :default-expanded-keys="defaultExpandedKeys"
            :level="level + 1"
            :all-options="level === 1 ? options : $attrs['all-options']"
            :associate-parent="associateParent"
          >
            <template #option="slotProps: { item: TreeOption, level: number } ">
              <slot name="option" :item="slotProps.item" :level="slotProps.level">
                {{ slotProps.item.label }}
              </slot>
            </template>
          </UTree>
        </div>
      </Transition>
    </div>
  </div>
</template>
