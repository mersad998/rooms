'use client';

import ApartmentCard from '@/components/apartmentCard';
import ResponsiveGrid from '@/components/ResponsiveGrid';

import { FC } from 'react';
import { mockApartments } from './mockData';

const HomePage: FC = () => {
  return (
    <div>
      <ResponsiveGrid list={mockApartments} component={<ApartmentCard />} />
    </div>
  );
};

export default HomePage;
