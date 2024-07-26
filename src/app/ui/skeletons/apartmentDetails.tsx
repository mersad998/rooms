import React, { type FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

const ApartmentDetailsSkeleton: FC = () => {
  return (
    <div className="flex flex-1 p-2">
      <div className="flex-1 justify-center items-center">
        <Skeleton variant="rectangular" width={300} height={300} animation="wave" sx={{ marginTop: 1 }} />
        <Skeleton variant="rectangular" width={300} height={300} animation="wave" sx={{ marginTop: 1 }} />
      </div>

      <div className="flex-2 p-2 w-full">
        <Skeleton variant="text" width={'100%'} height={60} animation="wave" />
        <Skeleton variant="text" width={'100%'} height={100} animation="wave" />
        <Skeleton variant="text" width={'100%'} height={40} animation="wave" />
        <Skeleton variant="text" width={'100%'} height={200} animation="wave" />
        <Skeleton variant="text" width={'100%'} height={70} animation="wave" />
        <Skeleton variant="text" width={'100%'} height={300} animation="wave" />
      </div>
    </div>
  );
};

export default ApartmentDetailsSkeleton;
