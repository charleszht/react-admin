import React from 'react'
import { Route } from 'react-router-dom'
import Home from '@/pages/home'
import ArticleList from '@/pages/article/list'
import ArticleAdd from '@/pages/article/add'
import FileList from '@/pages/file/list'
import FileUpload from '@/pages/file/upload'

class RouterView extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route path="/home" component={ Home }></Route>
        <Route path="/article/list" component={ ArticleList }></Route>
        <Route path="/article/add" component={ ArticleAdd }></Route>
        <Route path="/file/list" component={ FileList }></Route>
        <Route path="/file/upload" component={ FileUpload }></Route>
      </React.Fragment>
    )
  }
}

export default RouterView
