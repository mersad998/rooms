'use client';

import ApartmentCard from '@/components/apartmentCard';
import ResponsiveGrid from '@/components/ResponsiveGrid';

import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div>
      <ResponsiveGrid list={[1, 2, 3, 4, 5, 6, 7]} component={<ApartmentCard />} />
    </div>
  );
};

export default HomePage;
