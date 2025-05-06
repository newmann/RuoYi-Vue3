import request from '@/utils/request'

// 获取路由
export const getRouters = () => {
  return request({
    url: '/s1/collie-spa/user/routers',
    method: 'get'
  })
}