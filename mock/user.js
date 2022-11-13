const tokens = {
  admin_yao: {
    token: 'admin_token'
  },
  visitor: {
    token: 'vistor_token'
  }
}
const RoleEnum = {
  SUPER: 'super',
  VISITOR: 'visitor'
}
const users = {
  admin_token: {
    userid: '00000001',
    userName: 'xin,yao',
    role: RoleEnum.SUPER,
    phone: '@cname',
    address: 'xxxxx'
  },
  vistor_token: {
    userid: '00000002',
    userName: 'visitor',
    role: RoleEnum.SUPER,
    phone: '@cname',
    address: 'xxxxx'
  }
}

module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: (config) => {
      const { username } = config.body
      const token = tokens[username]
      if (!token) {
        return {
          code: 500,
          message: '登录失败'
        }
      }
      return {
        code: 200,
        data: token
      }
    }
  },
  {
    url: '/user/info.*',
    type: 'get',
    response: (config) => {
      const { token } = config.query
      const info = users[token]
      // mock error
      if (!info) {
        return {
          code: 500,
          message: '登录失败，没有获取到用户信息'
        }
      }
      return {
        code: 200,
        data: info
      }
    }
  }

  // user logout
  //   {
  //     url: '/vue-element-admin/user/logout',
  //     type: 'post',
  //     response: (_) => {
  //       return {
  //         code: 20000,
  //         data: 'success'
  //       }
  //     }
  //   }
]
