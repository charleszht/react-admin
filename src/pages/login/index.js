/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-03-04 17:50:01
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 13:59:26
 */ 
import React from 'react'
import { connect } from 'react-redux'
import { loginAction } from '@/store/actions/user'
import Login from '@/components/Login'

const LoginPage = (props) => {

  const { toLogin } = props

  return (
    <Login login={ toLogin } />
  )

}

const mapStateToProps = (state) => ({
  token: state.token
})

const mapDispatchToProps = (dispatch) => {
  return {
    toLogin: (loginInfo) => {
      dispatch(loginAction(loginInfo))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
