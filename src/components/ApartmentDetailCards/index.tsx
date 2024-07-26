import { type FC } from 'react';

import ApartmentInfoCard from './apartmentInfoCard';
import RoomInfoCard from './roomInfoCard';

import type { ApartmentDetailCardsProps } from './types';

const ApartmentDetailCards: FC<ApartmentDetailCardsProps> = (props) => {
  const { apartment, allowEdit, allowDelete } = props;

  const onEditClick = (apartmentId?: string): void => {
    console.log('apartmentId: ', apartmentId);
  };
  const onDeleteClick = (apartmentId?: string): void => {
    console.log('apartmentId: ', apartmentId);
  };

  return (
    <div>
      <ApartmentInfoCard key={apartment.id} details={apartment} />
      {apartment.rooms?.map((room, idx) => {
        return (
          <RoomInfoCard
            key={room.id}
            roomNumber={idx + 1}
            details={room}
            {...(allowEdit ? { onEditClick: onEditClick } : {})}
            {...(allowDelete ? { onDeleteClick: onDeleteClick } : {})}
          />
        );
      })}
    </div>
  );
};

export default ApartmentDetailCards;
