'use client';

import React, { type FC, memo } from 'react';
// import ImageGallery from '@/components/imageGallery';
// import { getApartmentImages } from '@/components/imageGallery/helper';

import { useStyles } from './apartmentDetailsStyles';

import type { ApartmentDetailsProps } from './apartmentDetailsTypes';

import { Typography } from '@mui/material';
import ApartmentDetailsSkeleton from '@/app/ui/skeletons/apartmentDetails';
import useApartmentDetails from '../hooks/useApartmentDetails';
import ApartmentDetailCards from '@/components/ApartmentDetailCards';
import ImageGallery from '@/components/imageGallery';
import { getApartmentImages } from '@/components/imageGallery/helper';

const ApartmentDetails: FC<ApartmentDetailsProps> = (props) => {
  const { id } = props.params;

  const [isLoading, apartmentDetails] = useApartmentDetails(id);
  const classes = useStyles();

  if (isLoading) {
    return (
      <div className={classes.container}>
        <ApartmentDetailsSkeleton />
      </div>
    );
  }

  if (!apartmentDetails) {
    return (
      <div className={classes.container}>
        <Typography>Apartment not found!</Typography>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.imagesContainer}>
        {apartmentDetails && <ImageGallery images={getApartmentImages(apartmentDetails.rooms ?? [])} />}
      </div>

      <div className={classes.cardsContainer}>{apartmentDetails && <ApartmentDetailCards apartment={apartmentDetails} />}</div>
    </div>
  );
};

// memoize component (only render if `id` changes)
export default memo(ApartmentDetails, (prevProps, nextProps) => {
  return prevProps.params.id === nextProps.params.id;
});
