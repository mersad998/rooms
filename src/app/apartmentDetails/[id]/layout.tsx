'use client';

import React, { type ReactNode } from 'react';
import { ThemeProvider } from '@mui/system';
import SettingsContext from '@/app/core/contexts/settingsContext';
import { Drawer } from '@/components/drawer';
import useSettings from '@/app/core/hooks/useSettings';

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  const { colorMode, theme } = useSettings();

  return (
    <SettingsContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        <Drawer>{children}</Drawer>
      </ThemeProvider>
    </SettingsContext.Provider>
  );
};
export default Layout;
