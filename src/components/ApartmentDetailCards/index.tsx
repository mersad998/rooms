import { type FC } from 'react';

import ApartmentInfoCard from './apartmentInfoCard';
import RoomInfoCard from './roomInfoCard';

import type { ApartmentDetailCardsProps } from './types';

const ApartmentDetailCards: FC<ApartmentDetailCardsProps> = (props) => {
  const { apartment } = props;

  return (
    <div>
      <ApartmentInfoCard key={apartment.id} details={apartment} />
      {apartment.rooms?.map((room) => {
        return <RoomInfoCard key={room.id} details={room} />;
      })}
    </div>
  );
};

export default ApartmentDetailCards;
