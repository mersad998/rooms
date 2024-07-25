import { supabase } from '@/lib/supabase';
import { Apartment, Room } from '../../supabaseTypes';

// --------- CRUD actions for Apartments ---------

// Create an apartment
export const createApartment = async (apartment: Omit<Apartment, 'id'>): Promise<Apartment> => {
  const { data, error } = await supabase.from('apartments').insert([apartment]).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Get all apartments
export const getApartments = async (): Promise<Apartment[]> => {
  const { data, error } = await supabase.from('apartments').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Get a single apartment by ID
export const getApartmentById = async (id: string): Promise<Apartment> => {
  const { data, error } = await supabase.from('apartments').select('*').eq('id', id).single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Update an apartment
export const updateApartment = async (id: string, updates: Partial<Apartment>): Promise<Apartment> => {
  const { data, error } = await supabase.from('apartments').update(updates).eq('id', id).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Delete an apartment
export const deleteApartment = async (id: string): Promise<void> => {
  const { error } = await supabase.from('apartments').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};

// --------- CRUD actions for Rooms ---------

// Create a room
export const createRoom = async (room: Omit<Room, 'id'>): Promise<Room> => {
  const { data, error } = await supabase.from('rooms').insert([room]).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Get all rooms for an apartment
export const getRoomsByApartmentId = async (apartmentId: string): Promise<Room[]> => {
  const { data, error } = await supabase.from('rooms').select('*').eq('apartmentId', apartmentId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Update a room
export const updateRoom = async (id: string, updates: Partial<Room>): Promise<Room> => {
  const { data, error } = await supabase.from('rooms').update(updates).eq('id', id).select().single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Delete a room
export const deleteRoom = async (id: string): Promise<void> => {
  const { error } = await supabase.from('rooms').delete().eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
};

// --------- Image upload to Supabase storage ---------
export const uploadToSupabase = async (file: File): Promise<string> => {
  const path = `images/${file.name}-${Date.now()}`;
  const { error } = await supabase.storage.from('rooms').upload(path, file);

  if (error) {
    throw new Error(error.message);
  }

  const publicUrl = supabase.storage.from('rooms').getPublicUrl(path).data.publicUrl;
  return publicUrl;
};
