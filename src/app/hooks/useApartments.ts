'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApartmentsAction, isLoadingApartments, selectApartments } from '@/lib/features/apartments/apartmentsSlice';
import { ApartmentInformation } from '@/app/apartments/apartmentTypes';

const useApartments = (): [boolean, ApartmentInformation[] | undefined] => {
  const dispatch = useDispatch();
  const apartments = useSelector(selectApartments);
  const isLoading = useSelector(isLoadingApartments);

  useEffect(() => {
    dispatch((fetchApartmentsAction as any)());
  }, [dispatch]);

  return [isLoading, apartments as ApartmentInformation[] | undefined];
};

export default useApartments;
