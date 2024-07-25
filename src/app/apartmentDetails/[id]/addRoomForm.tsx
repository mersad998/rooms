'use client';
import { FC, useRef, useState } from 'react';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createRoomAction } from '@/lib/features/apartments/apartmentsSlice';
import { useDispatch } from 'react-redux';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { uploadToSupabase } from '@/lib/features/apartments/apartmentsApi';

import type { RoomInformation } from './apartmentDetailsTypes';

type RoomFormData = Omit<RoomInformation, 'interiorImageUrl' | 'exteriorImageUrl'> & {
  interiorImageUrl: File;
  exteriorImageUrl: File;
};

const AddRoomForm: FC<{ onClose: () => void; apartmentId: string }> = ({ onClose, apartmentId }) => {
  const { register, handleSubmit, setValue } = useForm<RoomFormData>();

  const dispatch = useDispatch<ThunkDispatch<void, void, AnyAction>>();

  // image name will be shown on text field input
  const [interiorImageName, setInteriorImageName] = useState('');
  const [exteriorImageName, setExteriorImageName] = useState('');

  // Ref to the real file input element to trigger the file selection dialog
  const interiorImageInput = useRef<HTMLInputElement>(null);
  const exteriorImageInput = useRef<HTMLInputElement>(null);

  // upload the image to supabase and then create the room with the image URL
  const onSubmit: SubmitHandler<RoomFormData> = async (formData) => {
    try {
      // Upload the images to Supabase
      const _interiorImageUrl = await uploadToSupabase(formData.interiorImageUrl);
      const _exteriorImageUrl = await uploadToSupabase(formData.exteriorImageUrl);

      // Dispatch the createRoom action
      await dispatch(
        createRoomAction({
          ...formData,
          apartmentId,
          interiorImageUrl: _interiorImageUrl,
          exteriorImageUrl: _exteriorImageUrl,
        }),
      ).unwrap(); // Unwrap the result to handle any errors

      onClose();
    } catch (error) {
      console.error('Failed to create room:', error);
    }
  };

  // Trigger the file selection dialog for the interior image
  const handleInteriorImageClick = (): void => {
    interiorImageInput.current?.click();
  };

  // Trigger the file selection dialog for the exterior image
  const handleExteriorImageClick = (): void => {
    exteriorImageInput.current?.click();
  };

  // Handle the change event on the file input element for the interior image
  const handleInteriorImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setInteriorImageName(file.name);
      setValue('interiorImageUrl', file);
    }
  };

  // Handle the change event on the file input element for the exterior image
  const handleExteriorImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setExteriorImageName(file.name);
      setValue('exteriorImageUrl', file);
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
      <DialogTitle>Add Room</DialogTitle>
      <DialogContent>
        <DialogContentText>In this step you can add rooms to your apartment.</DialogContentText>
        <DialogContentText>you will be able to edit it at any time!</DialogContentText>

        <TextField
          {...register('name', {})}
          margin="dense"
          autoFocus
          required
          id="name"
          name="name"
          label="room name"
          fullWidth
          variant="standard"
        />
        <TextField
          {...register('size', {})}
          margin="dense"
          required
          id="size"
          name="size"
          label="size (in M/Sq)"
          fullWidth
          variant="standard"
          type="number"
        />
        <TextField
          {...register('equipment', {})}
          margin="dense"
          required
          id="equipment"
          name="equipment"
          label="equipments (separate by / )"
          placeholder="Ex. TV / Master / ..."
          fullWidth
          variant="standard"
        />

        <TextField
          margin="dense"
          required
          label="interior image"
          fullWidth
          variant="standard"
          placeholder="click here to select image"
          value={interiorImageName}
          onClick={handleInteriorImageClick}
          InputProps={{
            readOnly: true,
          }}
        />
        <input
          {...register('interiorImageUrl', {})}
          id="interiorImageUrl"
          name="interiorImageUrl"
          ref={interiorImageInput}
          className="hidden"
          type="file"
          onChange={handleInteriorImageChange}
        />

        <TextField
          margin="dense"
          required
          label="exterior image"
          placeholder="click here to select image"
          fullWidth
          variant="standard"
          value={exteriorImageName}
          onClick={handleExteriorImageClick}
          InputProps={{
            readOnly: true,
          }}
        />
        <input
          {...register('exteriorImageUrl', {})}
          id="exteriorImageUrl"
          name="exteriorImageUrl"
          ref={exteriorImageInput}
          className="hidden"
          type="file"
          onChange={handleExteriorImageChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddRoomForm;
