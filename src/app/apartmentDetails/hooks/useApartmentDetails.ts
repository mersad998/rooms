'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApartmentDetails, isLoadingApartments, selectApartmentDetails } from '@/lib/features/apartments/apartmentsSlice';
import { ApartmentInformation } from '@/app/apartments/apartmentTypes';

const useApartmentDetails = (apartmentId: string): [boolean, ApartmentInformation | undefined] => {
  const dispatch = useDispatch();
  const apartmentDetails = useSelector(selectApartmentDetails);
  const isLoading = useSelector(isLoadingApartments);

  useEffect(() => {
    if (apartmentId) {
      dispatch((fetchApartmentDetails as any)(apartmentId));
    }
  }, [apartmentId, dispatch]);

  return [isLoading, apartmentDetails as ApartmentInformation | undefined];
};

export default useApartmentDetails;
