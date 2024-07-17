import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Detailpage = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const {dataa}=location.state
const backmove=()=>{
    navigate('/')
}
  return (
    // <Box>
    //     <Container>
    //         <Box>
    //         <Card component='img' src=''/>
    //     <p>{dataa.title}</p>
    //     <Button onClick={backmove}>Back</Button>
    //         </Box>
    //     </Container>
    // </Box>




    <Container>
      <Box>
        <Card sx={{ width:'100%', height: 'auto', marginTop: '2rem' }}>
          <CardMedia
            component='img'
            sx={{ maxHeight: '25rem', width:'cover' }}
            src={`http://localhost:4000/upload/${dataa.image}`}
          />
          <CardContent sx={{ padding:'0.5rem' , }}>
            <Typography variant="h5" component="h3">
              {dataa.title}
            </Typography>
            <Typography mt={2} variant="body2" color="textSecondary">
              {/* {dataa.description} */}
              <div dangerouslySetInnerHTML={{ __html: dataa.description }} />
            </Typography>
          </CardContent>
          <CardActionArea onClick={backmove} sx={{ backgroundColor: 'blue', color: 'white', padding: '0.5rem 0', textAlign: 'center' }}>
          Back
          </CardActionArea>
        </Card>
      </Box>
    </Container>

  )
}

export default Detailpage