import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import KeyIcon from '@mui/icons-material/Key';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import LogoutIcon from '@mui/icons-material/Logout';

import type { DrawerItem } from './drawerTypes';

export const DRAWER_WIDTH = 240;

export const primaryItems: DrawerItem[] = [
  {
    title: 'flats',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'users',
    icon: <PeopleIcon />,
    link: '/users',
  },
  {
    title: 'permissions',
    icon: <KeyIcon />,
    link: '/permissions',
  },
];

export const secondaryItems: DrawerItem[] = [
  {
    title: 'deleted servers',
    icon: <AutoDeleteIcon />,
    link: '/trash',
  },
  {
    title: 'signOut',
    icon: <LogoutIcon style={{ color: '#D10A65' }} />,
    link: '/',
  },
];
