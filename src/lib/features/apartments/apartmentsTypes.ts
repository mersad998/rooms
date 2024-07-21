import { ApartmentInformation } from '@/app/apartments/apartmentTypes';

type RequestStatus = 'idle' | 'loading' | 'failed';

export interface ApartmentsSliceState {
  value: ApartmentInformation[] | null;
  status: RequestStatus;
  params: {
    limit: number;
    offset: number;
  };
}
