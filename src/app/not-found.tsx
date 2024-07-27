'use client';

import React, { FC } from 'react';
import { Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Drawer } from '@/components/drawer';

const NotFound: FC = () => {
  const router = useRouter();

  const goToHome = (): void => {
    router.push('/');
  };

  return (
    <div>
      <Drawer>
        <div>
          <Typography className="text-4xl text-red-500 mt-8">404 - Not Found</Typography>
          <Typography className="text-lg mt-4 text-blue-900">Oops! The page you are looking for does not exist.</Typography>
          <Button variant="outlined" className={'mt-4'} onClick={goToHome}>
            Go to Home
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default NotFound;
