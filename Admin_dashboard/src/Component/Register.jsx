import React, { useState } from 'react'
import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
import axios from 'axios'
const Register = () => {
    const[data,setdata]=useState({
        name:'',
        email:'',
        password:'',
        confirm_password:''



    })
const datahandle=(e)=>{
    const{name,value}=e.target
    setdata({...data,[name]:value})
}

const datasubmit=(e)=>{

    try {
        if(data.password === data.confirm_password){
            const d_data={
                name:data.name,
                email:data.email,
                password:data.password
            }
            axios.post(`http://localhost:4000/api/vi/register`,d_data)
            setdata({name:'',email:'',password:'',confirm_password:''})
        }
       else{
        alert(' Password not match ')
       }
    } catch (error) {
        
    }
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
            <InputBase  onChange={datahandle} type='text'
                sx={{ width: '100%', padding: '0.2rem 0.2rem' }}
                placeholder='Name' name='name' value={data.name}
            />
             <Divider/>
            <InputBase onChange={datahandle} type='email'
                sx={{ width: '100%', padding: '0.2rem 0.2rem' }}
                placeholder='Email' name='email' value={data.email}
            />
             <Divider/>
            <InputBase onChange={datahandle} type='password'
                sx={{ width: '100%', padding: '0.2rem 0.2rem' }}
                placeholder='Password' name='password' value={data.password}
            />
             <Divider/>
              <InputBase  onChange={datahandle} name='confirm_password' value={data.confirm_password}
                sx={{ width: '100%', padding: '0.2rem 0.2rem' }} type='password'
                placeholder='Confirm-Password'
            />
            <Divider/>
            <Button onClick={datasubmit}
                variant='contained'
                sx={{ marginTop: '1rem' }} // Adds margin on top of the button
            >
                Register
            </Button>

            <br/>
            <Typography component='a' href='/' textAlign='right'>Login</Typography>
        </Box>
    </Box>
</>
  )
}

export default Register