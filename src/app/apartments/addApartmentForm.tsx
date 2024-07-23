'use client';
import { FC, useRef, useState } from 'react';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ApartmentInformation } from './apartmentTypes';
import { createApartmentAction } from '@/lib/features/apartments/apartmentsSlice';
import { useDispatch } from 'react-redux';

type ApartmentFormData = Omit<ApartmentInformation, 'imageUrl'> & {
  imageUrl: File;
};

const AddApartmentForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm<ApartmentFormData>();

  const [imageName, setImageName] = useState('');
  const imageInput = useRef<HTMLInputElement>(null);

  const handleImageClick = (): void => {
    imageInput.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImageName(file.name);
      setValue('imageUrl', file);
    }
  };

  // In the AddApartmentForm component
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ApartmentFormData> = async (formData) => {
    try {
      // Dispatch the createApartment action
      await dispatch(
        (createApartmentAction as any)({
          ...formData,
          imageUrl: formData.imageUrl.name,
        }),
      ).unwrap(); // Unwrap the result to handle any errors
      onClose();
    } catch (error) {
      console.error('Failed to create apartment:', error);
    }
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
          {...register('roomNumber', {})}
          margin="dense"
          required
          id="roomNumber"
          name="roomNumber"
          label="roomNumber"
          fullWidth
          variant="standard"
          type="number"
        />
        <TextField
          {...register('size', {})}
          margin="dense"
          required
          id="size"
          name="size"
          label="size"
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

        <TextField
          margin="dense"
          required
          label="exterior image"
          placeholder="click here to select image"
          fullWidth
          variant="standard"
          value={imageName}
          onClick={handleImageClick}
          InputProps={{
            readOnly: true,
          }}
        />
        <input
          {...register('imageUrl', {})}
          id="exteriorImageUrl"
          name="exteriorImageUrl"
          ref={imageInput}
          style={{ display: 'none' }}
          type="file"
          onChange={handleImageChange}
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
