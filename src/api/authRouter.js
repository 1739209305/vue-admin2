import request from '@/utils/request'

export function getAuthRouter(data) {
  return request({
    url: '/router/getAuthRouter',
    method: 'get',
    data
  })
}
