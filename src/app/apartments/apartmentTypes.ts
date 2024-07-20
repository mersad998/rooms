import { RoomInformation } from '../apartmentDetails/[id]/apartmentDetailsTypes';

export interface ApartmentInformation {
  id: number;
  name: string;
  createdAt: number;
  location: string;
  description: string;
  deposit: number;
  rent: number;
  roomNumber: number;
  rate: number;
  size: number;
  rooms?: RoomInformation[];
  ImageUrl?: string;
}
