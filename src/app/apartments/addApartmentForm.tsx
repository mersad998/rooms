'use client';
import { FC } from 'react';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ApartmentInformation } from './apartmentTypes';

const AddApartmentForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { register, handleSubmit } = useForm<ApartmentInformation>();

  const onSubmit: SubmitHandler<ApartmentInformation> = (formData) => {
    console.log('formData: ', formData); // todo: send to API
    onClose();
  };

  return (
    <Dialog
      open={true}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit(onSubmit),
      }}
    >
      <DialogTitle>Add Apartment</DialogTitle>
      <DialogContent>
        <DialogContentText>In this step you should create your new apartment.</DialogContentText>
        <DialogContentText>you will be able to add details to it at any time!</DialogContentText>

        <TextField
          {...register('name', {})}
          margin="dense"
          autoFocus
          required
          id="name"
          name="name"
          label="name"
          fullWidth
          variant="standard"
        />
        <TextField
          {...register('location', {})}
          margin="dense"
          required
          id="location"
          name="location"
          label="location"
          fullWidth
          variant="standard"
        />
        <TextField
          {...register('deposit', {})}
          margin="dense"
          required
          id="deposit"
          name="deposit"
          label="deposit"
          fullWidth
          variant="standard"
          type="number"
        />
        <TextField
          {...register('rent', {})}
          margin="dense"
          required
          id="rent"
          name="rent"
          label="rent"
          fullWidth
          variant="standard"
          type="number"
        />
        <TextField
          {...register('description', {})}
          margin="dense"
          required
          id="description"
          name="description"
          label="description"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddApartmentForm;
