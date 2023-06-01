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
  tree: [
`const treeList = [
  {
    id: 1,
    name: 'Fruit',
    children: [
      { name: 'apple', price: 15, status: 'canEat' },
      { name: 'orange', price: 18, status: 'canEat' },
      { name: 'pear', price: 12, status: 'canNotEat' },
      { name: 'cherry', price: 20, status: 'canNotEat' },
    ],
  },
  {
    id: 2,
    name: 'Toys',
    children: [
      { name: 'Bear', price: 18, status: 'good' },
      { name: 'Cat', price: 15, status: 'good' },
      { name: 'Dog', price: 28, status: 'bad' },
    ],
  },
]`,
`<UTable :data="treeList" tree :actions="bulkActions" default-expand-all>
  <template #headers>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
      Name
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
      Price
    </th>
    <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
      Status
    </th>
  </template>
  <template #rows="{ row }">
    <th colspan="5" scope="colgroup" class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
      {{ row.name }}
    </th>
  </template>
  <template #subs="{ sub }">
    <td class="whitespace-nowrap px-3.5 py-2 pl-6 text-left text-gray-500 sm:pl-9">
      {{ sub.name }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
      {{ sub.price }}
    </td>
    <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
      {{ sub.status }}
    </td>
  </template>
</UTable>`,
  ],
}

const state = ref({
  loading: false,
  empty: false,
  bulk: false,
  divided: false,
  striped: false,
  bordered: false,
  caption: false,
  headerColor: false,
  rounded: 'sm',
})

const treeState = ref({
  caption: false,
  loading: false,
  bordered: false,
  headerColor: false,
  empty: false,
  bulk: false,
  defaultExpandAll: false,
  rounded: 'sm',
  associateParent: 'auto',
})

const list = [
  { id: 1, name: 'Alice', age: 18, email: 'alice@example.com', status: 'active' },
  { id: 2, name: 'Bob', age: 20, email: 'bob@example.com', status: 'active' },
  { id: 3, name: 'Cindy', age: 22, email: 'cindy@example.com', status: 'inactive' },
]

const treeList = [
  {
    id: 1,
    name: 'Fruit',
    children: [
      { id: 11, name: 'apple', price: 15, status: 'canEat' },
      { id: 12, name: 'orange', price: 18, status: 'canEat' },
      { id: 13, name: 'pear', price: 12, status: 'canNotEat' },
      { id: 14, name: 'cherry', price: 20, status: 'canNotEat' },
    ],
  },
  {
    id: 2,
    name: 'Toys',
    children: [
      { id: 21, name: 'Bear', price: 18, status: 'good' },
      { id: 22, name: 'Cat', price: 15, status: 'good' },
      { id: 23, name: 'Dog', price: 28, status: 'bad' },
    ],
  },
]

const bulkActions = [
  {
    name: 'Delete All',
    clicked: keys => alert(keys),
  },
]

function onClickRow(row) {
  alert(JSON.stringify(row))
}

const roundeds = ['sm', 'md', 'lg']
const associateParents = ['auto', 'check', 'uncheck']
</script>

