'use client';
import { FC, useState } from 'react';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Apartment } from './page';

const AddApartmentForm: FC<any> = ({ onClose }) => {
  const { register, handleSubmit } = useForm<Apartment>();

  const onSubmit: SubmitHandler<Apartment> = (formData) => {
    console.log('formData: ', formData);
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
          {...register('price', {})}
          margin="dense"
          required
          id="price"
          name="price"
          label="price"
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
