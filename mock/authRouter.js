const auth_router = {
  admin_token: [
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
    },
    {
      id: 8,
      pid: 4,
      path: 'codeDiff',
      name: 'views/tools/CodeDiff',
      link: '/layout/tools/codeDiff',
      icon: 'el-icon-menu',
      title: '代码比较工具'
    },
    {
      id: 9,
      pid: 4,
      path: 'markDown',
      name: 'views/tools/MarkDown',
      icon: 'el-icon-menu',
      link: '/layout/tools/markDown',
      title: 'MarkDown'
    },
    {
      id: 10,
      pid: 0,
      path: 'components',
      name: 'views/components/Index',
      link: 'layout/components',
      icon: 'el-icon-s-cooperation',
      title: '组件'
    },
    {
      id: 11,
      pid: 10,
      path: 'kinesis',
      name: 'views/components/Kinesis',
      link: '/layout/components/Kinesis',
      icon: 'el-icon-menu',
      title: 'Kinesis'
    },
    {
      id: 12,
      pid: 10,
      path: 'countTo',
      name: 'views/components/CountTo',
      link: '/layout/components/countTo',
      icon: 'el-icon-menu',
      title: '数字'
    },
    {
      id: 13,
      pid: 10,
      path: 'text',
      name: 'views/components/textAnimation/Index',
      link: '/layout/components/text',
      icon: 'el-icon-menu',
      title: '文字'
    },
    {
      id: 14,
      pid: 0,
      path: 'nested',
      name: 'views/nested/Index',
      link: '/layout/nested',
      icon: 'el-icon-menu',
      title: '路由嵌套'
    },
    {
      id: 15,
      pid: 14,
      path: 'menu1',
      name: 'views/nested/menu1/Index',
      link: '/layout/nested/menu1',
      icon: 'el-icon-menu',
      title: '菜单1'
    },
    {
      id: 16,
      pid: 15,
      path: 'menu1-1',
      name: 'views/nested/menu1/menu1-1/Index',
      link: '/layout/nested/menu1/menu1-1',
      icon: 'el-icon-menu',
      title: '菜单1-1'
    },
    {
      id: 17,
      pid: 15,
      path: 'menu1-2',
      name: 'views/nested/menu1/menu1-2/Index',
      link: '/layout/nested/menu1/menu1-2',
      icon: 'el-icon-menu',
      title: '菜单1-2'
    },
    {
      id: 18,
      pid: 17,
      path: 'menu1-2-1',
      name: 'views/nested/menu1/menu1-2/menu1-2-1/Index',
      link: '/layout/nested/menu1/menu1-2/menu1-2-1',
      icon: 'el-icon-menu',
      title: '菜单1-2-1'
    },
    {
      id: 19,
      pid: 17,
      path: 'menu1-2-2',
      name: 'views/nested/menu1/menu1-2/menu1-2-2/Index',
      link: '/layout/nested/menu1/menu1-2/menu1-2-2',
      icon: 'el-icon-menu',
      title: '菜单1-2-2'
    },
    {
      id: 20,
      pid: 14,
      path: 'menu2',
      name: 'views/nested/menu2/Index',
      link: '/layout/nested/menu2',
      icon: 'el-icon-menu',
      title: '菜单2'
    },
    {
      id: 21,
      pid: 0,
      path: 'threejs',
      name: 'views/threejs/Index',
      link: '/layout/threejs',
      icon: 'el-icon-view',
      title: '3D'
    },
    {
      id: 22,
      pid: 21,
      path: 'car',
      name: 'views/threejs/Car',
      link: '/layout/threejs/car',
      icon: 'el-icon-menu',
      title: '跑车'
    },
    {
      id: 22,
      pid: 21,
      path: 'chair',
      name: 'views/threejs/Chair',
      link: '/layout/threejs/chair',
      icon: 'el-icon-menu',
      title: '椅子'
    },
    {
      id: 23,
      pid: 21,
      path: 'heart',
      name: 'views/threejs/Heart',
      link: '/layout/threejs/heart',
      icon: 'el-icon-menu',
      title: '心'
    },
    {
      id: 24,
      pid: 0,
      path: 'performance',
      name: 'views/performance/Index',
      link: '/layout/lazy',
      icon: 'el-icon-finished',
      title: '优化'
    },
    {
      id: 25,
      pid: 24,
      path: 'imageLazy',
      name: 'views/performance/ImageLazy',
      link: '/layout/performance/imageLazy',
      icon: 'el-icon-menu',
      title: '懒加载'
    },
    {
      id: 26,
      pid: 24,
      path: 'debounce',
      name: 'views/performance/Debounce',
      link: '/layout/performance/debounce',
      icon: 'el-icon-menu',
      title: '防抖'
    },
    {
      id: 27,
      pid: 24,
      path: 'throttle',
      name: 'views/performance/Throttle',
      link: '/layout/performance/throttle',
      icon: 'el-icon-menu',
      title: '节流'
    }
  ],
  vistor_token: [
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
    }
  ]
}

module.exports = [
  {
    url: '/router/getAuthRouter',
    type: 'get',
    response: (config) => {
      const { token } = config.body
      const info = auth_router[token]
      // mock error
      if (!info) {
        return {
          code: 500,
          message: '获取失败，没有获取到路由权限信息'
        }
      }
      return {
        code: 200,
        data: info
      }
    }
  }
]
