'use client';

import React, { type FC, memo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { useStyles } from './apartmentDetailsStyles';

import type { ApartmentDetailsProps } from './apartmentDetailsTypes';

import { Typography } from '@mui/material';
import ApartmentDetailsSkeleton from '@/app/ui/skeletons/apartmentDetails';
import useApartmentDetails from '../hooks/useApartmentDetails';
import ApartmentDetailCards from '@/components/ApartmentDetailCards';
import ImageGallery from '@/components/imageGallery';
import { getApartmentImages } from '@/components/imageGallery/helper';
import { DetailCardContainer } from '@/components/detailCardContainer';
import AddRoomForm from './addRoomForm';

const ApartmentDetails: FC<ApartmentDetailsProps> = (props) => {
  const { id } = props.params;

  const [isLoading, apartmentDetails] = useApartmentDetails(id);
  const [isFormOpen, setIsFormOpen] = useState(false);
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
      {isFormOpen && (
        <AddRoomForm
          onClose={() => {
            setIsFormOpen(false);
          }}
          apartmentId={id}
        />
      )}

      <div className={classes.imagesContainer}>
        {apartmentDetails && (
          <ImageGallery images={getApartmentImages(apartmentDetails.rooms ?? [], apartmentDetails.imageUrl)} />
        )}
      </div>

      <div className={classes.cardsContainer}>
        {apartmentDetails && <ApartmentDetailCards apartment={apartmentDetails} />}
        <DetailCardContainer title={`Add new room`} titleColor="#042f83">
          <div
            className={`${classes.addCard} border border-dashed border-gray-500 flex justify-center items-center w-full h-16 mx-2 mt-5 mb-5`}
            onClick={() => setIsFormOpen(true)}
          >
            <AddIcon />
          </div>
        </DetailCardContainer>
      </div>
    </div>
  );
};

// memoize component (only render if `id` changes)
export default memo(ApartmentDetails, (prevProps, nextProps) => {
  return prevProps.params.id === nextProps.params.id;
});
