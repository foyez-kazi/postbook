import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Posts } from './components/Posts'
import { PostSinglePage } from './components/PostSinglePage'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route path="/posts/:postId">
        <PostSinglePage />
      </Route>
    </Switch>
  )
}

export default App
