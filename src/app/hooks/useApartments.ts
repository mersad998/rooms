'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApartmentsAction, isLoadingApartments, selectApartments } from '@/lib/features/apartments/apartmentsSlice';
import { ApartmentInformation } from '@/app/apartments/apartmentTypes';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

const useApartments = (): [boolean, ApartmentInformation[] | undefined] => {
  const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();
  const apartments = useSelector(selectApartments) ?? [];
  const isLoading = useSelector(isLoadingApartments);

  useEffect(() => {
    dispatch(fetchApartmentsAction());
  }, [dispatch]);

  return [isLoading, apartments as ApartmentInformation[] | undefined];
};

export default useApartments;
