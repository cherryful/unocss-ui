import { createApp } from 'vue'
import Confirm from '@/components/Confirm.vue'

export async function useConfirm({
  title = 'Are you sure?',
  content = '',
  okText = 'YES',
  cancelText = 'NO',
  onOk = () => {},
  onCancel = () => {},
  option = {},
}) {
  const mountNode = document.createElement('div')
  const instance = createApp(Confirm, {
    title,
    content,
    okText,
    cancelText,
    onOk,
    onCancel,
    ...option,
    onClose: () => {
      instance.unmount()
      document.body.removeChild(mountNode)
    },
  })

  document.body.appendChild(mountNode)
  instance.mount(mountNode)
}
