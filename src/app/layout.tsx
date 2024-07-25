import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import { Drawer } from '@/components/drawer';
import { APP_NAME } from './(helpers)/constants';
import FullLayoutSkeleton from './ui/skeletons/fullLayoutSkeleton';
import { StoreProvider } from './(helpers)/StoreProvider';
import './tailwind.css';

import type { Metadata } from 'next';
import type { RootLayoutProps } from './(helpers)/globalTypes';

// handle fonts
const inter = Inter({ subsets: ['latin'] });

// app name in browser tab
export const metadata: Metadata = {
  title: APP_NAME,
};

const RootLayout = (props: Readonly<RootLayoutProps>): React.ReactNode => {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <Drawer>
            <Suspense fallback={<FullLayoutSkeleton />}>{props.children}</Suspense>
          </Drawer>
        </body>
      </html>
    </StoreProvider>
  );
};

export default RootLayout;
