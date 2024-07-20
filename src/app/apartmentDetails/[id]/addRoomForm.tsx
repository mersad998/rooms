'use client';
import { FC, useRef, useState } from 'react';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Dialog } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RoomInformation } from './apartmentDetailsTypes';

type RoomFormData = Omit<RoomInformation, 'interiorImageUrl' | 'exteriorImageUrl'> & {
  interiorImageUrl: File;
  exteriorImageUrl: File;
};

const AddRoomForm: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm<RoomFormData>();
  const [interiorImageName, setInteriorImageName] = useState('');
  const [exteriorImageName, setExteriorImageName] = useState('');

  const interiorImageInput = useRef<HTMLInputElement>(null);
  const exteriorImageInput = useRef<HTMLInputElement>(null);

  const onSubmit: SubmitHandler<RoomFormData> = (formData) => {
    console.log('formData: ', formData); // todo: send to API
    onClose();
  };

  const handleInteriorImageClick = (): void => {
    interiorImageInput.current?.click();
  };

  const handleExteriorImageClick = (): void => {
    exteriorImageInput.current?.click();
  };

  const handleInteriorImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setInteriorImageName(file.name);
      setValue('interiorImageUrl', file);
    }
  };

  const handleExteriorImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          style={{ display: 'none' }}
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
          style={{ display: 'none' }}
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
