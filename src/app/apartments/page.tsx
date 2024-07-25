'use client';
import { FC, FormEvent, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import makeStyles from '@mui/styles/makeStyles';
import AddApartmentForm from './addApartmentForm';
import { ApartmentInformation } from './apartmentTypes';
import useApartments from '../hooks/useApartments';

export const useStyles = makeStyles(() => ({
  cardContainer: {
    '&:hover ': {
      color: 'rgba(0,24,96,0.7)',
      boxShadow: '0 0 5px rgba(48,125,193,1)',
      border: 'unset !important',
    },
  },
}));

const Apartments: FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, apartments] = useApartments();

  const router = useRouter();
  const classes = useStyles();

  const goToDetails = (apartmentId: number): void => {
    router.push(`apartmentDetails/${apartmentId}`);
  };

  const onDeleteClick = (event: FormEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
  };
  const onEditClick = (event: FormEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
  };

  return (
    <div className="flex flex-wrap">
      {isFormOpen && (
        <AddApartmentForm
          onClose={() => {
            setIsFormOpen(false);
          }}
        />
      )}

      {(apartments ?? []).map((apartment, index) => {
        if (!apartment) return <></>;

        return (
          <Box
            component={Paper}
            className={`${classes.cardContainer} flex flex-col justify-between items-center w-[350px] h-[300px] mx-2 p-3 mt-2`}
            key={index}
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
              <Button className="flex" onClick={onDeleteClick} color="error">
                <Typography variant="body2">Delete</Typography>
              </Button>
              <Button className="flex" onClick={onEditClick}>
                <Typography variant="body2">Edit</Typography>
              </Button>
            </div>
          </Box>
        );
      })}

      <Box
        component={Paper}
        className={`${classes.cardContainer} border border-dashed border-gray-500 flex justify-center items-center w-[350px] h-[300px] mx-2 mt-2`}
        onClick={() => setIsFormOpen(true)}
      >
        <AddIcon />
      </Box>
    </div>
  );
};

export default Apartments;
