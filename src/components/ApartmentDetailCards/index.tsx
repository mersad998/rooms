import { type FC } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { deleteRoomAction } from '@/lib/features/apartments/apartmentsSlice';
import ApartmentInfoCard from './apartmentInfoCard';
import RoomInfoCard from './roomInfoCard';

import type { ApartmentDetailCardsProps } from './types';

const ApartmentDetailCards: FC<ApartmentDetailCardsProps> = (props) => {
  const { apartment, allowEdit, allowDelete } = props;

  const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();

  const onEditClick = (apartmentId?: string): void => {
    console.log('apartmentId: ', apartmentId);
  };
  const onDeleteClick = (apartmentId?: string): void => {
    if (!apartmentId) return;

    // call the deleteRoomAction
    dispatch(deleteRoomAction(apartmentId));
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
