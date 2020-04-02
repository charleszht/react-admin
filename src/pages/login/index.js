import React from 'react'
import { UserOutlined, LockOutlined, GithubFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.less'
import store from '@/store'
import { loginAction, userInfoAction } from '@/store/actionCreators'
import { userLogin, getUserInfo } from '@/api/user'
import { localSave } from '@/utils'
import { setToken } from '@/utils/auth'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      remember: true,
      complete: false
    }
    this.rememberPwd = this.rememberPwd.bind(this)
    this.jumpGitHub = this.jumpGitHub.bind(this)
    // this.getUser = this.getUser.bind(this)
  }
  handleLogin = e => {
    userLogin(e).then(res => {
      if (res.code === 200) {
        const action = loginAction(res.data.token)
        store.dispatch(action)
        setToken(action.token)
        this.getUser()
        this.props.history.push('/')
      }
    })
  }
  rememberPwd = () => {
    this.setState({
      remember: !this.state.remember
    })
  }
  jumpGitHub = () => {
    window.location.href = 'https://github.com/charleszht'
  }
  getUser = () => {
    getUserInfo().then(res => {
      if (res.code === 200) {
        const action = userInfoAction(res.data)
        store.dispatch(action)
        localSave('user', action.user)
      }
    })
  }
  render () {
    const { complete } = this.state
    return (
      <div className="login-box">
        <div className="login-form">
          <div className="input-wrap">
            <input placeholder="用户名" />
          </div>
          <div className="input-wrap">
            <input placeholder="密码" />
          </div>
          {
            complete ? <button className="login-btn">登  录</button> : null
          }
          
        </div>
      </div>
    )
  }
}

export default Login
