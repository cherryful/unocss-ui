import { createPinia, defineStore } from 'pinia'

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

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    user: {},
  }),
  actions: {
    signin(user: any) {
      this.isAuthenticated = true
      this.user = user
    },
    signout() {
      this.isAuthenticated = false
      this.user = {}
      localStorage.clear()
    },
  },
})
