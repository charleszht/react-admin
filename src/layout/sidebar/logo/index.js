import React from 'react'
import './index.less'

class Logo extends React.Component {
  render () {
    return (
      <div className="logo">
        <img className="logo-img" alt="logo" src={ require('@/assets/img/logo.png') } />
        <h1 className="logo-title">React-Admin</h1>
      </div>
    )
  }
}

export default Logo
