export interface ApartmentDetailsProps {
  params: { id: string };
  searchParams: {};
}

export interface RoomInformation {
  id: string;
  apartmentId: string;
  createdAt: number; // Timestamp
  name: string;
  size: number; // in square meters
  equipment: string;
  interiorImageUrl: string;
  exteriorImageUrl: string;
}
