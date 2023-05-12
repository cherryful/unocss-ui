<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  data: Array<any>
  actions?: Array<{
    name: string
    clicked: Function
  }>
  loading?: boolean
}>(), {
  actions: () => [],
  loading: false,
})

const selectIds = ref <Array<number | string>>([])
watch(() => props.data, () => selectIds.value = [])

const indeterminate = computed(() => {
  const data = props.data
  return data && data.length > 0 && selectIds.value.length > 0 && selectIds.value.length < data.length
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
        <div class="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <!-- Head Bulk Actions  -->
          <div
            v-if="selectIds.length > 0"
            class="absolute left-12 top-0 z-10 h-12 flex items-center bg-gray-50 sm:left-16 space-x-3"
          >
            <button
              v-for="action in actions" :key="action.name" :disabled="!selectIds.length"
              class="inline-flex items-center border border-gray-300 rounded bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              @click="action.clicked(selectIds)"
            >
              {{ action.name }}
            </button>
          </div>
          <table class="min-w-full table-fixed overflow-x-auto divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <!-- Selection box for the header -->
                <th v-if="actions?.length" scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
                  <input
                    type="checkbox" class="checkbox"
                    :checked="data.length > 0 && selectIds.length === data.length"
                    :indeterminate="indeterminate"
                    @change="selectIds = ($event?.target as any).checked ? data.map((p) => p.id) : []"
                  >
                </th>
                <slot name="headers" />
              </tr>
            </thead>
            <tbody class="relative overflow-x-auto bg-white divide-y divide-gray-200">
              <tr
                class="absolute h-full w-full flex items-center justify-center"
                :class="{ invisible: !loading }"
              >
                <td :colspan="99">
                  <slot name="loading">
                    <div :class="{ 'opacity-50': loading }">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><rect width="6" height="14" x="1" y="4" fill="#888888"><animate id="svgSpinnersBarsScaleFade0" fill="freeze" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;5" /><animate fill="freeze" attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="22;14" /><animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" values="1;.2" /></rect><rect width="6" height="14" x="9" y="4" fill="currentColor" opacity=".4"><animate fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;5" /><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="22;14" /><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" values="1;.2" /></rect><rect width="6" height="14" x="17" y="4" fill="currentColor" opacity=".3"><animate id="svgSpinnersBarsScaleFade1" fill="freeze" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;5" /><animate fill="freeze" attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="22;14" /><animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" values="1;.2" /></rect></svg>
                    </div>
                  </slot>
                </td>
              </tr>
              <tr v-if="data.length === 0">
                <td :colspan="99">
                  <div class="min-h-32 flex items-center justify-center">
                    <template v-if="$slots.empty">
                      <slot name="empty" />
                    </template>
                    <template v-else>
                      <!-- <div class="i-simple-icons:protodotio select-none text-5xl text-gray-400" /> -->
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M12 11.997a1.316 1.316 0 1 1 0-2.632a1.316 1.316 0 0 1 0 2.632zm2.916-.021c0-2.828-1.109-5.397-2.916-7.298a10.556 10.556 0 0 0-2.916 7.298c0 1.297.234 2.535.66 3.683c-.618.9-1.074 2.16-1.275 3.616c.639-.767 1.422-1.306 2.292-1.591c.363.555.78 1.096 1.239 1.574c.461-.494.876-1.02 1.239-1.59c.87.271 1.653.826 2.29 1.576c-.199-1.456-.655-2.716-1.275-3.615c.427-1.155.66-2.385.66-3.69l.002.037zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-22C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0z" /></svg>
                    </template>
                  </div>
                </td>
              </tr>
              <template v-else>
                <tr
                  v-for="(item, idx) in data" :key="item.id"
                  class="duration-300 hover:bg-gray-50"
                  :class="{
                    'bg-gray-50': selectIds.includes(item.id),
                    'opacity-70': loading,
                  }"
                >
                  <!-- Selection box for the body -->
                  <td v-if="actions?.length" class="relative w-12 px-6 sm:w-16 sm:px-8">
                    <div
                      v-if="selectIds.includes(item.id)"
                      class="absolute inset-y-0 left-0 w-0.5 bg-primary-600"
                    />
                    <input v-model="selectIds" :value="item.id" type="checkbox" class="checkbox">
                  </td>
                  <slot name="rows" :row="item" :index="idx" />
                </tr>
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
  @apply absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary-600;
  @apply focus:ring-primary-500 sm:left-6;
}
</style>
