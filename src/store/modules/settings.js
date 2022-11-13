const state = { isCollapse: false }

const mutations = {
  CHANGE_COLLAPSE: (state, value) => {
    state.isCollapse = value
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
