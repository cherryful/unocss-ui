<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const props = withDefaults(defineProps<{
  components?: Array<string> | string | null
}>(), {
  components: null,
})

const app = getCurrentInstance()
const router = useRouter()

const docRoutes = router.getRoutes().filter(r => r.path.startsWith('/doc/'))
const lastRoute = computed(() => {
  const idx = docRoutes.findIndex(r => r.path === router.currentRoute.value.path)
  if (idx <= 0)
    return null
  return docRoutes[idx - 1]
})
const nextRoute = computed(() => {
  const idx = docRoutes.findIndex(r => r.path === router.currentRoute.value.path)
  if (idx < 0 || idx === docRoutes.length - 1)
    return null
  return docRoutes[idx + 1]
})

async function getComponentsProperties() {
  if (!props.components)
    return null

  const allComponents = app?.appContext.components
  const properties: any = {}

  const components = Array.isArray(props.components)
    ? props.components
    : [props.components]

  for (const c of components) {
    const component = allComponents?.[c] as any
    if (component) {
      // props
      const componentProps = component.props
      if (componentProps) {
        const mappedProps = Object.keys(componentProps).map((p) => {
          const prop = componentProps[p]
          return {
            name: p,
            type: prop.type?.name || '-',
            required: prop.required,
            defaultValue: prop.default,
          }
        })
        properties[c] = { props: mappedProps, ...properties[c] }

        // emits
        properties[c] = { emits: component.emits, ...properties[c] }

        // TODO: slots
      }
    }
  }
  return properties
}

const state = reactive({
  properties: {} as any,
})

onMounted(async () => {
  state.properties = await getComponentsProperties()
})
</script>

<template>
  <div class="mb-6 text-2xl font-bold">
    {{ router.currentRoute.value.name }} Properties Document
  </div>

  <template v-if="state.properties">
    <div class="space-y-5">
      <template v-for="(item, idx) of state.properties" :key="idx">
        <div v-if="item.props">
          <p class="my-2 text-xl">
            Props
          </p>
          <UTable :data="item.props">
            <template #headers>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Name
              </th>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Type
              </th>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Required
              </th>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Value
              </th>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Default
              </th>
            </template>
            <template #rows="{ row }">
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                <span class="text-primary-600">
                  {{ row.name }}
                </span>
              </td>
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                {{ row.type }}
              </td>
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                {{ row.required }}
              </td>
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                TODO
              </td>
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                {{ row.defaultValue }}
              </td>
            </template>
          </UTable>
        </div>

        <div v-if="item.emits">
          <p class="my-2 text-xl">
            Events
          </p>
          <UTable :data="item.emits">
            <template #headers>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Name
              </th>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Description
              </th>
            </template>
            <template #rows="{ row }">
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                <span class="text-secondary-600">
                  @{{ row }}
                </span>
              </td>
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                -
              </td>
            </template>
          </UTable>
        </div>

        <div v-if="item.slots">
          <p class="my-2 text-xl">
            Slots
          </p>
          <UTable :data="item.slots">
            <template #headers>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Name
              </th>
              <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
                Description
              </th>
            </template>
            <template #rows="{ row }">
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                <span class="text-secondary-600">
                  {{ row }}
                </span>
              </td>
              <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-gray-500 sm:pl-6">
                ...
              </td>
            </template>
          </UTable>
        </div>
      </template>
    </div>
  </template>

  <div class="mt-10 flex justify-between">
    <template v-if="lastRoute">
      <RouterLink :to="lastRoute.path">
        <button class="flex items-center gap-2">
          <span class="i-mdi:arrow-left inline-block h-6 w-6" />
          <span>
            {{ lastRoute.name }}
          </span>
        </button>
      </RouterLink>
    </template>
    <template v-if="nextRoute">
      <RouterLink :to="nextRoute.path">
        <button class="flex items-center gap-2">
          <span>
            {{ nextRoute.name }}
          </span>
          <span class="i-mdi:arrow-right inline-block h-6 w-6" />
        </button>
      </RouterLink>
    </template>
  </div>
</template>
