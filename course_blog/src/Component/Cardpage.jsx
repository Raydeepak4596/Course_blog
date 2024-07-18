import { Box, Card, CardMedia, Container, CardContent, Typography, CardActionArea } from '@mui/material'
import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'
const Cardpage = (props) => {
const navigate=useNavigate()


const movetonextpage= ()=>{
navigate(`/detailpage/${props.d._id}`,{state:{dataa:props.d}})
}
  return (
    <Container>
      <Box>
        <Card sx={{ maxWidth: '25rem', height: 'auto', marginTop: '2rem' }}>
          <CardMedia
            component='img'
            sx={{ maxHeight: '15rem', objectFit: 'cover' }}
            src={`http://localhost:4000/upload/${props.d.image}`}
          />
          <CardContent sx={{ minHeight: '8rem' ,padding:'0.5rem' , }}>
            <Typography variant="h5" component="h3">
              {props.d.title.length > 50 ? props.d.title.slice(0, 50) + '...' : props.d.title}
            </Typography>
            {/* { <Typography mt={2} variant="body2" color="textSecondary">
              {props.d.description.length > 100 ? props.d.description.slice(0, 100) + '...' : props.d.description}
            </Typography> }  */}
            <div dangerouslySetInnerHTML={{ __html: props.d.description.slice(0,200)+'...' }} />
          </CardContent>
          <CardActionArea onClick={movetonextpage} sx={{ backgroundColor: 'blue', color: 'white', padding: '0.5rem 0', textAlign: 'center' }}>
            Read More
          </CardActionArea>
        </Card>
      </Box>
    </Container>
  )
}

export default Cardpage
