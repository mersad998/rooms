'use client';

import { useEffect, useState, type FC } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useRouter } from 'next/navigation';
import { ThemeProvider } from '@mui/system';
import { supabase } from '@/lib/supabase';
import { useDispatch, useSelector } from 'react-redux';

import SettingsContext from '@/app/core/contexts/settingsContext';
import { selectUserName, setUser, removeUser } from '@/lib/features/profile/profileSlice';
import useSettings from '@/app/core/hooks/useSettings';
import DrawerView from './drawerView';
import UserDialog from './userDialog';

import type { ResponsiveDrawerProps } from './drawerTypes';
import type { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { supabaseSignOut } from '@/lib/features/profile/authHelper';

const ResponsiveDrawer: FC<ResponsiveDrawerProps> = (props: ResponsiveDrawerProps) => {
  const { children } = props;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);

  const userName = useSelector(selectUserName);

  const { colorMode, theme } = useSettings();
  const dispatch: ThunkDispatch<void, void, AnyAction> = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Handle auth state change (sign in, sign out)
    const { data: authListener } = supabase.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null): void => {
      switch (event) {
        case 'SIGNED_IN':
        case 'INITIAL_SESSION':
          if (session && session.user.email) {
            dispatch(setUser(session)); // set user into redux
            setIsUserDialogOpen(false); // close dialog
          }
          break;

        case 'SIGNED_OUT':
          dispatch(removeUser()); // remove user from redux
          break;
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

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
    if (newRoute === '/signOut') {
      supabaseSignOut();
    } else {
      router.push(newRoute);
    }
  };

  const onSignInClick = (): void => {
    setIsUserDialogOpen(true);
  };

  return (
    <SettingsContext.Provider value={{ colorMode }}>
      <ThemeProvider theme={theme}>
        {isUserDialogOpen && (
          <UserDialog
            onClose={() => {
              setIsUserDialogOpen(false);
            }}
          />
        )}

        <DrawerView
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
          handleDrawerClose={handleDrawerClose}
          onRoutClick={onRoutClick}
          colorMode={colorMode}
          userName={userName}
          onSignInClick={onSignInClick}
        >
          {children}
        </DrawerView>
      </ThemeProvider>
    </SettingsContext.Provider>
  );
};

export default ResponsiveDrawer;