<template>
  <DocWrap>
    <Playground>
      <template #preview>
        <UTable
          :loading="state.loading"
          :divided="state.divided"
          :bordered="state.bordered"
          :striped="state.striped"
          :data="!state.empty ? list : []"
          :actions="state.bulk ? bulkActions : []"
          :header-color="state.headerColor"
          :rounded="state.rounded"
          @click-row="onClickRow($event)"
        >
          <template v-if="state.caption" #top>
            This is the caption with the class `caption-top`
          </template>
          <template v-if="state.caption" #bottom>
            This is the caption with the class `caption-bottom`
          </template>
          <template #headers>
            <th scope="col" class="table-th font-bold">
              Name
            </th>
            <th scope="col" class="table-th">
              Age
            </th>
            <th scope="col" class="table-th">
              Email
            </th>
            <th scope="col" class="table-th">
              Status
            </th>
          </template>
          <template #rows="{ row }">
            <td class="table-td font-bold">
              {{ row.name }}
            </td>
            <td class="table-td">
              {{ row.age }}
            </td>
            <td class="table-td">
              {{ row.email }}
            </td>
            <td class="table-td">
              {{ row.status }}
            </td>
          </template>
        </UTable>
      </template>
      <template #props>
        <div class="flex flex-wrap gap-2">
          <UCheckbox v-model="state.caption">
            caption
          </UCheckbox>
          <UCheckbox v-model="state.loading">
            loading
          </UCheckbox>
          <UCheckbox v-model="state.divided">
            divided
          </UCheckbox>
          <UCheckbox v-model="state.bordered">
            bordered
          </UCheckbox>
          <UCheckbox v-model="state.striped">
            striped
          </UCheckbox>
          <UCheckbox v-model="state.headerColor">
            headerColor
          </UCheckbox>
          <UCheckbox v-model="state.empty">
            empty
          </UCheckbox>
          <UCheckbox v-model="state.bulk">
            bulk
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            rounded
          </div>
          <URadio v-for="item in roundeds" :key="item" v-model="state.rounded" :value="item">
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>

    <Playground>
      <template #preview>
        <UTable
          tree
          :loading="treeState.loading"
          :bordered="treeState.bordered"
          :rounded="treeState.rounded"
          :data="!treeState.empty ? treeList : []"
          :actions="treeState.bulk ? bulkActions : []"
          :header-color="treeState.headerColor"
          :default-expand-all="treeState.defaultExpandAll"
          :associate-parent="treeState.associateParent"
          @click-row="onClickRow($event)"
        >
          <template v-if="treeState.caption" #top>
            This is the caption with the class `caption-top`
          </template>
          <template v-if="treeState.caption" #bottom>
            This is the caption with the class `caption-bottom`
          </template>
          <template #headers>
            <th scope="col" class="table-th">
              Name
            </th>
            <th scope="col" class="table-th">
              Price
            </th>
            <th scope="col" class="table-th">
              Status
            </th>
          </template>
          <template #rows="{ row }">
            <th colspan="5" scope="colgroup" class="table-td">
              {{ row.name }}
            </th>
          </template>
          <template #subs="{ sub }">
            <td class="table-sub first">
              {{ sub.name }}
            </td>
            <td class="table-sub other">
              {{ sub.price }}
            </td>
            <td class="table-sub other">
              {{ sub.status }}
            </td>
          </template>
        </UTable>
      </template>
      <template #props>
        <div class="flex flex-wrap gap-2">
          <UCheckbox v-model="treeState.caption">
            caption
          </UCheckbox>
          <UCheckbox v-model="treeState.loading">
            loading
          </UCheckbox>
          <UCheckbox v-model="treeState.bordered">
            bordered
          </UCheckbox>
          <UCheckbox v-model="treeState.headerColor">
            headerColor
          </UCheckbox>
          <UCheckbox v-model="treeState.bulk">
            bulk
          </UCheckbox>
        </div>
        <div class="flex gap2">
          <UCheckbox v-model="treeState.empty">
            empty
          </UCheckbox>
          <UCheckbox v-model="treeState.defaultExpandAll">
            defaultExpandAll (toggle `empty` to view effects)
          </UCheckbox>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-16">
            rounded
          </div>
          <URadio v-for="item in roundeds" :key="item" v-model="treeState.rounded" :value="item">
            {{ item }}
          </URadio>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <div class="w-40">
            associate-parent
          </div>
          <URadio v-for="item in associateParents" :key="item" v-model="treeState.associateParent" :value="item">
            {{ item }}
          </URadio>
        </div>
      </template>
    </Playground>
    <Sample title="base" :snippets="snippets.base">
      <UTable :data="list">
        <template #headers>
          <th scope="col" class="table-th">
            Name
          </th>
          <th scope="col" class="table-th">
            Age
          </th>
          <th scope="col" class="table-th">
            Email
          </th>
          <th scope="col" class="table-th">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="table-td">
            {{ row.name }}
          </td>
          <td class="table-td">
            {{ row.age }}
          </td>
          <td class="table-td">
            {{ row.email }}
          </td>
          <td class="table-td">
            {{ row.status }}
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="empty" :snippets="snippets.empty">
      <UTable :data="[]">
        <template #headers>
          <th scope="col" class="table-th">
            Name
          </th>
          <th scope="col" class="table-th">
            Age
          </th>
          <th scope="col" class="table-th">
            Email
          </th>
          <th scope="col" class="table-th">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="table-td">
            {{ row.name }}
          </td>
          <td class="table-td">
            {{ row.age }}
          </td>
          <td class="table-td">
            {{ row.email }}
          </td>
          <td class="table-td">
            {{ row.status }}
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="loading" :snippets="snippets.loading">
      <UTable :data="list" loading>
        <template #headers>
          <th scope="col" class="table-th">
            Name
          </th>
          <th scope="col" class="table-th">
            Age
          </th>
          <th scope="col" class="table-th">
            Email
          </th>
          <th scope="col" class="table-th">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="table-td">
            {{ row.name }}
          </td>
          <td class="table-td">
            {{ row.age }}
          </td>
          <td class="table-td">
            {{ row.email }}
          </td>
          <td class="table-td">
            {{ row.status }}
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="bulkActions" :snippets="snippets.bulkActions">
      <UTable :data="list" :actions="bulkActions">
        <template #headers>
          <th scope="col" class="table-th">
            Name
          </th>
          <th scope="col" class="table-th">
            Age
          </th>
          <th scope="col" class="table-th">
            Email
          </th>
          <th scope="col" class="table-th">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="table-td">
            {{ row.name }}
          </td>
          <td class="table-td">
            {{ row.age }}
          </td>
          <td class="table-td">
            {{ row.email }}
          </td>
          <td class="table-td">
            {{ row.status }}
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="icon" :snippets="snippets.icon">
      <UTable :data="list">
        <template #headers>
          <th scope="col" class="table-th">
            Name
          </th>
          <th scope="col" class="table-th">
            Age
          </th>
          <th scope="col" class="table-th">
            Email
          </th>
          <th scope="col" class="table-th">
            Status
          </th>
          <th scope="col" class="table-th" />
        </template>
        <template #rows="{ row }">
          <td class="table-td">
            {{ row.name }}
          </td>
          <td class="table-td">
            {{ row.age }}
          </td>
          <td class="table-td">
            {{ row.email }}
          </td>
          <td class="table-td">
            {{ row.status }}
          </td>
          <td class="table-td">
            <div class="flex items-center justify-center gap-3 text-lg lg:px-4">
              <span class="i-mdi:apple inline-block cursor-pointer" />
              <span class="i-mdi:lightning-bolt cursor-pointer" />
              <span class="i-mdi:mail cursor-pointer" />
            </div>
          </td>
        </template>
      </UTable>
    </Sample>
    <Sample title="tree" :snippets="snippets.tree">
      <UTable :data="treeList" tree :actions="bulkActions" default-expand-all>
        <template #headers>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
            Price
          </th>
          <th scope="col" class="col-span-3 px-3 py-3.5 text-left font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <th colspan="5" scope="colgroup" class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
            {{ row.name }}
          </th>
        </template>
        <template #subs="{ sub }">
          <td class="whitespace-nowrap px-3.5 py-2 pl-6 text-left text-gray-500 sm:pl-9">
            {{ sub.name }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
            {{ sub.price }}
          </td>
          <td class="whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6">
            {{ sub.status }}
          </td>
        </template>
      </UTable>
    </Sample>
  </DocWrap>
</template>

<style lang="scss" scoped>
.table-th {
  @apply col-span-3 px-3 py-3.5 font-semibold text-left text-gray-900 sm:pl-6;
}

.table-td {
  @apply whitespace-nowrap px-3.5 py-2 pl-4 text-left text-gray-500 sm:pl-6;
}

.table-sub {
  @apply whitespace-nowrap px-3.5 py-2 text-left text-gray-500;
  &.first {
    @apply pl-6 sm:pl-9;
  }
  &.other {
    @apply pl-4 sm:pl-6;
  }
}
</style>
