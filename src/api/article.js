import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/article/list',
    method: 'GET',
    params
  })
}
