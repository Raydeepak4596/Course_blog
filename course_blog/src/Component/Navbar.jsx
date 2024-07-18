import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Menu } from '@mui/icons-material';
import { AppBar, Box, Drawer, Divider, List, ListItemButton, Toolbar, Typography, Avatar } from '@mui/material';

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleDrawerOpen = () => {
    setIsTrue(true);
  };

  const handleDrawerClose = () => {
    setIsTrue(false);
  };

  return (
    <>
      <AppBar position='sticky'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link  to='/'>  <Typography variant="h4">Blog</Typography></Link>
          </Box>
          <Menu onClick={handleDrawerOpen} sx={{ display: { xs: 'block', sm: 'none' } }} />
          <List sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <ListItemButton component={Link} to='/'>
              Home
            </ListItemButton>
            <ListItemButton component={Link} to='/about'>
              About
            </ListItemButton>
            <ListItemButton component={Link} to='/project'>
              Project
            </ListItemButton>
            <ListItemButton component={Link} to='/contact'>
              Contact
            </ListItemButton>
          </List>
        </Toolbar>
      </AppBar>
      <Drawer open={isTrue} onClose={handleDrawerClose}>
        <List>
          <Avatar />
          <Divider />
          <ListItemButton component={Link} to='/' onClick={handleDrawerClose}>
            Home
          </ListItemButton>
          <Divider />
          <ListItemButton component={Link} to='/about' onClick={handleDrawerClose}>
            About
          </ListItemButton>
          <Divider />
          <ListItemButton component={Link} to='/contact' onClick={handleDrawerClose}>
            Contact
          </ListItemButton>
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
