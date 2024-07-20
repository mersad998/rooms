'use client';
import { FC } from 'react';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RoomInformation } from './apartmentDetailsTypes';

const AddRoomForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { register, handleSubmit } = useForm<RoomInformation>();

  const onSubmit: SubmitHandler<RoomInformation> = (formData) => {
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
          {...register('interiorImageUrl', {})}
          margin="dense"
          required
          id="interiorImageUrl"
          name="interiorImageUrl"
          label="interior image"
          fullWidth
          variant="standard"
        />
        <TextField
          {...register('exteriorImageUrl', {})}
          margin="dense"
          required
          id="exteriorImageUrl"
          name="exteriorImageUrl"
          label="exterior image"
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

export default AddRoomForm;
