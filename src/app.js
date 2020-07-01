import React, { useState } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import LayoutBox from '@/layout'
import Login from '@/pages/login'
import store from '@/store'

const App = props => {
  const [token, setToken] = useState(true)
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login }></Route>
        <Route path="/" render={
          () => {
            return token ? <LayoutBox /> : <Redirect to="/login" />
          }
        }></Route> 
      </Switch>
    </BrowserRouter>
  )
}

export default App
