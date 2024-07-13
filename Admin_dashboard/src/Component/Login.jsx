import React from 'react'
import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
const Login = () => {
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
                    <InputBase
                        sx={{ width: '100%', padding: '0.2rem 0.2rem' }}
                        placeholder='Email'
                    />
                    <Divider/>
                    <InputBase
                        sx={{ width: '100%', padding: '0.2rem 0.2rem' }}
                        placeholder='Password'
                    />
                    <Divider/>
                    <Button
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