/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-03-04 17:50:01
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 17:19:57
 */ 
import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import LayoutBox from '@/layout'
import LoginPage from '@/pages/login'

const App = (props) => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={ LoginPage }></Route>
        <Route path="/" component={ LayoutBox }></Route> 
      </Switch>
    </HashRouter>
  )
}

export default App
