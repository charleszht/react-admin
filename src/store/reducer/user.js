/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-07-06 11:29:18
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 16:27:29
 */
import { SET_TOKEN, SET_USER } from '../actionTypes'

const defaultState = {
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user')) || {}
}

export default (state = defaultState, action) => {
  if (action.type === SET_TOKEN) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.token = action.token
    localStorage.setItem('token', action.token)
    return newState
  } else if (action.type === SET_USER) {
    console.log(action)
    let newState = JSON.parse(JSON.stringify(state))
    newState.user = action.user
    localStorage.setItem('user', JSON.stringify(action.user))
    return newState
  } else {
    return state
  }
}
