/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-07-06 11:33:23
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 16:42:35
 */ 
import { SET_TOKEN, SET_USER } from '../actionTypes'
import { userLogin, getUserInfo } from '@/api/user'
import { push } from 'connected-react-router'

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
})

export const setUser = (user) => ({
  type: SET_USER,
  user
})

export const loginAction = (loginInfo) => {
  return (dispatch) => {
    const { username, password } = loginInfo
    userLogin({ login: username, password }).then(res => {
      dispatch(setToken(res.token))
      dispatch(getUserAction())
    })
  }
}

export const getUserAction = () => {
  return (dispatch) => {
    getUserInfo().then(user => {

      dispatch(setUser(user))
      dispatch(push('/'))
    })
  }
}
