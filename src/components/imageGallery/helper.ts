import type { RoomImages } from './types';
import { ApartmentInformation } from '@/app/apartments/apartmentTypes';

export const getApartmentImages = (rooms: ApartmentInformation['rooms']): RoomImages => {
  const images: RoomImages = {};

  rooms?.forEach((room) => {
    images[room.name] = [
      { title: 'interior view', img: room.interiorImageUrl },
      { title: 'exterior view', img: room.exteriorImageUrl },
    ];
  });

  return images;
};
