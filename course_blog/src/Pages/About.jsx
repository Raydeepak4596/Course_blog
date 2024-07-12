import { Box, Card, Container, Divider, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <>
            <Box>
                <Typography textAlign='center'><h1>About</h1></Typography>
                <Divider />
                <Container  sx={{ display: 'flex',textAlign:'justify', flexDirection:{xs:"column",sm:'row'}, justifyContent: 'center',marginTop:'2rem', alignItems: 'center' }}>
                    <Box flex={1}  sx={{order:{xs:2,sm:1 },marginTop:{xs:'2rem',sm:'0rem'}}}>
                    <Typography sx={{ marginRight: '2rem' }}>
                        Hello! I'm Deepak, a dedicated and passionate web developer with a Bachelor's degree in Computer Applications (BCA). I specialize in the MERN stack, which includes MongoDB, Express, React, and Node.js. With a solid foundation in both front-end and back-end technologies, I excel in building dynamic, efficient, and scalable web applications.

                      <h4>  My Skills</h4>
                      <ul>
                        <li>
                        Frontend: React, Material-UI, HTML5, CSS3, JavaScript (ES6+)
                        </li>
                        <li>
                        Backend: Node.js, Express.js
                        </li>
                        <li>
                        Database: MongoDB
                        </li>
                        <li>
                        Tools and Libraries: Axios, RESTful APIs, Git, Webpack
                        </li>
                      </ul>
                       
                      
                      
                       
                      <h4>  Projects  Projects</h4>
                       <p> <b>Blog Platform:</b> Developed a fully functional blog platform using React for the front-end and Node.js with Express for the back-end. Implemented features like user authentication, CRUD operations for posts, and dynamic rendering of content.</p>
                      <b>  E-commerce Website:</b> Created an e-commerce website with a comprehensive shopping cart, user authentication, product management, and order processing. Leveraged the MERN stack to ensure seamless user experiences and efficient server-client communication.
                    </Typography>
                    </Box>
                    <Box flex={1} sx={{order:{xs:1,sm:2}}} >
                        <Card component='img' sx={{ width: '100%', height: 'auto' }} src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg
'/>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default About