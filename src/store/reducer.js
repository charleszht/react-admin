import { LOGIN, SET_USERINFO } from '@/store/actionTypes'
import { getToken } from '@/utils/auth'
import { localGet } from '@/utils'

const defaultState = {
  token: getToken() || '',
  user: localGet('user') || {}
}

export default (state = defaultState, action) => {
  if (action.type === LOGIN) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.token = action.token
    return newState
  }
  if (action.type === SET_USERINFO) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.user = action.user
    return newState
  }
  return state
}