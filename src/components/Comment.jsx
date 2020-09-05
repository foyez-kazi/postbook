import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    border: '1px solid grey',
    padding: '10px',
  },
  userBox: {
    display: 'flex',
    alignItems: 'center',
  },
  userImg: {
    borderRadius: '50%',
    marginRight: '10px',
  },
})

export const Comment = ({ comment: { id, name, body } }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.userBox}>
        <img
          className={classes.userImg}
          src={`https://randomuser.me/api/portraits/thumb/men/${id}.jpg`}
          alt={name}
        />
        <h5>{name}</h5>
      </div>
      <p>{body}</p>
    </div>
  )
}
