'use client';

import ApartmentCard from '@/components/apartmentCard';
import ResponsiveGrid from '@/components/ResponsiveGrid';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import useApartments from './hooks/useApartments';
import { Typography } from '@mui/material';

const HomePage: FC = () => {
  const router = useRouter();

  const [isLoading, apartments] = useApartments();

  const onCardClick = (apartmentId: number): void => {
    router.push(`apartmentDetails/${apartmentId}`);
  };

  if (isLoading) {
    return <Typography>Loading ...</Typography>;
  }

  if (!Array.isArray(apartments)) {
    return <Typography>Error in fetch apartments ...</Typography>;
  }

  if (!apartments.length) {
    return <Typography>No apartments found</Typography>;
  }

  return (
    <div>
      <ResponsiveGrid
        list={(apartments as unknown as Record<string, unknown>[]) ?? []}
        component={<ApartmentCard onCardClick={onCardClick} />}
      />
    </div>
  );
};

export default HomePage;
