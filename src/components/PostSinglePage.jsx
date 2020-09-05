import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../utils/useFetch'
import { Comments } from './Comments'

export const PostSinglePage = () => {
  const { postId } = useParams()
  const post = useFetchData(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  )

  return !post.id ? (
    <p>Loading...</p>
  ) : (
    <Container maxWidth="md">
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
      <hr />
      <Comments postId={postId} />
    </Container>
  )
}
