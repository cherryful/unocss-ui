import 'uno.css'

import type { App } from 'vue'
import UAlert from './components/Alert.vue'
import UBadge from './components/Badge.vue'
import UButton from './components/Button'
import UCheckbox from './components/Checkbox.vue'
import UCollapse from './components/Collapse.vue'
import UDivider from './components/Divider.vue'
import UDrawer from './components/Drawer.vue'
import UDropdown from './components/Dropdown.vue'
import UDynamicTags from './components/DynamicTags.vue'
import UFileInput from './components/FileInput.vue'
import UInput from './components/Input.vue'
import ULoading from './components/Loading.vue'
import UModal from './components/Modal.vue'
import UPopover from './components/Popover.vue'
import UProgress from './components/Progress.vue'
import URadio from './components/Radio.vue'
import USelect from './components/Select.vue'
import USkeleton from './components/Skeleton.vue'
import USpin from './components/Spin.vue'
import USwitch from './components/Switch.vue'
import UTable from './components/Table.vue'
import UTag from './components/Tag.vue'
import UToast from './components/Toast.vue'
import UTree from './components/Tree.vue'
import UTabs from './components/Tabs/Tabs.vue'
import UTabPane from './components/Tabs/TabPane.vue'

const components = [
  UAlert,
  UBadge,
  UButton,
  UCheckbox,
  UCollapse,
  UDivider,
  UDrawer,
  UDropdown,
  UDynamicTags,
  UFileInput,
  UInput,
  ULoading,
  UModal,
  UPopover,
  UProgress,
  URadio,
  USelect,
  USkeleton,
  USpin,
  USwitch,
  UTable,
  UTag,
  UToast,
  UTree,
  UTabs,
  UTabPane,
]

// set install function
for (const c of components) {
  c.install = (app: App) => {
    app.component(c.name, c)
  }
}

export {
  UAlert,
  UBadge,
  UButton,
  UCheckbox,
  UCollapse,
  UDivider,
  UDrawer,
  UDropdown,
  UDynamicTags,
  UFileInput,
  UInput,
  ULoading,
  UModal,
  UPopover,
  UProgress,
  URadio,
  USelect,
  USkeleton,
  USpin,
  USwitch,
  UTable,
  UTag,
  UToast,
  UTree,
  UTabs,
  UTabPane,
}

function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
