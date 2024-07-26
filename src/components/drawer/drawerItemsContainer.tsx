import * as React from 'react';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Button, Typography, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { primaryItems, secondaryItems } from './constants';

import type { DrawerItemsContainerProps } from './drawerTypes';

const DrawerItemsContainer: React.FC<DrawerItemsContainerProps> = (props) => {
  const { onRoutClick, onSignInClick, userName } = props;

  const theme = useTheme();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Toolbar>
          {userName ? (
            <>
              <AccountCircleIcon className="text-[#042f83] mr-0.5" />
              <Typography>Welcome {userName}</Typography>
            </>
          ) : (
            <Button variant="outlined" className="w-full ml-4 mr-4 flex justify-around" onClick={onSignInClick}>
              <AccountCircleIcon className="text-[#042f83] mr-0.5" />
              <Typography fontSize={16} fontFamily={'sans-serif'}>
                sign In
              </Typography>
            </Button>
          )}
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
        className="h-[110px] w-full bg-no-repeat bg-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage: `${
            theme.palette.mode === 'dark'
              ? 'linear-gradient(105deg, rgba(0,24,96,1) 0%, rgba(36,36,36,1) 100%)'
              : 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))'
          }
            ,url("https://www.friends-in-flats.com/assets/img/bg-building-1.jpg")`,
        }}
      >
        <Typography className="text-center">Designed with 💙 for</Typography>
        <Typography className="text-center">Friends in Flats</Typography>
      </div>
    </div>
  );
};

export default DrawerItemsContainer;
