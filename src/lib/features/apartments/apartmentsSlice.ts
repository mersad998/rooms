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

import type { ApartmentsSliceState } from './apartmentsTypes';
import type { ApartmentInformation } from '@/app/myApartments/myApartmentTypes';
import type { RoomInformation } from '@/app/apartmentDetails/[id]/apartmentDetailsTypes';

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
  reducers: (create) => ({
    // Async thunk to fetch apartments list
    fetchApartmentsAction: create.asyncThunk(
      async (conditions: { forUserId?: string }) => {
        const response = await getApartments(conditions);
        return response;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          state.value = action.payload as ApartmentInformation[];
        },
        rejected: (state) => {
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
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          state.apartmentDetails = action.payload as ApartmentInformation;
        },
        rejected: (state) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to create a new apartment
    createApartmentAction: create.asyncThunk(
      async (apartment: Omit<ApartmentInformation, 'id'>) => {
        const newApartment = await createApartment(apartment);
        return newApartment;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          state.value = state.value
            ? [...state.value, action.payload as ApartmentInformation]
            : [action.payload as ApartmentInformation];
        },
        rejected: (state) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to update an existing apartment
    updateApartmentAction: create.asyncThunk(
      async ({ id, updates }: { id: string; updates: Partial<ApartmentInformation> }) => {
        const updatedApartment = await updateApartment(id, updates);
        return updatedApartment;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          state.value = state.value
            ? state.value.map((apt: ApartmentInformation) =>
                apt.id === (action.payload as ApartmentInformation).id ? (action.payload as ApartmentInformation) : apt,
              )
            : [action.payload as ApartmentInformation];
        },
        rejected: (state) => {
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
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          state.status = 'idle';
          state.value = state.value ? state.value.filter((apt: ApartmentInformation) => apt.id !== action.payload) : [];
        },
        rejected: (state) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to create a new room
    createRoomAction: create.asyncThunk(
      async (room: Omit<RoomInformation, 'id'>) => {
        const newRoom = await createRoom(room);
        return newRoom;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          if (state.apartmentDetails && state.apartmentDetails.rooms) {
            state.apartmentDetails.rooms = [...state.apartmentDetails.rooms, action.payload as RoomInformation];
          }
          state.status = 'idle';
        },
        rejected: (state) => {
          state.status = 'failed';
        },
      },
    ),

    // Async thunk to update an existing room
    updateRoomAction: create.asyncThunk(
      async ({ id, updates }: { id: string; updates: Partial<RoomInformation> }) => {
        const updatedRoom = await updateRoom(id, updates);
        return updatedRoom;
      },
      {
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          if (state.apartmentDetails && state.apartmentDetails.rooms) {
            state.apartmentDetails.rooms = state.apartmentDetails.rooms.map((room) =>
              room.id === (action.payload as RoomInformation).id ? (action.payload as RoomInformation) : room,
            );
          }
          state.status = 'idle';
        },
        rejected: (state) => {
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
        pending: (state) => {
          state.status = 'loading';
        },
        fulfilled: (state, action) => {
          if (state.apartmentDetails && state.apartmentDetails.rooms) {
            state.apartmentDetails.rooms = state.apartmentDetails.rooms.filter(
              (room) => room.id !== (action.payload as RoomInformation['id']),
            );
          }
          state.status = 'idle';
        },
        rejected: (state) => {
          state.status = 'failed';
        },
      },
    ),
  }),
  selectors: {
    selectApartments: (apartments) => apartments.value,
    selectApartmentDetails: (apartments) => apartments.apartmentDetails,
    getParameters: (apartments) => apartments.params,
    isLoadingApartments: (apartments) => apartments.status === 'loading',
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
} = apartmentsSlice.actions;

// Export selectors
export const { selectApartments, selectApartmentDetails, getParameters, isLoadingApartments } = apartmentsSlice.selectors;
