import { Container, Divider, Grid, Toolbar } from '@mui/material'
import React from 'react'
import Cardpage from '../Component/Cardpage'

const Home = () => {
  return (
   <Container >
     <Toolbar>
       <Container>
       <h1>Read Our Latest Blog</h1>
       <p>
       "Unlock the full potential of web development with our expert guides, tips, and tutorials, designed to elevate your skills 
       and ensure a successful future in the dynamic digital world."</p>
       <Divider/>
       </Container>
      </Toolbar>
   <Grid container rowSpacing={2} mb={2}>
    <Grid item xs={12} sm={6}  >
        <Cardpage/>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Cardpage/>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Cardpage/>
    </Grid>
    <Grid item xs={12} sm={6}>
        <Cardpage/>
    </Grid>
   </Grid>
   </Container>
  )
}

export default Home