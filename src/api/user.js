import request from '@/utils/request'

export function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'GET'
  })
}
