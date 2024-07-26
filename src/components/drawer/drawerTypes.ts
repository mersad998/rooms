import type { ReactNode } from 'react';

export interface ResponsiveDrawerProps {
  children: React.ReactNode;
}

export interface DrawerViewProps {
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
  handleDrawerTransitionEnd: () => void;
  handleDrawerClose: () => void;
  onRoutClick: (newRoute: string) => () => void;
  onSignInClick: () => void;
  children: ReactNode;
  colorMode?: { toggleColorMode: () => void };
  userName: string | null;
}

export interface DrawerItem {
  title: string;
  icon: React.ReactNode;
  link: string;
}

export interface DrawerItemsContainerProps {
  onRoutClick: (link: string) => () => void;
  onSignInClick: () => void;
  userName: string | null;
}
