import type { ApartmentInformation } from '@/app/myApartments/myApartmentTypes';

export interface ApartmentDetailCardsProps {
  apartment: ApartmentInformation;
  allowEdit?: boolean;
  allowDelete?: boolean;
}
