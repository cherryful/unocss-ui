import { createPinia } from 'pinia'

const pinia = createPinia()
export default pinia

// export const useStore = defineStore('store', {
//   state: () => ({
//     count: 0,
//   }),
//   getters: {
//     double: state => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })
