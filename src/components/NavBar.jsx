import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export function NavBar() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <Container maxWidth="md">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction component={Link} to="/" label="postbook" />
      </BottomNavigation>
    </Container>
  )
}
