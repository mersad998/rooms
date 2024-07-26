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
import { useSelector } from 'react-redux';
import { selectUserId } from '@/lib/features/profile/profileSlice';

const ApartmentDetails: FC<ApartmentDetailsProps> = (props) => {
  const { id } = props.params;

  const [isLoading, apartmentDetails] = useApartmentDetails(id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const userId = useSelector(selectUserId);
  const isUsersApartment = apartmentDetails?.createdBy === userId;

  const classes = useStyles();

  // Show loading skeleton
  if (isLoading) {
    return (
      <div className={classes.container}>
        <ApartmentDetailsSkeleton />
      </div>
    );
  }

  if (!apartmentDetails) {
    return (
      <div className="h-[80vh] flex flex-col justify-center">
        <Typography variant="h6" color={'purple'} className="text-center">
          Apartment not found!
        </Typography>
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
        {apartmentDetails && (
          <ApartmentDetailCards apartment={apartmentDetails} allowEdit={isUsersApartment} allowDelete={isUsersApartment} />
        )}

        {isUsersApartment && (
          <DetailCardContainer title={`Add new room`} titleColor="#042f83">
            <div
              className={`${classes.addCard} border border-dashed border-gray-500 flex justify-center items-center w-full h-16 mx-2 mt-5 mb-5`}
              onClick={() => setIsFormOpen(true)}
            >
              <AddIcon />
            </div>
          </DetailCardContainer>
        )}
      </div>
    </div>
  );
};

// memoize component (only render if `id` changes)
export default memo(ApartmentDetails, (prevProps, nextProps) => {
  return prevProps.params.id === nextProps.params.id;
});
