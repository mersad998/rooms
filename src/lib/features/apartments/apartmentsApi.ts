import { ApartmentInformation } from '@/app/apartments/apartmentTypes';
import { mockApartments } from '@/app/mockData';

export const getApartmentRooms = async (url: string): Promise<ApartmentInformation['rooms']> => {
  console.log('here should fetch this URL: ', url); // todo make request
  return mockApartments[0].rooms;
};
