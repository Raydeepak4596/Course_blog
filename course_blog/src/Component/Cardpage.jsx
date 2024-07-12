import { Button,Box, Card, CardMedia, Container, CardContent, Typography, CardActionArea } from '@mui/material'
import React from 'react'

const Cardpage = () => {
  return (
 <Container>
    <Box>
        <Card sx={{maxWidth:'25rem', height:'auto' ,marginTop:'2rem'}}>
            <CardMedia component='img' src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg'/>
            <CardContent>
              <h3>Why Mern is famous?</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, eum.</p>
            </CardContent>
            <CardActionArea sx={{backgroundColor:'blue' ,color:'white' ,padding:'0.5rem 0' , textAlign:'center'}}>
              Read More
            </CardActionArea>
        </Card>
    </Box>
 </Container>
  )
}

export default Cardpage