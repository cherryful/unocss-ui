import { h } from 'vue'
import URadio from '../../packages/components/src/components/Radio.vue'

// render URadio
export function renderRadio(state: any, prop: string, value: any) {
  return h(URadio, {
    'modelValue': state[prop],
    'value': value,
    'onUpdate:modelValue': v => state[prop] = v,
  }, { default: () => value })
}
