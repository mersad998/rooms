'use client';
import { FC, useRef, useState } from 'react';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { Button, CircularProgress, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog } from '@mui/material';

import { uploadToSupabase } from '@/lib/features/apartments/apartmentsApi';
import { createApartmentAction } from '@/lib/features/apartments/apartmentsSlice';

import type { ApartmentInformation } from './myApartmentTypes';
import { selectUserId } from '@/lib/features/profile/profileSlice';

type ApartmentFormData = Omit<ApartmentInformation, 'imageUrl'> & {
  imageUrl: File;
};

const AddApartmentForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm<ApartmentFormData>();

  const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();
  const userId = useSelector(selectUserId);

  // image name will be shown on text field input
  const [imageName, setImageName] = useState('');

  // Ref to the real file input element to trigger the file selection dialog
  const imageInput = useRef<HTMLInputElement>(null);

  // loading state
  const [isSending, setIsSending] = useState(false);

  // Handle the click event on the text field to trigger the file selection dialog
  const handleImageClick = (): void => {
    imageInput.current?.click();
  };

  // Handle the change event on the file input element
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImageName(file.name);
      setValue('imageUrl', file);
    }
  };

  // upload the image to supabase and then create the apartment with the image URL
  const onSubmit: SubmitHandler<ApartmentFormData> = async (formData) => {
    // show loading
    setIsSending(true);

    try {
      const imageUrl = await uploadToSupabase(formData.imageUrl);

      // Dispatch the createApartment action
      await dispatch(
        createApartmentAction({
          ...formData,
          imageUrl: imageUrl,
          createdBy: userId,
          rate: 3, // this is default value, implement rate picker in the future
        }),
      ).unwrap(); // Unwrap the result to handle any errors

      // disappear loading
      setIsSending(false);

      // Close the dialog
      onClose();
    } catch (error) {
      setIsSending(false);
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
          className="hidden"
          type="file"
          onChange={handleImageChange}
        />
      </DialogContent>

      <DialogActions>
        <Button disabled={isSending} onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isSending} type="submit">
          {isSending ? <CircularProgress size={25} /> : 'create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddApartmentForm;
