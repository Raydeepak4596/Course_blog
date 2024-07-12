import { Box, Container, List, ListItem } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
   <>
   <Box sx={{height:'auto ', display:'flex',justifyContent:'space-between' ,marginBottom:'1rem', marginTop:'2rem', backgroundColor:'#333' , color:'white', padding:'1rem 2rem'}}>
    <Box>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Contact</ListItem>
        </List>
    </Box>
    <Box>
        <List>
            <ListItem>Facebook</ListItem>
            <ListItem>Twitter</ListItem>
            <ListItem>Github</ListItem>
        </List>
    </Box>
    <Box>
        <List>
            <ListItem>Services</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>News</ListItem>
        </List>
    </Box>
   </Box>
   </>
  )
}

export default Footer