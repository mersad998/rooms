import * as React from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Typography, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { primaryItems, secondaryItems } from './constants';

import type { DrawerItemsContainerProps } from './drawerTypes';

const DrawerItemsContainer: React.FC<DrawerItemsContainerProps> = (props) => {
  const { onRoutClick } = props;

  const theme = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <div>
        <Toolbar>
          <AccountCircleIcon style={{ color: '#042f83', marginRight: 2 }} />
          <Typography>Welcome Rooms User</Typography>
        </Toolbar>
        <Divider />

        <List>
          {primaryItems.map((item) => (
            <ListItem key={item.link} disablePadding>
              <ListItemButton onClick={onRoutClick(item.link)} data-test-nav-button={item.title}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {secondaryItems.map((item) => (
            <ListItem key={item.link} disablePadding>
              <ListItemButton onClick={onRoutClick(item.link)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <div
        style={{
          height: 110,
          width: '100%',
          backgroundImage: `${
            theme.palette.mode === 'dark'
              ? 'linear-gradient(105deg, rgba(0,24,96,1) 0%, rgba(36,36,36,1) 100%)'
              : 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'
          }
            ,url("https://www.friends-in-flats.com/assets/img/bg-building-1.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography style={{ textAlign: 'center' }}>Designed with 💙 for</Typography>
        <Typography style={{ textAlign: 'center' }}>Friends in Flats</Typography>
      </div>
    </div>
  );
};

export default DrawerItemsContainer;
