import React, { useState } from 'react'
import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[data,setdat]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate()

const handledata=(e)=>{
    const{name,value}=e.target
    setdat({...data,[name]:value})
}

const handlebtn=()=>{
    axios.post(`http://localhost:4000/api/vi/login`,data)
    setdat({name:'',password:''})
    navigate('/register')
    
}
    return (
        <>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}
            >
                <Box
                    sx={{
                        width: '40%',
                        height: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem', // Adds space between the input fields and button
                    }}
                >
                    <InputBase name='email'  value={data.name}  onChange={handledata}
                        sx={{ width: '100%', padding: '0.2rem 0.2rem' }}
                        placeholder='Email'
                    />
                    <Divider/>
                    <InputBase name='password' value={data.password}  onChange={handledata}
                        sx={{ width: '100%', padding: '0.2rem 0.2rem' }}
                        placeholder='Password'
                    />
                    <Divider/>
                    <Button onClick={handlebtn}
                        variant='contained'
                        sx={{ marginTop: '1rem' }} // Adds margin on top of the button
                    >
                        Submit
                    </Button>
                    <br/>
                    <Typography  component='a' href='/register' textAlign='right'>Register</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Login