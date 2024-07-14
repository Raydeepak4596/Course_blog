import { Avatar, Box, Button, Divider, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Addpost from './Addpost';
import Totalpost from './Totalpost';

const Dashboard = () => {
  
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ 
        width: 250, 
        borderRight: '1px solid #ccc', 
        p: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <Avatar sx={{ width: 56, height: 56, mb: 2 }} />
        <Typography variant="h6">Deepak Kumar</Typography>
        <Divider sx={{ width: '100%', my: 2 }} />
        <List component="nav" sx={{ width: '100%' }}>
          <ListItemButton component={Link} to="/add_post">
            <ListItemText primary="Add Post" />
          </ListItemButton>
          <Divider />
          <ListItemButton component={Link} to="/total_post">
            <ListItemText primary="Total Post" />
          </ListItemButton>
          <Divider />
        </List>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ 
          backgroundColor: 'blue', 
          textAlign: 'center', 
          color: 'white', 
          py: 2 
        }}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>
        <Box sx={{ p: 3, flex: 1 }}>
          <Routes>
            <Route path="/add_post" element={<Addpost />} />
            <Route path="/total_post" element={<Totalpost />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
