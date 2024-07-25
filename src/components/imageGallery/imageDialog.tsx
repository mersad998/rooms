'use client';
import { FC } from 'react';

import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Dialog } from '@mui/material';

const ImageDialog: FC<{ onClose: () => void; name: string; imageUrl: string }> = ({ onClose, name, imageUrl }) => {
  return (
    <Dialog open={true}>
      <DialogTitle>{name}</DialogTitle>

      <DialogContent>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          srcSet={imageUrl}
          src={imageUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full max-h-[500px] max-w-[500px] object-contain"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDialog;
