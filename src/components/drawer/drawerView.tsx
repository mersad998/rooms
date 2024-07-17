import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import { DRAWER_WIDTH } from './constants';

import type { DrawerViewProps } from './drawerTypes';
import { APP_NAME } from '@/app/constants';
import DrawerItemsContainer from './drawerItemsContainer';

const DrawerView: React.FC<DrawerViewProps> = (props) => {
  const { handleDrawerToggle, mobileOpen, handleDrawerTransitionEnd, handleDrawerClose, onRoutClick, children } = props;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
        }}
        style={{
          background:
            'linear-gradient(105deg, rgba(0,24,96,1) 0%, rgba(48,125,193,1) 15%, rgba(12,92,174,1) 29%, rgba(104,136,174,1) 41%, rgba(60,138,195,1) 49%, rgba(135,213,240,1) 69%, rgba(57,205,240,1) 82%, rgba(124,228,248,1) 100%)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" flex={1}>
            {APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          <DrawerItemsContainer onRoutClick={onRoutClick} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
          open
        >
          <DrawerItemsContainer onRoutClick={onRoutClick} />
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        }}
      >
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

export default DrawerView;
