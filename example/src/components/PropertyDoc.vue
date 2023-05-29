<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import docs from '@/locales/en'

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
            type: prop.type?.name,
            required: prop.required, // FIXME: dev working, build not working
            defaultValue: prop.default,
          }
        })
        properties[c] = { props: mappedProps, ...properties[c] }

        // emits
        properties[c] = { emits: component.emits, ...properties[c] }

        // slots
        // TODO: optimize and i18n
        if (docs.components[c]?.slots) {
          const slotsArr = Object.entries(docs.components[c].slots).map(([name, value]) => ({
            name,
            description: (value as any).description,
          }))
          properties[c] = { slots: slotsArr, ...properties[c] }
        }
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
          <UTable :data="item.props" header-color>
            <template #headers>
              <th scope="col" class="table-th">
                Name
              </th>
              <th scope="col" class="table-th">
                Type
              </th>
              <th scope="col" class="table-th">
                Required
              </th>
              <!-- <th scope="col" class="table-th">
                Value
              </th> -->
              <th scope="col" class="table-th">
                Default
              </th>
            </template>
            <template #rows="{ row }">
              <td class="table-td">
                <span class="text-primary-600">
                  {{ row.name }}
                </span>
              </td>
              <td class="table-td">
                {{ row.type }}
              </td>
              <td class="table-td">
                {{ row.required }}
              </td>
              <!-- <td class="table-td">
                TODO: get type options, such as "sm | md | lg"
              </td> -->
              <td class="table-td">
                {{ row.defaultValue }}
              </td>
            </template>
          </UTable>
        </div>

        <div v-if="item.emits">
          <p class="my-2 text-xl">
            Events
          </p>
          <UTable :data="item.emits" header-color>
            <template #headers>
              <th scope="col" class="table-th">
                Name
              </th>
              <th scope="col" class="table-th">
                Description
              </th>
            </template>
            <template #rows="{ row }">
              <td class="table-td w-1/2">
                <span class="text-secondary-600">
                  @{{ row }}
                </span>
              </td>
              <td class="table-td w-1/2">
                -
              </td>
            </template>
          </UTable>
        </div>

        <div v-if="item.slots">
          <p class="my-2 text-xl">
            Slots
          </p>
          <UTable :data="item.slots" header-color>
            <template #headers>
              <th scope="col" class="table-th">
                Name
              </th>
              <th scope="col" class="table-th">
                Description
              </th>
            </template>
            <template #rows="{ row }">
              <td class="table-td w-1/2">
                <span class="text-accent-600">
                  {{ row.name }}
                </span>
              </td>
              <td class="table-td w-1/2">
                {{ row.description }}
              </td>
            </template>
          </UTable>
        </div>
      </template>
    </div>
  </template>

  <!-- Flipping pages  -->
  <div class="mt-10 flex justify-between">
    <RouterLink v-if="lastRoute" :to="lastRoute.path">
      <button class="hover:text-primary-500 flex items-center gap-2 text-gray-700">
        <span class="i-mdi:arrow-left inline-block h-6 w-6" />
        <span>
          {{ lastRoute.name }}
        </span>
      </button>
    </RouterLink>
    <div v-else />
    <RouterLink v-if="nextRoute" :to="nextRoute.path">
      <button class="hover:text-primary-500 flex items-center gap-2 text-gray-700">
        <span>
          {{ nextRoute.name }}
        </span>
        <span class="i-mdi:arrow-right inline-block h-6 w-6" />
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
.table-th {
  @apply col-span-3 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-6
}
.table-td {
  @apply whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6;
}
</style>
