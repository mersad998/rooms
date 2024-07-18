import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import MapIcon from '@mui/icons-material/Map';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import AddHomeIcon from '@mui/icons-material/AddHome';

import type { DrawerItem } from './drawerTypes';

export const DRAWER_WIDTH = 240;

export const primaryItems: DrawerItem[] = [
  {
    title: 'Flat list',
    icon: <HolidayVillageIcon />,
    link: '/',
  },
  {
    title: 'Add your flat',
    icon: <AddHomeIcon />,
    link: '/add',
  },
  {
    title: 'Show on map',
    icon: <MapIcon />,
    link: '/',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/',
  },
];

export const secondaryItems: DrawerItem[] = [
  {
    title: 'Support',
    icon: <SupportIcon />,
    link: '/',
  },
  {
    title: 'SignOut',
    icon: <LogoutIcon style={{ color: '#D10A65' }} />,
    link: '/',
  },
];
