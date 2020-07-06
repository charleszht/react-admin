/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-07-06 11:29:18
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 16:27:29
 */
import { SET_TOKEN } from '../actionTypes'

const defaultState = {
  token: '',
  user: {}
}

export default (state = defaultState, action) => {
  if (action.type === SET_TOKEN) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.token = action.token
    return newState
  } else {
    return state
  }
}
