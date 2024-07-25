import type { RoomImages } from './types';
import type { ApartmentInformation } from '@/app/myApartments/myApartmentTypes';

export const getApartmentImages = (rooms: ApartmentInformation['rooms'], mainImage?: string): RoomImages => {
  const images: RoomImages = {};

  if (mainImage) {
    images.apartment = [{ title: 'main view', img: mainImage }];
  }

  rooms?.forEach((room) => {
    images[room.name] = [
      { title: 'interior view', img: room.interiorImageUrl },
      { title: 'exterior view', img: room.exteriorImageUrl },
    ];
  });

  return images;
};
