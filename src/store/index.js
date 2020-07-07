/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-03-04 17:50:01
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-07 09:15:35
 */ 
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history'
import user from './reducer/user'

export const history = createHashHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
  user
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(routerMiddleware(history),thunk)))

export default store
