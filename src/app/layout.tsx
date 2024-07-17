import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import { APP_NAME } from './constants';
import FullLayoutSkeleton from './ui/skeletons/fullLayoutSkeleton';
import { Drawer } from '@/components/drawer';

import type { RootLayoutProps } from './globalTypes';

// handle fonts
const inter = Inter({ subsets: ['latin'] });

// app name in browser tab
export const metadata: Metadata = {
  title: APP_NAME,
};

const RootLayout = (props: Readonly<RootLayoutProps>): React.ReactNode => {
  return (
    <html lang="en">
      <body className={`${inter.className}`} style={{ background: '#f5f5f5' }}>
        {/* wrap drawer on all pages */}
        <Drawer>
          <Suspense fallback={<FullLayoutSkeleton />}>{props.children}</Suspense>
        </Drawer>
      </body>
    </html>
  );
};

export default RootLayout;
