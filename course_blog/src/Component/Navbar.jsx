import React from 'react'
import {AppBar, Box, Button, Container, Divider, List, ListItemButton, Toolbar, Typography} from '@mui/material'
const Navbar = () => {
  return (
    <>
   
      <AppBar position='sticky'>
        <Toolbar>
           <Typography flexGrow={1}><h2>Blog</h2></Typography>
           <List sx={{display:'flex'}}>
            <ListItemButton>
                Home
            </ListItemButton>
            <ListItemButton>
                About
            </ListItemButton>
            <ListItemButton>
                Project
            </ListItemButton>
            <ListItemButton>
                Contact
            </ListItemButton>
           </List>
        </Toolbar>
        
      </AppBar>
      <Toolbar>
       <Container>
       <h1>Read Our Latest Blog</h1>
       <p>
       "Unlock the full potential of web development with our expert guides, tips, and tutorials, designed to elevate your skills 
       and ensure a successful future in the dynamic digital world."</p>
       <Divider/>
       </Container>
      </Toolbar>
    </>
  )
}

export default Navbar