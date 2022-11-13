import { getAuthRouter } from '@/api/authRouter'
import { dataToTree } from '@/utils/utils'

const state = {
  nav: []
}

const mutations = {
  SET_ROUTER_AUTH: (state, token) => {
    state.nav = token
  }
}

// 获取权限路由
const actions = {
  getAuthRouter({ commit }, token) {
    return new Promise((resolve, reject) => {
      getAuthRouter(token)
        .then((response) => {
          const { data } = response
          const parents = data.filter((el) => el.pid === 0)
          const childrens = data.filter((el) => el.pid !== 0)
          const userRoutes = dataToTree(parents, childrens)
          commit('SET_ROUTER_AUTH', userRoutes)
          resolve(userRoutes)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
