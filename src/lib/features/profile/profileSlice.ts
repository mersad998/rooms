import { readFromLocalStorage, writeToLocalStorage } from '@/app/globalHelpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  data: readFromLocalStorage('profile'),
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // define actions
    setData: (_state, action: PayloadAction<{ name: string }>): { data: { name: string } } => {
      writeToLocalStorage('profile', action.payload);
      return { data: action.payload };
    },

    // logout can be implement here, it should clean the local storage too
  },
  selectors: {
    selectUserName: (user) => (user.data as { name?: string })?.name ?? '',
  },
});

// export actions
export const { setData } = profileSlice.actions;
export const { selectUserName } = profileSlice.selectors;

// export reducer
export default profileSlice.reducer;
