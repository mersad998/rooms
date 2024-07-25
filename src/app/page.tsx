'use client';

import { FC } from 'react';
import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import ApartmentCard from '@/components/apartmentCard';
import ResponsiveGrid from '@/components/ResponsiveGrid';
import useApartments from './hooks/useApartments';
import FullLayoutSkeleton from './ui/skeletons/fullLayoutSkeleton';

const HomePage: FC = () => {
  const router = useRouter();

  const [isLoading, apartments] = useApartments();

  // Navigate to the apartment details page
  const onCardClick = (apartmentId: number): void => {
    router.push(`apartmentDetails/${apartmentId}`);
  };

  if (isLoading) {
    return <FullLayoutSkeleton />;
  }

  if (!Array.isArray(apartments)) {
    // we can design a better error handling here
    return <Typography>Error in fetch apartments ...</Typography>;
  }

  if (!apartments.length) {
    // we can design a better error handling here
    return <Typography>No apartments found!</Typography>;
  }

  return (
    <ResponsiveGrid
      list={(apartments as unknown as Record<string, unknown>[]) ?? []}
      component={<ApartmentCard onCardClick={onCardClick} />}
    />
  );
};

export default HomePage;
