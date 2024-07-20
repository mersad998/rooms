'use client';

import ApartmentCard from '@/components/apartmentCard';
import ResponsiveGrid from '@/components/ResponsiveGrid';

import { FC } from 'react';
import { mockApartments } from './mockData';
import { useRouter } from 'next/navigation';

const HomePage: FC = () => {
  const router = useRouter();

  const onCardClick = (apartmentId: number): void => {
    router.push(`apartmentDetails/${apartmentId}`);
  };

  return (
    <div>
      <ResponsiveGrid list={mockApartments} component={<ApartmentCard onCardClick={onCardClick} />} />
    </div>
  );
};

export default HomePage;
