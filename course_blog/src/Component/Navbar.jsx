import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import {Menu} from '@mui/icons-material';
import {AppBar, Box, Button, Container, Divider, List, ListItemButton, Toolbar, Typography} from '@mui/material'
const Navbar = () => {
    
  return (
    <>
   
      <AppBar position='sticky'>
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
           <Box  sx={{display:{xs:'none',sm:'block' }}}><Typography ><h2>Blog</h2></Typography></Box>
           <Menu sx={{display:{xs:'block' , sm:'none'}}}/>
          
           <List sx={{display:'flex'}}>
            <ListItemButton>
               <Link to='/'> Home</Link>
            </ListItemButton>
            <ListItemButton> 
            <Link to='/about'>    About</Link>
            </ListItemButton>
            <ListItemButton>
                Project
            </ListItemButton>
            <ListItemButton>
               <Link to='/contact'> Contact</Link>
            </ListItemButton>
           </List>
        </Toolbar>
        
      </AppBar>
     
    </>
  )
}

export default Navbar