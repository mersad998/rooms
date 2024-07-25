'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import {
  fetchApartmentDetailsAction,
  isLoadingApartments,
  selectApartmentDetails,
} from '@/lib/features/apartments/apartmentsSlice';

import type { ApartmentInformation } from '@/app/myApartments/myApartmentTypes';

const useApartmentDetails = (apartmentId: string): [boolean, ApartmentInformation | undefined] => {
  const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();

  const apartmentDetails = useSelector(selectApartmentDetails);
  const isLoading = useSelector(isLoadingApartments);

  useEffect(() => {
    if (apartmentId) {
      // Fetch the apartment details in the first render
      dispatch(fetchApartmentDetailsAction(apartmentId));
    }
  }, [apartmentId, dispatch]);

  return [isLoading, apartmentDetails as ApartmentInformation | undefined];
};

export default useApartmentDetails;
