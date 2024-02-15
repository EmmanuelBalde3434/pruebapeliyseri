import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import './sidebar.css'; 

function Sidebar({ isOpen, onClose }) {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose} className="drawer">
      <div className="menu-title">Menú</div>
      <List>
        <ListItem button component="a" href="/" className="menu-item">
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component="a" href="/peliculas" className="menu-item">
          <ListItemText primary="Peliculas" />
        </ListItem>
        <ListItem button component="a" href="/series" className="menu-item">
          <ListItemText primary="Series" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar;
