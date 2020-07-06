import React, { useState, useEffect } from 'react'
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
    dataIndex: 'title',
    ellipsis: true,
    width: '200px'
  },
  {
    align: 'center',
    title: '简介',
    dataIndex: 'description',
    ellipsis: true,
    width: '800px'
  },
  {
    align: 'center',
    title: '浏览',
    dataIndex: 'views',
    width: '80px'
  },
  {
    align: 'center',
    title: '点击',
    dataIndex: 'likes',
    width: '80px'
  },
  {
    align: 'center',
    title: '更新时间',
    dataIndex: 'updateTime',
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

const ArticleList = props => {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  useEffect(() => {
    getArticleList()
  }, [])

  const getArticleList = () => {
    setLoading(true)
    getList().then(res => {
      res.list.forEach((item, index) => {
        item['key'] = index + 1
      })
      setLoading(false)
      setList(res.list)
    })
  }
  return (
    <div className="content-box">
      <Table columns={ columns } dataSource={ list } bordered loading={ loading } size="small"></Table>
    </div>
  )
}

export default ArticleList
