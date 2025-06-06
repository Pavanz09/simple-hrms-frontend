import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      <ListItem button>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><PeopleIcon /></ListItemIcon>
        <ListItemText primary="Employees" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><EventIcon /></ListItemIcon>
        <ListItemText primary="Leave Management" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
