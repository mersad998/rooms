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
  onCardClick?: (apartmentId: number) => void;
  rooms?: RoomInformation[];
  imageUrl?: string;
  createdBy?: number;
}
