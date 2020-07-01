import React from 'react'
import { Upload, message } from 'antd'
import './index.less'
import { uploadFile } from '@/api/file'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

const UploadFile = props => {
  const handleUpload = (params) => {
    const formData = new FormData()
    formData.append('file', params.file)
    uploadFile(formData).then(res => {
      if (res.code === 200) {
        message.success(res.message)
      }
    })
  }
  const config = {
    name: 'file',
    multiple: false,
    action: '',
    onChange(info) {
      
    }
  }
  return (
    <div className="content-box">
      <Dragger { ...config } className="drag-area" customRequest={ handleUpload }>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">将文件拖拽到此处，或点击上传</p>
      </Dragger>
    </div>
  )
}

export default UploadFile
