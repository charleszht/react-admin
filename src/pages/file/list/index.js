import React, { useState, useEffect } from 'react'
import { Table, Button, message } from 'antd'
import './index.less'
import { getList, deleteFile } from '@/api/file'
import { FileTextOutlined } from '@ant-design/icons'
import { saveAs } from 'file-saver'

const FileList = props => {
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState('all')
  const [list, setList] = useState([])

  useEffect(() => {
    getFileList()
  }, [getFileList])
  
  const getFileList = () => {
    setLoading(true)
    getList({ type: type }).then(res => {
      res.forEach((item, index) => {
        item['key'] = index + 1
      })
      setLoading(false)
      setList(res)
    })
  }
  const deleteFileHandle = (fileName) => {
    deleteFile({ fileName: fileName }).then(res => {
      if (res.code === 200) {
        message.success(res.message)
        this.getFileList()
      }
    })
  }
  const downloadFile = (fileUrl, fileName) => {
    saveAs(fileUrl, fileName)
  }
  const handleTableChange = (pagination, filters, sorter) => {
    setType(filters.fileType ? filters.fileType[0] : 'all')
    getFileList()
  }
  const columns = [
    {
      align: 'center',
      title: '序号',
      dataIndex: 'key',
      width: '50px'
    },
    {
      align: 'center',
      title: '缩略图',
      dataIndex: 'fileUrl',
      width: '200px',
      render: (text, record) => (
        <div className="thumbs">
          {
            record.fileType.includes('image') ? <img src={ record.fileUrl }  alt={ record.fileName } /> : <FileTextOutlined className="file-icon" />
          }
        </div>
      )
    },
    {
      align: 'center',
      title: '文件名称',
      dataIndex: 'fileName',
      ellipsis: true,
      width: '400px'
    },
    {
      align: 'center',
      title: '文件大小',
      dataIndex: 'fileSize',
      sorter: (a, b) => a.fileSize - b.fileSize,
      render: fileSize => {
        return (fileSize / 1024).toFixed(2) + 'KB'
      }
    },
    {
      align: 'center',
      title: '文件类型',
      dataIndex: 'fileType',
      filters: [
        {
          text: 'image',
          value: 'image'
        },
        {
          text: 'markdown',
          value: 'markdown'
        },
        {
          text: 'video',
          value: 'video'
        },
        {
          text: 'audio',
          value: 'audio'
        },
        {
          text: 'txt',
          value: 'txt'
        },
        {
          text: 'zip',
          value: 'zip'
        }
      ],
      filterMultiple: false
    },
    {
      align: 'center',
      title: '上传时间',
      dataIndex: 'uploadTime',
      sorter: (a, b) => new Date(a.uploadTime) - new Date(b.uploadTime),
    },
    {
      align: 'center',
      title: '操作',
      dataIndex: 'index',
      width: '180px',
      render: (text, record) => (
        <div className="table-actions">
          <Button size="small" onClick={ () => {
            downloadFile(record.fileUrl, record.fileName)
          } }>下载</Button>
          <Button type="danger" size="small" onClick={ () => {
            deleteFileHandle(record.fileName)
          } }>删除</Button>
        </div>
      )
    }
  ]
  return (
    <div className="content-box">
      <Table columns={ columns } dataSource={ list } bordered loading={ loading } size="small" onChange={ handleTableChange }></Table>
    </div>
  )
}

export default FileList
