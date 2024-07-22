'use client';

import ApartmentCard from '@/components/apartmentCard';
import ResponsiveGrid from '@/components/ResponsiveGrid';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import useApartments from './hooks/useApartments';

const HomePage: FC = () => {
  const router = useRouter();

  const [isLoading, apartments] = useApartments();

  const onCardClick = (apartmentId: number): void => {
    router.push(`apartmentDetails/${apartmentId}`);
  };

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
