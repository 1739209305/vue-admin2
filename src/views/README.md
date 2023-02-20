###### 项目介绍

1. 这个项目运用了 vue、mock、ts、element ui、vuex、动态路由等技术。
2. 首页，介绍了一下项目。
3. 引导页，引导用户使用。
4. 网站，收藏了一些实用的网站，包括自己的博客地址。
5. 工具，包括图片格式转化、富文本编辑器，json 格式化工具，代码比较工具、markdown。
6. 组件，包括 kinesis、数字 count to 以及文字特效等
7. 路由嵌套，项目使用的动态路由，根据用户的身份来获取不同的菜单。
8. 3D，运用了 threejs，实现了跑车，椅子等 3D 效果。
9. 优化，懒加载，防抖和节流等。。。。。。。

##### 动态路由

项目使用了动态路由，根据用户的身份，获取对应身份权限的菜单。
admin_yao 是管理员身份，visitor 是游客，管理员身份的菜单更加丰富。
目前系统没有实现登录超时返回登录页的功能。（一般可以设置三个小时或者一天）。

1. 向后端发送请求，根据不同用户的身份返回不同菜单数据，后端没有职责返回树形结构数据，一般会返回列表格式数据，例子：

```javascript
;[
  {
    id: 1,
    pid: 0,
    path: 'dashboard',
    name: 'views/Dashboard',
    link: '/layout/dashboard',
    icon: 'el-icon-s-home',
    title: '首页'
  },
  {
    id: 2,
    pid: 0,
    path: 'guide',
    name: 'views/guide/Index',
    link: '/layout/guide',
    icon: 'el-icon-position',
    title: '引导页'
  },
  {
    id: 3,
    pid: 0,
    path: 'website',
    name: 'views/website/Index',
    link: '/layout/website',
    icon: 'el-icon-eleme',
    title: '网站'
  },
  {
    id: 4,
    pid: 0,
    path: 'tools',
    name: 'views/tools/Index',
    link: '/tools',
    icon: 'el-icon-s-tools',
    title: '工具'
  },
  {
    id: 5,
    pid: 4,
    path: 'imageBase64',
    name: 'views/tools/ImageBase64',
    link: '/layout/tools/imageBase64',
    icon: 'el-icon-menu',
    title: '图片格式转化'
  },
  {
    id: 6,
    pid: 4,
    path: 'editor',
    name: 'views/tools/Editor',
    link: '/layout/tools/editor',
    icon: 'el-icon-menu',
    title: '富文本编辑器'
  },
  {
    id: 7,
    pid: 4,
    path: 'jsonViewer',
    name: 'views/tools/JsonViewer',
    link: '/layout/tools/jsonViewer',
    icon: 'el-icon-menu',
    title: 'JSON格式化'
  }
]
```

2. 转换路由数据为树形结构数据，这个步骤在 store 中进行，把转化后的数据添加到动态路由中

```javascript
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
```

3. 把树形结构数据转化为菜单所需要的数据

```javascript
export function dataToTree(parents, children) {
  parents.map((p) => {
    children.map((c, index) => {
      if (c.pid === p.id) {
        let _c = JSON.parse(JSON.stringify(children))
        _c.slice(index, 1)

        dataToTree([c], _c)

        if (p.children) {
          p.children.push(c)
        } else {
          p.children = [c]
        }
      }
    })
  })
  return parents
}
```
