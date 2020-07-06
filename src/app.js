/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-03-04 17:50:01
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 17:19:57
 */ 
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from '@/store'
import LayoutBox from '@/layout'
import LoginPage from '@/pages/login'

const App = (props) => {
  
  return (
    <ConnectedRouter history={ history }>
      <>
        <Switch>
          <Route path="/login" component={ LoginPage }></Route>
          <Route path="/" render={ () => {
            const { token } = store.getState().user
            return token ? <LayoutBox /> : <Redirect to="/login" />
          }}></Route> 
        </Switch>
      </>
    </ConnectedRouter>
  )
}

export default App
