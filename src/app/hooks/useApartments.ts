'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchApartmentsAction, isLoadingApartments, selectApartments } from '@/lib/features/apartments/apartmentsSlice';

import type { ApartmentInformation } from '../myApartments/myApartmentTypes';
import { selectIsLogin } from '@/lib/features/profile/profileSlice';

const useApartments = ({ forUser }: { forUser?: boolean }): [boolean, ApartmentInformation[] | undefined] => {
  const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();
  const isLogin = useSelector(selectIsLogin);

  const apartments = useSelector(selectApartments) ?? [];
  const isLoading = useSelector(isLoadingApartments);

  useEffect(() => {
    // Fetch the apartments in the first render
    if (!forUser || (forUser && isLogin)) {
      dispatch(fetchApartmentsAction());
    }
  }, [dispatch, isLogin, forUser]);

  return [isLoading, apartments as ApartmentInformation[] | undefined];
};

export default useApartments;
