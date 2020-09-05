import React from 'react'
import { Box, Container, Typography, makeStyles } from '@material-ui/core'
import { useFetchData } from '../utils/useFetchData'
import { Post } from './Post'

const useStyles = makeStyles({
  heading: {
    margin: '50px 0',
    textAlign: 'center',
  },
})

export const Posts = () => {
  const posts = useFetchData('https://jsonplaceholder.typicode.com/posts')
  const classes = useStyles()

  return (
    <Container maxWidth="md">
      <Typography variant="h3" className={classes.heading}>
        Welcome to Postbook
      </Typography>
      {posts.map((post) => (
        <Box key={post.id}>
          <Post post={post} />
        </Box>
      ))}
    </Container>
  )
}
