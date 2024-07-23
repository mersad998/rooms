'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchApartmentDetailsAction,
  isLoadingApartments,
  selectApartmentDetails,
} from '@/lib/features/apartments/apartmentsSlice';
import { ApartmentInformation } from '@/app/apartments/apartmentTypes';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const useApartmentDetails = (apartmentId: string): [boolean, ApartmentInformation | undefined] => {
  const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();
  const apartmentDetails = useSelector(selectApartmentDetails);
  const isLoading = useSelector(isLoadingApartments);

  useEffect(() => {
    if (apartmentId) {
      dispatch(fetchApartmentDetailsAction(apartmentId));
    }
  }, [apartmentId, dispatch]);

  return [isLoading, apartmentDetails as ApartmentInformation | undefined];
};

export default useApartmentDetails;
