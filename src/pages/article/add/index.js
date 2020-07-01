import React, { useState } from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import Editor from 'for-editor'
import './index.less'
import { uploadFile } from '@/api/file'
// import { publish } from '@/api/article'


const ArticleAdd = props => {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [mdStr, setMdStr] = useState('132')
  const [article, setArticle] = useState({
    title: '',
    image: '',
    markdown: '',
    content: ''
  })
  const [openFileDialog, setOpenFileDialog] = useState(false)
  const uploadFileHandle = (params) => {
    const formData = new FormData()
    formData.append('file', params.file)
    setLoading(true)
    uploadFile(formData).then(res => {
      if (res.code === 200) {
        setLoading(false)
        setArticle({ ...article, image: res.data })
        message.success(res.message)
      }
    })
  }
  const handleChange = (value) => {
    console.log(value)
  }
  const handleTitleChange = (changedFields, allFields) => {
    const { title } = allFields
    setArticle({ ...article, title: title ? title : '' })
  }
  const publishArticle = (e) => {
    console.log(e)
    // publish(this.state.article).then(res => {
    //   if (res.code === 200) {
    //     message.success(res.message)
    //   }
    // })
  }
  const uploadArticle = (params) => {
    const formData = new FormData()
    formData.append('file', params.file)
  }
  const validateParams = () => {
    console.log(article)
    if (!article.title) {
      message.error('请输入文章标题')
    } else if (!article.image) {
      message.error('请上传文章缩略图')
    } else {
      setOpenFileDialog(true)
    }
  }
  return (
    <div className="content-box">
      <Form className="article-add-form" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} onFinish={ publishArticle } onValuesChange={ handleTitleChange }>
        <Form.Item label="标题" name="title" rules={[
          { required: true, message: '请输入文章标题' }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="图片" name="image" rules={[
          { required: true, message: '请上传缩略图' }
        ]}>
          <Upload className="image-upload" showUploadList={ false } action="" customRequest={ uploadFileHandle }>
            { 
              article.articleImage ? 
              <img className="image-preview" src={ article.image } alt={ article.image } style={{ width: '100%' }} /> 
              : 
              <div>
                {
                  loading ? 
                  <LoadingOutlined />
                  :
                  <PlusOutlined />
                }
              </div>
            }
          </Upload>
        </Form.Item>
        <Form.Item label="内容" name="content" rules={[
          { required: true, message: '请输入文章内容' }
        ]}>
          <Editor 
            height="500px"
            onChange={ handleChange } 
            preview={ true }
            subfield={ true }/>
        </Form.Item>
        <Form.Item className="form-btns">
          <Button type="primary" htmlType="submit">发布</Button>
          <Button>取消</Button>
          <Upload
            showUploadList={ false } 
            action="" 
            customRequest={ uploadArticle } 
            accept=".md"
            openFileDialogOnClick={ openFileDialog }>
              <Button type="primary" onClick={ validateParams }>上传markdown</Button>
          </Upload>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ArticleAdd
