'use client';

import { useEffect, useState } from 'react';
import { getApartmentRooms } from '@/lib/features/apartments/apartmentsApi';
import { BASE_URL } from '@/app/constants';
import { mockApartments } from '@/app/mockData';
import { ApartmentInformation } from '@/app/apartments/apartmentTypes';

// you can pass any number to this function to show loading
const fakeDelay = (delay: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const useApartmentDetails = (apartmentId: string): [boolean, ApartmentInformation | undefined] => {
  const [apartmentDetails, setApartmentDetails] = useState<ApartmentInformation>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    prepareData();
  }, [apartmentId]);

  const prepareData = async (): Promise<void> => {
    try {
      await fakeDelay(1000);
      const apartmentData = mockApartments[0]; // todo: get from Redux or fetch from api

      const rooms = await getApartmentRooms(`${BASE_URL}/apartment/${apartmentId}`);

      setIsLoading(false);
      setApartmentDetails({ ...apartmentData, rooms: rooms ?? [] });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return [isLoading, apartmentDetails];
};

export default useApartmentDetails;
