/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-03-04 17:50:01
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 17:19:01
 */ 
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import user from './reducer/user'

const rootReducer = combineReducers({
  user
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
