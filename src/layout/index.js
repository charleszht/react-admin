/*
 * @Descripttion: coding...
 * @Version: 1.0.0版本
 * @Author: 张彤
 * @Date: 2020-03-04 17:50:01
 * @LastEditors: 张彤
 * @LastEditTime: 2020-07-06 17:16:43
 */ 
import React from 'react'
import { Layout } from 'antd'
import Sidebar from './sidebar'
import RouterView from '@/router'
import './index.less'
const { Header, Sider, Content } = Layout

const LayoutBox = props => {
  return (
    <Layout className="container-box">
      <Sider className="side-box" width="210">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header-box"></Header>
        <Content>
          <RouterView></RouterView>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutBox
