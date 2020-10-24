import React from 'react'
import { Grid, AppBar, Toolbar, Button } from '@material-ui/core'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Header({ title }) {
  return(
    <Grid xs={12}>
      <AppBar style={{ background: '#00503c' }}>
        <Toolbar className="toolbar">
          <h1> {title} </h1>
          <Link to="/catador">
            <Button className="souCatadorButton" variant="outlined"> Sou catador </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}