import type { ApartmentInformation } from '@/app/myApartments/myApartmentTypes';

type RequestStatus = 'idle' | 'loading' | 'failed';

export interface ApartmentsSliceState {
  value: ApartmentInformation[] | null;
  apartmentDetails?: ApartmentInformation | null;
  status: RequestStatus;
  params: {
    limit: number;
    offset: number;
  };
}
