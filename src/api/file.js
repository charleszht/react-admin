import request from '@/utils/request'

export function getList(data) {
  return request({
    url: `/file/list/${ data.type }`,
    method: 'GET'
  })
}

export function deleteFile(data) {
  return request({
    url: '/file/delete',
    method: 'POST',
    data
  })
}

export function uploadFile(data) {
  return request({
    url: '/file/upload',
    method: 'POST',
    data
  })
}
