'use client';
import { useEffect, useMemo, useState } from 'react';
import { Theme, createTheme } from '@mui/material';
import { readFromLocalStorage, writeToLocalStorage } from '@/app/globalHelpers';

const App_Settings = 'App_Settings';

interface UseSettings {
  colorMode: {
    toggleColorMode: () => void;
  };
  theme: Theme;
}

type ThemeMode = 'light' | 'dark';

// this hook will provide the accessability to setting context where ever needed
const useSettings = (): UseSettings => {
  const defaultSettings = readFromLocalStorage<{
    mode: ThemeMode;
  }>(App_Settings);

  const [mode, setMode] = useState<ThemeMode>(defaultSettings?.mode || 'light');

  useEffect(() => {
    // you can add any other settings here
    writeToLocalStorage(App_Settings, { mode });
  }, [mode]);

  // this function will toggle the color mode
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void => {
        console.log('called');
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // this function will create a theme based on the selected mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === 'dark' ? '#242424' : '#f5f5f5',
            paper: mode === 'dark' ? '#242424' : '#ffffff',
          },
        },
      }),
    [mode],
  );

  return { colorMode, theme };
};

export default useSettings;
