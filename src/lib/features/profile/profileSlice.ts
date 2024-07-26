import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session } from '@supabase/supabase-js';

const initialState: { data: Session | null } = {
  data: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // define action

    setUser: (_state, action: PayloadAction<Session | null>) => {
      return { data: action.payload };
    },
    removeUser: () => {
      return { data: null };
    },
  },
  selectors: {
    selectUserName: (user) => (user.data ? (user.data?.user.email?.split('@')[0] ?? '... !') : null),
  },
});

// export actions
export const { setUser, removeUser } = profileSlice.actions;
export const { selectUserName } = profileSlice.selectors;

// export reducer
export default profileSlice.reducer;
