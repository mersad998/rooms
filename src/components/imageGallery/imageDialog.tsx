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
          style={{ width: '100%', height: '100%', maxHeight: 500, maxWidth: 500, objectFit: 'contain' }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ImageDialog;
