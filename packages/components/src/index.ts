import type { App } from 'vue'
import Alert from './components/Alert.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import Collapse from './components/Collapse.vue'
import Divider from './components/Divider.vue'
import Drawer from './components/Drawer.vue'
import Dropdown from './components/Dropdown.vue'
import DynamicTags from './components/DynamicTags.vue'
import FileInput from './components/FileInput.vue'
import Input from './components/Input.vue'
import Loading from './components/Loading.vue'
import Modal from './components/Modal.vue'
import Popover from './components/Popover.vue'
import Progress from './components/Progress.vue'
import Radio from './components/Radio.vue'
import Select from './components/Select.vue'
import Skeleton from './components/Skeleton.vue'
import Spin from './components/Spin.vue'
import Switch from './components/Switch.vue'
import Table from './components/Table.vue'
import Tag from './components/Tag.vue'
import Toast from './components/Toast.vue'
import Tree from './components/Tree.vue'
import Tabs from './components/Tabs/Tabs.vue'
import TabPane from './components/Tabs/TabPane.vue'

const components = [
  Alert,
  Badge,
  Button,
  Checkbox,
  Collapse,
  Divider,
  Drawer,
  Dropdown,
  DynamicTags,
  FileInput,
  Input,
  Loading,
  Modal,
  Popover,
  Progress,
  Radio,
  Select,
  Skeleton,
  Spin,
  Switch,
  Table,
  Tag,
  Toast,
  Tree,
  Tabs,
  TabPane,
]

// set install function
for (const c of components) {
  c.install = (app: App) => {
    app.component(c.name, c)
  }
}

export {
  Alert,
  Badge,
  Button,
  Checkbox,
  Collapse,
  Divider,
  Drawer,
  Dropdown,
  DynamicTags,
  FileInput,
  Input,
  Loading,
  Modal,
  Popover,
  Progress,
  Radio,
  Select,
  Skeleton,
  Spin,
  Switch,
  Table,
  Tag,
  Toast,
  Tree,
  Tabs,
  TabPane,
}

export default function install(app: App) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
