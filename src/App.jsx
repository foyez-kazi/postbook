import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Posts } from './components/Posts'
import { PostSinglePage } from './components/PostSinglePage'
import { Layout } from './components/Layout'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Posts />
        </Route>
        <Route path="/posts/:postId">
          <PostSinglePage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
