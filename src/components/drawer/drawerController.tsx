'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from '@mui/system';

import SettingsContext from '@/app/core/contexts/settingsContext';
import useSettings from '@/app/core/hooks/useSettings';
import DrawerView from './drawerView';

import type { ResponsiveDrawerProps } from './drawerTypes';

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = (props: ResponsiveDrawerProps) => {
  const { children } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const { colorMode, theme } = useSettings();
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
    <SettingsContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <DrawerView
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          handleDrawerClose={handleDrawerClose}
          onRoutClick={onRoutClick}
          colorMode={colorMode}
        >
          {children}
        </DrawerView>
      </ThemeProvider>
    </SettingsContext.Provider>
  );
};

export default ResponsiveDrawer;
