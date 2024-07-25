import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import './tailwind.css';
import type { Metadata } from 'next';

import { APP_NAME } from './constants';
import FullLayoutSkeleton from './ui/skeletons/fullLayoutSkeleton';
import { Drawer } from '@/components/drawer';

import type { RootLayoutProps } from './globalTypes';
import { StoreProvider } from './StoreProvider';

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
          {/* wrap drawer on all pages */}
          <Drawer>
            <Suspense fallback={<FullLayoutSkeleton />}>{props.children}</Suspense>
          </Drawer>
        </body>
      </html>
    </StoreProvider>
  );
};

export default RootLayout;
