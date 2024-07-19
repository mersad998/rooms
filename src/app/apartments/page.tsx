'use client';
import { FC, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Paper, Typography } from '@mui/material';
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
      textShadow: '0 0 1px rgba(12,92,174,1)',
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

  return (
    <div style={{ display: 'flex' }}>
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
              height: 400,
              marginInline: 8,
              padding: 12,
            }}
            onClick={() => goToDetails(apartment.id)}
          >
            <Typography variant="h5" color={'purple'}>
              {apartment.name}
            </Typography>
            <div style={{ width: '100%', border: '0.5px dotted purple', paddingTop: 4, paddingBottom: 4 }}>
              <Typography style={{ textAlign: 'center' }}>location</Typography>
              <Typography style={{ textAlign: 'center', width: '100%', marginTop: 10 }}>{apartment.location}</Typography>
            </div>
            <div style={{ width: '100%', border: '0.5px dotted purple', paddingTop: 4, paddingBottom: 4 }}>
              <Typography style={{ textAlign: 'center' }}>deposit</Typography>
              <Typography style={{ textAlign: 'center', width: '100%', marginTop: 10 }}>{apartment.deposit}</Typography>
            </div>
            <div style={{ width: '100%', border: '0.5px dotted purple', paddingTop: 4, paddingBottom: 4 }}>
              <Typography style={{ textAlign: 'center' }}>rent</Typography>
              <Typography style={{ textAlign: 'center', width: '100%', marginTop: 10 }}>{apartment.rent}</Typography>
            </div>
            <div style={{ width: '100%', border: '0.5px dotted purple', paddingTop: 4, paddingBottom: 4 }}>
              <Typography style={{ textAlign: 'center' }}>description</Typography>
              <Typography style={{ textAlign: 'center', width: '100%', marginTop: 10 }}>{apartment.description}</Typography>
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
          height: 400,
          marginInline: 8,
        }}
        onClick={() => setIsFormOpen(true)}
      >
        <AddIcon />
      </Box>
    </div>
  );
};

export default Apartments;
