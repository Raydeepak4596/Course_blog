import React from 'react';
import { Box, InputBase, Button, Divider, Typography, TextareaAutosize } from '@mui/material';

const Contact = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Box sx={{ width: '25rem', padding: '2rem', backgroundColor: '#fff', boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center' }}>Contact Us</Typography>
        <form>
          <InputBase
            placeholder="Name"
            fullWidth
            sx={{ mb: 2, px: 1, py: 1, border: '1px solid #ccc', borderRadius: 1 }}
          />
          <Divider sx={{ mb: 2 }} />
          <InputBase
            placeholder="Email"
            fullWidth
            sx={{ mb: 2, px: 1, py: 1, border: '1px solid #ccc', borderRadius: 1 }}
          />
          <TextareaAutosize
            placeholder="Message"
            minRows={6}
            style={{ width: '100%', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '1rem' }}
          />
          <Button variant="contained" color="primary" fullWidth>Submit</Button>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
