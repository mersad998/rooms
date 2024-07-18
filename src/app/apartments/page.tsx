'use client';
import { FC, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Box, Paper } from '@mui/material';

interface Apartment {
  name: string;
  location: string;
  price: number;
  description: string;
}

import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  cardContainer: {
    '&:hover ': {
      color: 'rgba(0,24,96,0.7)',
      boxShadow: '0 0 5px rgba(48,125,193,1)',
      textShadow: '0 0 1px rgba(12,92,174,1)',
    },
  },
}));

const AddApartment: FC = () => {
  const [myApartments, setMyApartments] = useState<Apartment[]>([
    {
      name: 'Apartment 1',
      location: 'Location 1',
      price: 1000,
      description: 'Description 1',
    },
  ]);

  const classes = useStyles();

  return (
    <div style={{ display: 'flex' }}>
      {myApartments.map((apartment, index) => {
        return (
          <Box
            component={Paper}
            className={classes.cardContainer}
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 200,
              height: 300,
              marginInline: 8,
            }}
          >
            <h2>{apartment.name}</h2>
            <p>{apartment.location}</p>
            <p>{apartment.price}</p>
            <p>{apartment.description}</p>
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
          width: 200,
          height: 300,
          marginInline: 8,
        }}
      >
        <AddIcon />
      </Box>
    </div>
  );
};

export default AddApartment;
