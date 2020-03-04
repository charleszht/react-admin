import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { HomeOutlined, ReadOutlined, ProfileOutlined, GithubFilled } from '@ant-design/icons'
import Logo from './logo'
import './index.less'

const { SubMenu } = Menu

class Sidebar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Logo />
        <Menu className="menu" mode="inline">
          <Menu.Item>
            <NavLink to="/home">
              <HomeOutlined /> 首页
            </NavLink>
          </Menu.Item>
          <SubMenu title={
              <span>
                <ReadOutlined /> 文章管理
              </span>
            }>
            <Menu.Item>
              <NavLink to="/article/list">文章列表</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/article/add">发布文章</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu title={
              <span>
                <ProfileOutlined /> 文件管理
              </span>
            }>
            <Menu.Item>
              <NavLink to="/file/list">文件列表</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/file/upload">文件上传</NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item>
            <NavLink to="/github">
              <GithubFilled /> GitHub
            </NavLink>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    )
  }
}

export default Sidebar
