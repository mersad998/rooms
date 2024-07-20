'use client';
import { FC, FormEvent, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import makeStyles from '@mui/styles/makeStyles';
import AddApartmentForm from './addApartmentForm';
import { ApartmentInformation } from './apartmentTypes';
import { mockApartments } from '../mockData';

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
  const [apartments, setApartments] = useState<ApartmentInformation[]>(mockApartments);

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
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {isFormOpen && (
        <AddApartmentForm
          onClose={() => {
            setIsFormOpen(false);
          }}
        />
      )}

      {apartments.map((apartment, index) => {
        return (
          <Box
            component={Paper}
            className={classes.cardContainer}
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: 350,
              height: 300,
              marginInline: 8,
              padding: 12,
              marginTop: 8,
            }}
            onClick={() => goToDetails(apartment.id)}
          >
            <Typography variant="h5" color={'purple'}>
              {apartment.name}
            </Typography>
            <div style={{ width: '100%', display: 'flex', paddingTop: 4, paddingBottom: 4 }}>
              <Typography style={{ fontSize: '13px', fontWeight: 'bold' }}>location:</Typography>
              <Typography style={{ fontSize: '13px', width: '100%', marginLeft: 8 }}>{apartment.location}</Typography>
            </div>
            <div style={{ width: '100%', display: 'flex', paddingTop: 4, paddingBottom: 4 }}>
              <Typography style={{ fontSize: '13px', fontWeight: 'bold' }}>deposit:</Typography>
              <Typography style={{ fontSize: '13px', width: '100%', marginLeft: 8 }}>{apartment.deposit}</Typography>
            </div>
            <div style={{ width: '100%', display: 'flex', paddingTop: 4, paddingBottom: 4 }}>
              <Typography style={{ fontSize: '13px', fontWeight: 'bold' }}>rent:</Typography>
              <Typography style={{ fontSize: '13px', width: '100%', marginLeft: 8 }}>{apartment.rent}</Typography>
            </div>
            <div style={{ width: '100%', display: 'flex', paddingTop: 4, paddingBottom: 4 }}>
              <Typography style={{ fontSize: '13px', fontWeight: 'bold' }}>description:</Typography>
              <Typography style={{ fontSize: '13px', width: '100%', marginLeft: 8 }}>{apartment.description}</Typography>
            </div>

            <div style={{ display: 'flex', width: '100%', borderTop: '1px purple dotted' }}>
              <Button style={{ display: 'flex' }} onClick={onDeleteClick} color="error">
                <Typography variant="body2">Delete</Typography>
              </Button>
              <Button style={{ display: 'flex' }} onClick={onEditClick}>
                <Typography variant="body2">Edit</Typography>
              </Button>
            </div>
          </Box>
        );
      })}

      <Box
        component={Paper}
        className={classes.cardContainer}
        style={{
          border: '1px dashed gray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 350,
          height: 300,
          marginInline: 8,
          marginTop: 8,
        }}
        onClick={() => setIsFormOpen(true)}
      >
        <AddIcon />
      </Box>
    </div>
  );
};

export default Apartments;
