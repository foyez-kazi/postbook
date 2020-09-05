import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Button, Icon } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentInput: {
    // display: 'inline-block',
    width: '75%',
  },
}))

export const AddComment = ({ handleCommentSubmit }) => {
  const classes = useStyles()
  const [comment, setComment] = useState('')

  return (
    <form
      onSubmit={(e) => handleCommentSubmit(e, comment, setComment)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className={classes.commentInput}
        id="standard-basic"
        label="Write a comment..."
      />
      <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
        Comment
      </Button>
    </form>
  )
}
