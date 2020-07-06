import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import user from './reducer/user'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  router: connectRouter(history),
  user
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(routerMiddleware(history),thunk)))

export default store
