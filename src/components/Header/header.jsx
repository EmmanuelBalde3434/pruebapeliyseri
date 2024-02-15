import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';

function Header({ onMenuClick }) {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="typography">
         Peliculas y Series
        </Typography>
        <Button color="inherit">Log in</Button>
        <Button color="inherit">Start your free trial</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

