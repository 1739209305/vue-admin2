// 把树数据转化为vue路由结构数据
export function generateRouter(userRoutes) {
  let newRouters = userRoutes.map((r) => {
    let routers = {
      path: r.path,
      name: r.name,
      component: () => import(`@/${r.name}.vue`),
      children: []
    }
    if (r.children) {
      routers.children = generateRouter(r.children)
    }
    return routers
  })

  return newRouters
}

let registerFlag = false
export function routerBeforeEach(router, store) {
  router.beforeEach(async (to, from, next) => {
    if (to.path === '/login') {
      next()
    } else {
      // 从后端获取路由数据
      const authRouter = await store.dispatch('authRouter/getAuthRouter', {
        token: store.state.user.token
      })
      // 转换路由数据为树形结构数据，这个步骤在store中进行，把转化后的数据添加到动态路由中
      const userRoutes = generateRouter(authRouter)
      // to and from are both route objects. must call `next`.
      if (!registerFlag && store.state.user.token) {
        userRoutes.forEach((el) => {
          router.addRoute('layout', el)
        })
        registerFlag = true

        next({ path: to.path, replace: true })
      } else {
        next()
      }
    }
  })
}
