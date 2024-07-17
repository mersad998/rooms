'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import type { ResponsiveDrawerProps } from './drawerTypes';

import DrawerView from './drawerView';

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = (props: ResponsiveDrawerProps) => {
  const { children } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const router = useRouter();

  // close drawer in both mobile and desktop
  const handleDrawerClose = (): void => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  // set is drawer toggling
  const handleDrawerTransitionEnd = (): void => {
    setIsClosing(false);
  };

  // toggle drawer
  const handleDrawerToggle = (): void => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // navigate to selected route
  const onRoutClick = (newRoute: string) => (): void => {
    router.push(newRoute);
  };

  return (
    <DrawerView
      handleDrawerToggle={handleDrawerToggle}
      mobileOpen={mobileOpen}
      handleDrawerTransitionEnd={handleDrawerTransitionEnd}
      handleDrawerClose={handleDrawerClose}
      onRoutClick={onRoutClick}
    >
      {children}
    </DrawerView>
  );
};

export default ResponsiveDrawer;
