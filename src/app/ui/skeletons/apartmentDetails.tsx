import React, { type FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

const ApartmentDetailsSkeleton: FC = () => {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 8 }}>
      <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Skeleton variant="rectangular" width={300} height={300} animation="wave" sx={{ marginTop: 1 }} />
        <Skeleton variant="rectangular" width={300} height={300} animation="wave" sx={{ marginTop: 1 }} />
        <Skeleton variant="rectangular" width={300} height={300} animation="wave" sx={{ marginTop: 1 }} />
      </div>

      <div style={{ flex: 2, padding: 8 }}>
        <div>
          <Skeleton variant="text" width={'100%'} height={60} animation="wave" />
          <Skeleton variant="text" width={'100%'} height={100} animation="wave" />
          <Skeleton variant="text" width={'100%'} height={40} animation="wave" />
          <Skeleton variant="text" width={'100%'} height={200} animation="wave" />
          <Skeleton variant="text" width={'100%'} height={70} animation="wave" />
          <Skeleton variant="text" width={'100%'} height={300} animation="wave" />
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetailsSkeleton;
