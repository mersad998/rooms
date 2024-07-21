import { createAppSlice } from '@/lib/createAppSlice';
import { getApartments } from './apartmentsApi';
import { ApartmentsSliceState } from './apartmentsTypes';

const initialState: ApartmentsSliceState = {
  value: null,
  status: 'idle',
  params: {
    limit: 10,
    offset: 0,
  },
};

export const apartmentsSlice = createAppSlice({
  name: 'apartments',
  initialState,
  reducers: (create: any) => ({
    // async thunk
    fetchApartments: create.asyncThunk(
      async (params: any, options: any) => {
        const state = options.getState();
        const requestParams = (state as { apartments: ApartmentsSliceState }).apartments.params;
        const response = await getApartments(requestParams);

        return response;
      },
      {
        pending: (state: any) => {
          state.status = 'loading';
        },
        fulfilled: (state: any, action: any) => {
          state.status = 'idle';
          state.value = action.payload;
        },
        rejected: (state: any) => {
          state.status = 'failed';
        },
      },
    ),

    // non async thunk
    setParameters: create.asyncThunk(
      (params: any) => {
        return params;
      },
      {
        fulfilled: (state: any, action: any) => {
          state.params = action.payload;
        },
      },
    ),
  }),
  selectors: {
    selectApartments: (apartments: any) => apartments.value,
    getParameters: (apartments: any) => apartments.params,
    isLoadingApartments: (apartments: any) => apartments.status === 'loading',
  },
});

// export actions
export const { fetchApartments, setParameters } = apartmentsSlice.actions;

// export selectors
export const { selectApartments, getParameters, isLoadingApartments } = apartmentsSlice.selectors;
