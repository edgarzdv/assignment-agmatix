import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isFade: false
  },
  mutations: {
    toggleIsFade(state) {
      state.isFade = !state.isFade
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isFade: (state) => state.isFade
  }
})
