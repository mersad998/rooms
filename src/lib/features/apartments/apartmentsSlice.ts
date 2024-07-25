import { createAppSlice } from '@/lib/createAppSlice';
import {
  getApartments,
  getApartmentById,
  getRoomsByApartmentId,
  createApartment,
  updateApartment,
  deleteApartment,
  createRoom,
  updateRoom,
  deleteRoom,
} from './apartmentsApi';
import { ApartmentsSliceState } from './apartmentsTypes';
import { Apartment, Room } from '@/lib/supabaseTypes';

import type { ApartmentInformation } from '@/app/myApartments/myApartmentTypes';

const initialState: ApartmentsSliceState = {
  value: null,
  apartmentDetails: null,
  status: 'loading',
  params: {
    limit: 10,
    offset: 0,
  },
};

export const apartmentsSlice = createAppSlice({
  name: 'apartments',
  initialState,
  reducers: (create: any) => ({
    // Async thunk to fetch apartments list
    fetchApartmentsAction: create.asyncThunk(
      async () => {
        const response = await getApartments();
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

    // Async thunk to fetch a single apartment by ID
    fetchApartmentDetailsAction: create.asyncThunk(
      async (id: string) => {
        const apartment = await getApartmentById(id);
        const rooms = await getRoomsByApartmentId(id);
        return { ...apartment, rooms };
      },
      {
        pending: (state: any) => {
          state.status = 'loading';
        },
        fulfilled: (state: any, action: any) => {
          state.status = 'idle';
          state.apartmentDetails = action.payload;
        },
        rejected: (state: any) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to create a new apartment
    createApartmentAction: create.asyncThunk(
      async (apartment: Omit<Apartment, 'id'>) => {
        const newApartment = await createApartment(apartment);
        return newApartment;
      },
      {
        pending: (state: any) => {
          state.status = 'loading';
        },
        fulfilled: (state: any, action: any) => {
          state.status = 'idle';
          state.value = state.value ? [...state.value, action.payload] : [action.payload];
        },
        rejected: (state: any) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to update an existing apartment
    updateApartmentAction: create.asyncThunk(
      async ({ id, updates }: { id: string; updates: Partial<Apartment> }) => {
        const updatedApartment = await updateApartment(id, updates);
        return updatedApartment;
      },
      {
        pending: (state: any) => {
          state.status = 'loading';
        },
        fulfilled: (state: any, action: any) => {
          state.status = 'idle';
          state.value = state.value
            ? state.value.map((apt: ApartmentInformation) => (apt.id === action.payload.id ? action.payload : apt))
            : [action.payload];
        },
        rejected: (state: any) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to delete an apartment
    deleteApartmentAction: create.asyncThunk(
      async (id: string) => {
        await deleteApartment(id);
        return id;
      },
      {
        pending: (state: any) => {
          state.status = 'loading';
        },
        fulfilled: (state: any, action: any) => {
          state.status = 'idle';
          state.value = state.value ? state.value.filter((apt: ApartmentInformation) => apt.id !== action.payload) : [];
        },
        rejected: (state: any) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to create a new room
    createRoomAction: create.asyncThunk(
      async (room: Omit<Room, 'id'>) => {
        const newRoom = await createRoom(room);
        return newRoom;
      },
      {
        pending: (state: any) => {
          state.status = 'loading';
        },
        fulfilled: (state: any, action: any) => {
          if (state.apartmentDetails && state.apartmentDetails.rooms) {
            state.apartmentDetails.rooms = [...state.apartmentDetails.rooms, action.payload];
          }
          state.status = 'idle';
        },
        rejected: (state: any) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to update an existing room
    updateRoomAction: create.asyncThunk(
      async ({ id, updates }: { id: string; updates: Partial<Room> }) => {
        const updatedRoom = await updateRoom(id, updates);
        return updatedRoom;
      },
      {
        pending: (state: any) => {
          state.status = 'loading';
        },
        fulfilled: (state: any, action: any) => {
          if (state.apartmentDetails && state.apartmentDetails.rooms) {
            state.apartmentDetails.rooms = state.apartmentDetails.rooms.map((room: Room) =>
              room.id === action.payload.id ? action.payload : room,
            );
          }
          state.status = 'idle';
        },
        rejected: (state: any) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to delete a room
    deleteRoomAction: create.asyncThunk(
      async (id: string) => {
        await deleteRoom(id);
        return id;
      },
      {
        pending: (state: any) => {
          state.status = 'loading';
        },
        fulfilled: (state: any, action: any) => {
          if (state.apartmentDetails && state.apartmentDetails.rooms) {
            state.apartmentDetails.rooms = state.apartmentDetails.rooms.filter((room: Room) => room.id !== action.payload);
          }
          state.status = 'idle';
        },
        rejected: (state: any) => {
          state.status = 'failed';
        },
      },
    ),

    // Non-async thunk
    setParametersAction: create.asyncThunk(
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
    selectApartmentDetails: (apartments: any) => apartments.apartmentDetails,
    getParameters: (apartments: any) => apartments.params,
    isLoadingApartments: (apartments: any) => apartments.status === 'loading',
  },
});

// Export actions
export const {
  fetchApartmentsAction,
  fetchApartmentDetailsAction,
  createApartmentAction,
  updateApartmentAction,
  deleteApartmentAction,
  createRoomAction,
  updateRoomAction,
  deleteRoomAction,
  setParametersAction,
} = apartmentsSlice.actions as any;

// Export selectors
export const { selectApartments, selectApartmentDetails, getParameters, isLoadingApartments } = apartmentsSlice.selectors;
