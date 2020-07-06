/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-03-04 17:50:01
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 14:05:30
 */ 
import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: '/api',
  timeout: 500000
})

service.interceptors.request.use(
  config => {
    if (store.getState().token) {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(response.data)
    const { code, data, message } = response.data
    if (code === 200) {
      return data
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
