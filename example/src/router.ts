import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const Layout = () => import('@/layout/Layout.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    name: 'General',
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      { name: 'Home', path: '/home', component: () => import('@/views/Home.vue') },
    ],
  },
  {
    name: 'Component',
    path: '/',
    component: Layout,
    children: [
      { name: 'Alert', path: '/alert', component: () => import('@/views/demo/AlertDemo.vue') },
      { name: 'Badge', path: '/badge', component: () => import('@/views/demo/BadgeDemo.vue') },
      { name: 'Button', path: '/button', component: () => import('@/views/demo/ButtonDemo.vue') },
      { name: 'Checkbox', path: '/checkbox', component: () => import('@/views/demo/CheckboxDemo.vue') },
      { name: 'Collapse', path: '/collapse', component: () => import('@/views/demo/CollapseDemo.vue') },
      { name: 'Divider', path: '/divider', component: () => import('@/views/demo/DividerDemo.vue') },
      { name: 'Drawer', path: '/drawer', component: () => import('@/views/demo/DrawerDemo.vue') },
      { name: 'Dropdown', path: '/dropdown', component: () => import('@/views/demo/DropdownDemo.vue') },
      { name: 'DynamicTags', path: '/dynamictags', component: () => import('@/views/demo/DynamicTagsDemo.vue') },
      // { name: 'FileInput', path: '/fileinput', component: () => import('@/views/demo/FileInputDemo.vue') },
      { name: 'Input', path: '/input', component: () => import('@/views/demo/InputDemo.vue') },
      { name: 'Modal', path: '/modal', component: () => import('@/views/demo/ModalDemo.vue') },
      { name: 'Popover', path: '/popover', component: () => import('@/views/demo/PopoverDemo.vue') },
      { name: 'Progress', path: '/progress', component: () => import('@/views/demo/ProgressDemo.vue') },
      { name: 'Radio', path: '/radio', component: () => import('@/views/demo/RadioDemo.vue') },
      { name: 'Select', path: '/select', component: () => import('@/views/demo/SelectDemo.vue') },
      { name: 'Skeleton', path: '/skeleton', component: () => import('@/views/demo/SkeletonDemo.vue') },
      { name: 'Switch', path: '/switch', component: () => import('@/views/demo/SwitchDemo.vue') },
      { name: 'Table', path: '/table', component: () => import('@/views/demo/TableDemo.vue') },
      { name: 'Tabs', path: '/tabs', component: () => import('@/views/demo/TabsDemo.vue') },
      { name: 'Tag', path: '/tag', component: () => import('@/views/demo/TagDemo.vue') },
      { name: 'Toast', path: '/toast', component: () => import('@/views/demo/ToastDemo.vue') },
      { name: 'Tree', path: '/tree', component: () => import('@/views/demo/TreeDemo.vue') },
    ],
  },
  { path: '/:path(.*)', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory('/unocss-ui/'),
  routes,
})

export default router
