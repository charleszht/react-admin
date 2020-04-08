import React from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import Editor from 'for-editor'
import './index.less'
import { uploadFile } from '@/api/file'
import { publish } from '@/api/article'


class ArticleAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: '',
      loading: false,
      mdStr: '132',
      article: {
        title: '',
        image: '',
        markdown: '',
        content: ''
      },
      openFileDialog: false
    }
    this.uploadFile = this.uploadFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.publishArticle = this.publishArticle.bind(this)
  }
  uploadFile = (params) => {
    const formData = new FormData()
    formData.append('file', params.file)
    this.setState({
      loading: true
    })
    uploadFile(formData).then(res => {
      if (res.code === 200) {
        this.setState({
          loading: false,
          article: { ...this.state.article, image: res.data }
        })
        message.success(res.message)
      }
    })
  }
  handleChange = (value) => {
    console.log(value)
  }
  handleTitleChange = (changedFields, allFields) => {
    const { title } = allFields
    this.setState({
      article: { ...this.state.article, title: title ? title : '' }
    })
  }
  publishArticle = (e) => {
    console.log(e)
    // publish(this.state.article).then(res => {
    //   if (res.code === 200) {
    //     message.success(res.message)
    //   }
    // })
  }
  uploadArticle = (params) => {
    const formData = new FormData()
    formData.append('file', params.file)
  }
  validateParams = () => {
    const { article } = this.state
    console.log(article)
    if (!article.title) {
      message.error('请输入文章标题')
    } else if (!article.image) {
      message.error('请上传文章缩略图')
    } else {
      this.setState({
        openFileDialog: true
      })
    }
  }
  render () {
    return (
      <div className="content-box">
        <Form className="article-add-form" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} onFinish={ this.publishArticle } onValuesChange={ this.handleTitleChange }>
          <Form.Item label="标题" name="title" rules={[
            { required: true, message: '请输入文章标题' }
          ]}>
            <Input />
          </Form.Item>
          <Form.Item label="图片" name="image" rules={[
            { required: true, message: '请上传缩略图' }
          ]}>
            <Upload className="image-upload" showUploadList={ false } action="" customRequest={ this.uploadFile }>
              { 
                this.state.article.articleImage ? 
                <img className="image-preview" src={ this.state.article.image } alt={ this.state.article.image } style={{ width: '100%' }} /> 
                : 
                <div>
                  {
                    this.state.loading ? 
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
              onChange={ this.handleChange } 
              preview={ true }
              subfield={ true }/>
          </Form.Item>
          <Form.Item className="form-btns">
            <Button type="primary" htmlType="submit">发布</Button>
            <Button>取消</Button>
            <Upload
              showUploadList={ false } 
              action="" 
              customRequest={ this.uploadArticle } 
              accept=".md"
              openFileDialogOnClick={ this.state.openFileDialog }>
                <Button type="primary" onClick={ this.validateParams }>上传markdown</Button>
            </Upload>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default ArticleAdd
