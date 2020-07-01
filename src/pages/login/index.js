import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined, GithubFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.less'
import store from '@/store'
import { loginAction, userInfoAction } from '@/store/actionCreators'
import { userLogin, getUserInfo } from '@/api/user'
import { localSave } from '@/utils'
import { setToken } from '@/utils/auth'

const Login = props => {
  const [remember, setRemember] = useState(true)
  const handleLogin = e => {
    userLogin(e).then(res => {
      if (res.code === 200) {
        const action = loginAction(res.data.token)
        store.dispatch(action)
        setToken(action.token)
        getUser()
        props.history.push('/')
      }
    })
  }
  const rememberPwd = () => {
    setRemember(!remember)
  }
  const jumpGitHub = () => {
    window.location.href = 'https://github.com/charleszht'
  }
  const getUser = () => {
    getUserInfo().then(res => {
      if (res.code === 200) {
        const action = userInfoAction(res.data)
        store.dispatch(action)
        localSave('user', action.user)
      }
    })
  }
  return (
    <div className="login-box">
      <Form className="login-form" onFinish={ handleLogin }>
        <h1>Login</h1>
        <Form.Item name="login" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input prefix={ <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} /> } placeholder="用户名" size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password prefix={ <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} /> } placeholder="密码" autoComplete="true" size="large" />
        </Form.Item>
        <Form.Item className="login-form-action">
          <Checkbox className="login-form-remember" checked={ remember } onChange={ rememberPwd }>记住密码</Checkbox>
          <Link className="login-form-forgot" to="/forgot">忘记密码?</Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large">登录</Button>
        </Form.Item>
        <Form.Item className="other-login-type">
          <GithubFilled style={{ color: '#fff', fontSize: '35px' }} onClick={ jumpGitHub } />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login