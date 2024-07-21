import { EnhancedStore, combineSlices, configureStore } from '@reduxjs/toolkit';

import profileSlice from './features/profile/profileSlice';
import { apartmentsSlice } from './features/apartments/apartmentsSlice';

const rootReducer = combineSlices({
  // here reducer exported by default
  profile: profileSlice,

  // here whole of slice exported
  apartments: apartmentsSlice.reducer,
});

export const makeStore = (): EnhancedStore => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
