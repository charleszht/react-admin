import { LOGIN, SET_USERINFO } from '@/store/actionTypes'

export const loginAction = (token) => ({
  type: LOGIN,
  token
})

export const userInfoAction = (user) => ({
  type: SET_USERINFO,
  user
})
