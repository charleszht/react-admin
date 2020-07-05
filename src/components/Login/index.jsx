import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.less'

const Login = (props) => {

  const [ usernameFocus, setUsernameFocus ] = useState(false)
  const [ passwordFocus, setPasswordFocus ] = useState(false)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const { login } = props
  useEffect(() => {}, [username, password])
  console.log(123)

  return (
    <div className="login-page">
      <img className="wave" src={ require('./wave.png') } alt="" />
      <div className="login-wrap">
        <div className="login-img">
          <img src={ require('./bg.svg') } alt=""/>
        </div>
        <div className="login-content">
          <div className="form">
            <img src={ require('./avatar.svg') } alt=""/>
            <h2 className="title">Welcome</h2>
            <div className={ `input-item username ${ (usernameFocus || username) ? 'focus' : '' }` }>
              <div className="i">
                <i className="fa fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  value={ username }
                  onFocus={ () => setUsernameFocus(true) }
                  onBlur={ () => setUsernameFocus(false) }
                  onChange={ (e) => setUsername(e.target.value) }/>
              </div>
            </div>
            <div className={ `input-item password ${ (passwordFocus || password) ? 'focus' : '' }` }>
              <div className="i">
                <i className="fa fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  value={ password }
                  onFocus={ () => setPasswordFocus(true) }
                  onBlur={ () => setPasswordFocus(false) }
                  onChange={ (e) => setPassword(e.target.value) }/>
              </div>
            </div>
            <Link className="to-regist" to="/regist">Forgot Password</Link>
            <button className="btn" onClick={ login({ username, password }) }>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
