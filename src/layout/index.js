import React from 'react'
import { Layout } from 'antd'
import Sidebar from './sidebar'
import RouterView from '@/router'
import './index.less'
const { Header, Sider, Content } = Layout

class LayoutBox extends React.Component {
  render () {
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
}

export default LayoutBox
