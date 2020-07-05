import React from 'react'
import { connect } from 'react-redux'
import store from '@/store'
import { loginAction, userInfoAction } from '@/store/actionCreators'
import { userLogin, getUserInfo } from '@/api/user'
import { setToken } from '@/utils/auth'
import Login from '@/components/Login'

const LoginPage = (props) => {

  const getUser = () => {
    getUserInfo().then(res => {
      if (res.code === 200) {
        const action = userInfoAction(res.data)
        store.dispatch(action)
      }
    })
  }

  const loginHandle = (loginInfo) => {
    props.toLogin(loginInfo)
  }

  return (
    <Login login={ loginHandle } />
  )

}

const mapStateToProps = (state) => ({
  token: state.token
})

const mapDispatchToProps = (dispatch) => {
  return {
    toLogin(data) {
      dispatch(loginAction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)