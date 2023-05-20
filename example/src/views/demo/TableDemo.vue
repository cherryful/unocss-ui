<script setup>
import { ref } from 'vue'

import UTable from '../../../../packages/components/src/components/Table.vue'

import DocWrap from '@/components/DocWrap.vue'
import Sample from '@/components/Sample.vue'
import Playground from '@/components/Playground.vue'

const snippets = {
  base: [
`const list = [
{
  id: 1,
  name: 'Alice',
  age: 18,
  email: 'alice@example.com',
  status: 'active',
},
{
  id: 2,
  name: 'Bob',
  age: 20,
  email: 'bob@example.com',
  status: 'active',
},
{
  id: 3,
  name: 'Cindy',
  age: 22,
  email: 'cindy@example.com',
  status: 'inactive',
}]`,
`<UTable :data="list">
  <template #headers>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Name
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Age
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Email
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Status
    </th>
  </template>
  <template #rows="{ row }">
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.name }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.age }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.email }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.status }}
    </td>
  </template>
</UTable>`,
  ],
  empty: [
    'const list = []',
`<UTable :data="list">
  ...
</UTable>`,
  ],
  loading: [
`<UTable :data="list" loading>
  ...
</UTable>`,
  ],
  bulkActions: [
`const bulkActions = [
  {
    name: 'Delete All',
    clicked: keys => alert(keys),
  },
]`,
`<UTable :data="list" :actions="bulkActions">
  ...
</UTable>
`,
  ],
  icon: [
`<UTable :data="list">
  <template #headers>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Name
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Age
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Email
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
      Status
    </th>
    <th scope="col" class="col-span-3 px-4 py-3.5 text-sm font-semibold text-gray-900" />
  </template>
  <template #rows="{ row }">
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.name }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.age }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.email }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
      {{ row.status }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-base text-gray-500 sm:pl-6">
      <div class="flex items-center justify-center gap-3 lg:px-4">
        <span class="i-mdi:apple inline-block cursor-pointer" />
        <span class="i-mdi:lightning-bolt cursor-pointer" />
        <span class="i-mdi:mail cursor-pointer" />
      </div>
    </td>
  </template>
</UTable>`,
  ],
}

const state = ref({
  loading: false,
  empty: false,
  bulk: false,
})

const list = [
  {
    id: 1,
    name: 'Alice',
    age: 18,
    email: 'alice@example.com',
    status: 'active',
  },
  {
    id: 2,
    name: 'Bob',
    age: 20,
    email: 'bob@example.com',
    status: 'active',
  },
  {
    id: 3,
    name: 'Cindy',
    age: 22,
    email: 'cindy@example.com',
    status: 'inactive',
  },
]

const bulkActions = [
  {
    name: 'Delete All',
    clicked: keys => alert(keys),
  },
]
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UTable
          :loading="state.loading"
          :data="!state.empty ? list : []"
          :actions="state.bulk ? bulkActions : []"
        >
          <template #headers>
            <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
              Name
            </th>
            <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
              Age
            </th>
            <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
              Email
            </th>
            <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
              Status
            </th>
          </template>
          <template #rows="{ row }">
            <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
              {{ row.name }}
            </td>
            <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
              {{ row.age }}
            </td>
            <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
              {{ row.email }}
            </td>
            <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
              {{ row.status }}
            </td>
          </template>
        </UTable>
      </template>
      <template #props>
        <div class="flex gap-2">
          <UCheckbox v-model="state.loading">
            loading
          </UCheckbox>
          <UCheckbox v-model="state.empty">
            empty
          </UCheckbox>
          <UCheckbox v-model="state.bulk">
            bulk
          </UCheckbox>
        </div>
      </template>
    </Playground>
    <Sample title="base" :snippets="snippets.base">
      <UTable :data="list">
        <template #headers>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.name }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.age }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.email }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.status }}
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="empty" :snippets="snippets.empty">
      <UTable :data="[]">
        <template #headers>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.name }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.age }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.email }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.status }}
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="loading" :snippets="snippets.loading">
      <UTable :data="list" loading>
        <template #headers>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.name }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.age }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.email }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.status }}
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="bulkActions" :snippets="snippets.bulkActions">
      <UTable :data="list" :actions="bulkActions">
        <template #headers>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.name }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.age }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.email }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.status }}
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <UTable :data="list">
        <template #headers>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
          <th scope="col" class="col-span-3 px-4 py-3.5 text-sm font-semibold text-gray-900" />
        </template>
        <template #rows="{ row }">
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.name }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.age }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.email }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-sm text-gray-500 sm:pl-6">
            {{ row.status }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-center text-base text-gray-500 sm:pl-6">
            <div class="flex items-center justify-center gap-3 lg:px-4">
              <span class="i-mdi:apple inline-block cursor-pointer" />
              <span class="i-mdi:lightning-bolt cursor-pointer" />
              <span class="i-mdi:mail cursor-pointer" />
            </div>
          </td>
        </template>
      </UTable>
    </Sample>
  </DocWrap>
</template>
