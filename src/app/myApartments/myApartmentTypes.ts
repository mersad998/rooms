import type { RoomInformation } from '../apartmentDetails/[id]/apartmentDetailsTypes';

export interface ApartmentInformation {
  id: string;
  name: string;
  createdAt: number;
  location: string;
  description: string;
  deposit: number;
  rent: number;
  roomNumber: number;
  rate: number;
  size: number;
  onCardClick?: (apartmentId: string) => void;
  rooms?: RoomInformation[];
  imageUrl?: string;
  createdBy?: string;
}
