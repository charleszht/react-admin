import React from 'react'
import { Form, Input, Button, Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import Editor from 'for-editor'
import './index.less'
import { uploadFile } from '@/api/file'
// import { publish } from '@/api/article'


class ArticleAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: '',
      loading: false,
      mdStr: '132',
      article: {
        articleTitle: '',
        articleImage: '',
        articleMarkdown: '',
        articleContent: ''
      }
    }
    this.uploadFile = this.uploadFile.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
          article: {
            articleImage: res.data
          }
        })
        message.success(res.message)
      }
    })
  }
  handleChange = (value) => {
    console.log(value)
    // this.setState({
    //   article: {
    //     art
    //   }
    // })
  }
  publishArticle = (e) => {
    console.log(e)
    // publish(this.state.article).then(res => {
    //   if (res.code === 200) {
    //     message.success(res.message)
    //   }
    // })
  }
  render () {
    return (
      <div className="content-box">
        <Form className="article-add-form" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} onFinish={ this.publishArticle }>
          <Form.Item label="标题" name="articleTitle" rules={[
            { required: true, message: '请输入文章标题' }
          ]}>
            <Input />
          </Form.Item>
          <Form.Item label="图片" name="articleImage" rules={[
            { required: true, message: '请上传缩略图' }
          ]}>
            <Upload className="image-upload" showUploadList={ false } action="" customRequest={ this.uploadFile }>
              { 
                this.state.article.articleImage ? 
                <img className="image-preview" src={ this.state.article.articleImage } alt={ this.state.article.articleImage } style={{ width: '100%' }} /> 
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
          <Form.Item label="内容" name="articleContent" rules={[
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
            <Button type="primary">上传markdown</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default ArticleAdd
