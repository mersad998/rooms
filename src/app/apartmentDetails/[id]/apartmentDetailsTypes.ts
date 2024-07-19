export interface ApartmentDetailsProps {
  params: { id: string };
  searchParams: {};
}

export interface RoomInformation {
  id: number;
  apartmentId: number;
  createdAt: number; // Timestamp
  name: string;
  size: number; // in square meters
  equipment: string;
  imageUrl: string;
}
