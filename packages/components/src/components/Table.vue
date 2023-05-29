<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  data?: Array<any>
  actions?: Array<{
    name: string
    clicked: Function
  }>
  loading?: boolean
  divided?: boolean
  bordered?: boolean
  striped?: boolean
  tree?: boolean
  headerColor?: boolean
  rowKey?: string
  defaultExpandAll?: boolean
}>(), {
  data: () => [],
  actions: () => [],
  loading: false,
  divided: false,
  bordered: false,
  striped: false,
  tree: false,
  headerColor: false,
  rowKey: 'id',
  defaultExpandAll: false,
})

defineEmits(['hoverRow'])

const data = ref(props.data)
const selectIds = ref<Array<number | string>>([])

watch(() => props.data, (val) => {
  data.value = val
  selectIds.value = []
})

const indeterminate = computed(() => {
  const data = props.data
  return data && data.length > 0 && selectIds.value.length > 0 && selectIds.value.length < data.length
})

function handleSelect(e: Event) {
  const target = e.target as HTMLInputElement
  if (target.checked) {
    // TODO: handle tree data
    selectIds.value = data.value.map(p => p[props.rowKey])
  }
  else {
    selectIds.value = []
  }
}

onMounted(() => {
  data.value.forEach(p => p._hideSubItem = true)

  if (props.defaultExpandAll)
    data.value.forEach(p => p._hideSubItem = false)
})
</script>

<script lang="ts">
export default {
  name: 'UTable',
}
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="overflow-x-auto -mx-4 -my-2 lg:-mx-8 sm:-mx-6">
      <div class="inline-block min-w-full py-2 align-middle lg:px-8 md:px-6">
        <div
          class="relative overflow-hidden md:rounded-lg"
          :class="{
            'ring-1 ring-gray-300 border-opacity-50': bordered,
          }"
        >
          <!-- Head Bulk Actions  -->
          <div
            v-if="selectIds.length > 0"
            class="absolute left-12 top-0 z-10 h-12 flex items-center sm:left-16 space-x-3"
          >
            <button
              v-for="action in actions" :key="action.name" :disabled="!selectIds.length"
              class="focus:ring-primary-500 inline-flex items-center border border-gray-300 rounded bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
              @click="action.clicked(selectIds)"
            >
              {{ action.name }}
            </button>
          </div>
          <table class="min-w-full table-fixed overflow-x-auto">
            <caption class="caption-top">
              <slot name="top" />
            </caption>
            <caption class="caption-bottom">
              <slot name="bottom" />
            </caption>
            <thead :class="{ 'bg-gray-50': headerColor }">
              <tr :class="{ 'divide-x divide-gray-300': divided }">
                <!-- Selection box for the header -->
                <th v-if="actions?.length" scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
                  <input
                    type="checkbox" class="checkbox"
                    :checked="data.length > 0 && selectIds.length === data.length"
                    :indeterminate="indeterminate"
                    @change="handleSelect"
                  >
                </th>
                <!-- Tree arrow -->
                <th v-if="tree" scope="col" />
                <slot name="headers" />
              </tr>
            </thead>
            <tbody class="relative overflow-x-auto bg-white divide-y divide-gray-200">
              <tr :class="{ invisible: !loading }" class="absolute h-full w-full">
                <td :colspan="99">
                  <div class="absolute h-full w-full flex items-center justify-center">
                    <slot name="loading">
                      <svg class="opacity-80" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g stroke="#888888"><circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3"><animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" /><animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" /></circle><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g></svg>
                    </slot>
                  </div>
                </td>
              </tr>
              <tr v-if="data.length === 0">
                <td :colspan="99">
                  <div class="min-h-32 flex items-center justify-center">
                    <slot name="empty">
                      <svg class="opacity-30" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#888888" d="M12 11.997a1.316 1.316 0 1 1 0-2.632a1.316 1.316 0 0 1 0 2.632zm2.916-.021c0-2.828-1.109-5.397-2.916-7.298a10.556 10.556 0 0 0-2.916 7.298c0 1.297.234 2.535.66 3.683c-.618.9-1.074 2.16-1.275 3.616c.639-.767 1.422-1.306 2.292-1.591c.363.555.78 1.096 1.239 1.574c.461-.494.876-1.02 1.239-1.59c.87.271 1.653.826 2.29 1.576c-.199-1.456-.655-2.716-1.275-3.615c.427-1.155.66-2.385.66-3.69l.002.037zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-22C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0z" /></svg>
                    </slot>
                  </div>
                </td>
              </tr>
              <template v-else>
                <template v-for="(item, idx) in data" :key="item[rowKey]">
                  <tr
                    class="duration-300 hover:bg-gray-100"
                    :class="{
                      'even:bg-gray-50': striped,
                      'divide-x divide-gray-300': divided,
                      'bg-gray-50': selectIds.includes(item[rowKey]),
                      'opacity-30': loading,
                    }"
                    @mouseenter="$emit('hoverRow', item)"
                  >
                    <!-- Selection box for the body -->
                    <td v-if="actions?.length" class="relative w-12 px-6 sm:w-16 sm:px-8">
                      <div
                        v-if="selectIds.includes(item[rowKey])"
                        class="bg-primary-600 absolute inset-y-0 left-0 w-0.5"
                      />
                      <input v-model="selectIds" :value="item[rowKey]" type="checkbox" class="checkbox">
                    </td>
                    <!-- Tree arrow -->
                    <td v-if="tree" class="w-1">
                      <button
                        class="i-heroicons:chevron-right h-4 w-4 flex items-center duration-200"
                        :class="{ 'rotate-90': !item._hideSubItem }"
                        @click="item._hideSubItem = !item._hideSubItem"
                      />
                    </td>
                    <slot name="rows" :row="item" :index="idx" />
                  </tr>
                  <template v-if="tree && !item._hideSubItem">
                    <tr
                      v-for="(sub, subIdx) in item.children" :key="sub[rowKey]"
                      class="hover:bg-gray-100"
                      :class="{
                        'bg-gray-50': selectIds.includes(item[rowKey]),
                        'opacity-30': loading,
                      }"
                      @mouseenter="$emit('hoverRow', sub)"
                    >
                      <!-- Selection box for the body -->
                      <td v-if="actions?.length" class="relative w-12 px-6 sm:w-16 sm:px-8">
                        <div
                          v-if="selectIds.includes(item[rowKey])"
                          class="bg-primary-600 absolute inset-y-0 left-0 w-0.5"
                        />
                        <input v-model="selectIds" :value="item[rowKey]" type="checkbox" class="checkbox">
                      </td>
                      <td class="w-1">
                        <div class="i-heroicons:minus h-4 w-4 flex items-center opacity-20" />
                      </td>
                      <slot name="subs" :sub="sub" :index="subIdx" />
                    </tr>
                  </template>
                </template>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkbox {
  @apply absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 sm:left-6;
}
</style>
