import { type FC } from 'react';

import ApartmentInfoCard from './apartmentInfoCard';
import RoomInfoCard from './roomInfoCard';

import type { ApartmentDetailCardsProps } from './types';

const ApartmentDetailCards: FC<ApartmentDetailCardsProps> = (props) => {
  const { apartment } = props;

  const onEditClick = (apartmentId?: number): void => {
    console.log('apartmentId: ', apartmentId);
  };

  return (
    <div>
      <ApartmentInfoCard key={apartment.id} details={apartment} />
      {apartment.rooms?.map((room, idx) => {
        return <RoomInfoCard key={room.id} roomNumber={idx + 1} details={room} onEditClick={onEditClick} />;
      })}
    </div>
  );
};

export default ApartmentDetailCards;
