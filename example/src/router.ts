import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/layout/Layout.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    name: 'General',
    path: '/',
    redirect: '/getting-started',
    component: Layout,
    children: [
      { name: 'GettingStarted', path: '/getting-started', component: () => import('@/views/start/GettingStarted.vue') },
      { name: 'Customization', path: '/customization', component: () => import('@/views/start/Customization.vue') },
    ],
  },
  {
    name: 'Component',
    path: '/doc',
    redirect: '/doc/alert',
    component: Layout,
    children: [
      { name: 'Alert', path: '/doc/alert', component: () => import('@/views/demo/AlertDemo.vue') },
      { name: 'Badge', path: '/doc/badge', component: () => import('@/views/demo/BadgeDemo.vue') },
      { name: 'Button', path: '/doc/button', component: () => import('@/views/demo/ButtonDemo.vue') },
      { name: 'Checkbox', path: '/doc/checkbox', component: () => import('@/views/demo/CheckboxDemo.vue') },
      { name: 'Collapse', path: '/doc/collapse', component: () => import('@/views/demo/CollapseDemo.vue') },
      { name: 'Divider', path: '/doc/divider', component: () => import('@/views/demo/DividerDemo.vue') },
      { name: 'Drawer', path: '/doc/drawer', component: () => import('@/views/demo/DrawerDemo.vue') },
      { name: 'Dropdown', path: '/doc/dropdown', component: () => import('@/views/demo/DropdownDemo.vue') },
      { name: 'DynamicTags', path: '/doc/dynamictags', component: () => import('@/views/demo/DynamicTagsDemo.vue') },
      { name: 'FileInput', path: '/doc/fileinput', component: () => import('@/views/demo/FileInputDemo.vue') },
      { name: 'Input', path: '/doc/input', component: () => import('@/views/demo/InputDemo.vue') },
      { name: 'Loading', path: '/doc/loading', component: () => import('@/views/demo/LoadingDemo.vue') },
      { name: 'Modal', path: '/doc/modal', component: () => import('@/views/demo/ModalDemo.vue') },
      { name: 'Popover', path: '/doc/popover', component: () => import('@/views/demo/PopoverDemo.vue') },
      { name: 'Progress', path: '/doc/progress', component: () => import('@/views/demo/ProgressDemo.vue') },
      { name: 'Radio', path: '/doc/radio', component: () => import('@/views/demo/RadioDemo.vue') },
      { name: 'Select', path: '/doc/select', component: () => import('@/views/demo/SelectDemo.vue') },
      { name: 'Skeleton', path: '/doc/skeleton', component: () => import('@/views/demo/SkeletonDemo.vue') },
      { name: 'Switch', path: '/doc/switch', component: () => import('@/views/demo/SwitchDemo.vue') },
      { name: 'Table', path: '/doc/table', component: () => import('@/views/demo/TableDemo.vue') },
      { name: 'Tabs', path: '/doc/tabs', component: () => import('@/views/demo/TabsDemo.vue') },
      { name: 'Tag', path: '/doc/tag', component: () => import('@/views/demo/TagDemo.vue') },
      { name: 'Toast', path: '/doc/toast', component: () => import('@/views/demo/ToastDemo.vue') },
      { name: 'Tree', path: '/doc/tree', component: () => import('@/views/demo/TreeDemo.vue') },
    ],
  },
  { path: '/:path(.*)', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHashHistory('/unocss-ui/'),
  routes,
})

export default router
