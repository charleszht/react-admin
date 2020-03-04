import React from 'react'
import { Table, Button } from 'antd'
import './index.less'
import { getList } from '@/api/article'

const columns = [
  {
    align: 'center',
    title: '序号',
    dataIndex: 'key',
    width: '50px'
  },
  {
    align: 'center',
    title: '标题',
    dataIndex: 'articleTitle',
    ellipsis: true,
    width: '200px'
  },
  {
    align: 'center',
    title: '简介',
    dataIndex: 'articleDesc',
    ellipsis: true,
    width: '800px'
  },
  {
    align: 'center',
    title: '浏览',
    dataIndex: 'articleViews',
    width: '80px'
  },
  {
    align: 'center',
    title: '点击',
    dataIndex: 'articleLikes',
    width: '80px'
  },
  {
    align: 'center',
    title: '更新时间',
    dataIndex: 'articleUpdateTime',
    width: '180px'
  },
  {
    align: 'center',
    title: '操作',
    dataIndex: 'index',
    width: '180px',
    render: (text, record) => (
      <div className="table-actions">
        <Button size="small">编辑</Button>
        <Button type="danger" size="small">删除</Button>
      </div>
    )
  }
]

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  componentDidMount () {
    this.getList()
  }
  getList = () => {
    this.setState({
      loading: true
    })
    getList().then(res => {
      res.data.list.forEach((item, index) => {
        item['key'] = index + 1
      })
      this.setState({
        list: res.data.list,
        loading: false
      })
    })
  }
  render () {
    return (
      <div className="content-box">
        <Table columns={ columns } dataSource={ this.state.list } bordered loading={ this.state.loading } size="small"></Table>
      </div>
    )
  }
}

export default ArticleList
