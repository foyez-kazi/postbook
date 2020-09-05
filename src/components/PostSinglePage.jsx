import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../utils/useFetchData'
import { Comments } from './Comments'

export const PostSinglePage = () => {
  const { postId } = useParams()
  const post = useFetchData(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  )

  return !post.id ? (
    <Container maxWidth="md">
      <p>Loading...</p>
    </Container>
  ) : (
    <Container maxWidth="md">
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
      <hr />
      <Comments postId={postId} />
    </Container>
  )
}
