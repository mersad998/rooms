import { ApartmentInformation } from '@/app/apartments/apartmentTypes';
import { BASE_URL } from '@/app/constants';
import { mockApartments } from '@/app/mockData';
import { ApartmentsSliceState } from './apartmentsTypes';

export const getApartments = async (params: ApartmentsSliceState['params']): Promise<ApartmentInformation[]> => {
  return mockApartments;
};

export const getApartmentRooms = async (apartmentId: string): Promise<ApartmentInformation['rooms']> => {
  const url = `${BASE_URL}/apartment/${apartmentId}`;
  // fetch data
  return mockApartments[0].rooms;
};
