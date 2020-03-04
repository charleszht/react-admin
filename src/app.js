import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import LayoutBox from '@/layout'
import Login from '@/pages/login'
import store from '@/store'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  storeChange () {
    this.setState(store.getState())
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={ Login }></Route>
          <Route path="/" render={
            () => {
              return this.state.token ? <LayoutBox /> : <Redirect to="/login" />
            }
          }></Route> 
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
