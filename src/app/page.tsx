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

  const [isLoading, apartments] = useApartments({});

  // Navigate to the apartment details page
  const onCardClick = (apartmentId: string): void => {
    router.push(`apartmentDetails/${apartmentId}`);
  };

  if (isLoading) {
    return <FullLayoutSkeleton />;
  }

  if (!Array.isArray(apartments)) {
    return (
      <div className="h-[80vh] flex flex-col justify-center">
        <Typography variant="h6" color={'purple'} className="text-center">
          Error in fetch apartments ...
        </Typography>
      </div>
    );
  }

  if (!apartments.length) {
    return (
      <div className="h-[80vh] flex flex-col justify-center">
        <Typography variant="h6" color={'purple'} className="text-center">
          No apartments found!
        </Typography>
      </div>
    );
  }

  return (
    <ResponsiveGrid
      list={(apartments as unknown as Record<string, unknown>[]) ?? []}
      component={<ApartmentCard onCardClick={onCardClick} />}
    />
  );
};

export default HomePage;
