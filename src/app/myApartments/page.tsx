'use client';
import { FC, FormEvent, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Paper, Tooltip, Typography } from '@mui/material';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useRouter } from 'next/navigation';

import AddApartmentForm from './addApartmentForm';
import useApartments from '../hooks/useApartments';
import { useStyles } from './myApartmentStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from '@/lib/features/profile/profileSlice';
import { deleteApartmentAction } from '@/lib/features/apartments/apartmentsSlice';
import AddLayoutSkeleton from '../ui/skeletons/addLayoutSkeleton';

const MyApartments: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, apartments = []] = useApartments({ forUser: true });

  const router = useRouter();
  const classes = useStyles();

  const dispatch: ThunkDispatch<void, void, AnyAction> = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  // Navigate to the apartment details page
  const goToDetails = (apartmentId: string): void => {
    router.push(`apartmentDetails/${apartmentId}`);
  };

  // Handle the delete and edit button clicks
  const onDeleteClick = (event: FormEvent<HTMLButtonElement>, apartmentId: string): void => {
    // prevent the event from bubbling up
    event.stopPropagation();

    // call the deleteApartmentAction
    dispatch(deleteApartmentAction(apartmentId));
  };
  const onEditClick = (event: FormEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
  };

  if (!isLogin) {
    return (
      <div className="h-[80vh] flex flex-col justify-center">
        <Typography variant="h6" color={'purple'} className="text-center">
          You need to login to see your apartments
        </Typography>
        <Typography color={'purple'} className="text-center">
          Use the Login button on drawer to login
        </Typography>
      </div>
    );
  }

  if (isLoading) {
    return <AddLayoutSkeleton />;
  }

  return (
    <div className="flex flex-wrap">
      {isFormOpen && (
        <AddApartmentForm
          onClose={() => {
            setIsFormOpen(false);
          }}
        />
      )}

      {apartments.map((apartment, index) => {
        if (!apartment) return <></>;

        return (
          <Box
            component={Paper}
            className={`${classes.cardContainer} flex flex-col justify-between items-center w-[350px] h-[300px] mx-2 p-3 mt-2`}
            key={`${apartment.id}_${index}`}
            onClick={() => goToDetails(apartment.id)}
          >
            <Typography variant="h5" color={'purple'}>
              {apartment.name}
            </Typography>
            <div className="w-full flex pt-1 pb-1">
              <Typography className="text-[13px] font-bold">location:</Typography>
              <Typography className="text-[13px] w-full ml-2">{apartment.location}</Typography>
            </div>
            <div className="w-full flex pt-1 pb-1">
              <Typography className="text-[13px] font-bold">deposit:</Typography>
              <Typography className="text-[13px] w-full ml-2">{apartment.deposit}</Typography>
            </div>
            <div className="w-full flex pt-1 pb-1">
              <Typography className="text-[13px] font-bold">rent:</Typography>
              <Typography className="text-[13px] w-full ml-2">{apartment.rent}</Typography>
            </div>
            <div className="w-full flex pt-1 pb-1">
              <Typography className="text-[13px] font-bold">description:</Typography>
              <Typography className="text-[13px] w-full ml-2">{apartment.description}</Typography>
            </div>

            <div className="flex w-full border-t border-t-purple-500 border-dotted">
              <Button className="flex" onClick={(e) => onDeleteClick(e, apartment.id)} color="error">
                <Typography variant="body2">Delete</Typography>
              </Button>

              <Tooltip title="It will implement later">
                <Button className="flex" onClick={onEditClick}>
                  <Typography variant="body2">Edit</Typography>
                </Button>
              </Tooltip>
            </div>
          </Box>
        );
      })}

      <Box
        component={Paper}
        className={`${classes.cardContainer} border border-dashed border-gray-500 flex justify-center items-center w-[350px] h-[300px] mx-2 mt-2`}
        onClick={() => setIsFormOpen(true)}
        key="AddIcon container"
      >
        <AddIcon />
      </Box>
    </div>
  );
};

export default MyApartments;
