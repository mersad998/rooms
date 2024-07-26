import { Skeleton } from '@mui/material';

import type { FC } from 'react';

const CardSkeleton: FC = () => {
  return (
    <div className="m-4">
      <Skeleton variant="rectangular" width={'40vh'} height={'8vh'} />
      <Skeleton variant="rounded" width={'40vh'} height={'8vh'} />
      <Skeleton variant="rounded" width={'40vh'} height={'8vh'} />
    </div>
  );
};

const AddLayoutSkeleton: FC = () => {
  return (
    <div className="flex flex-row flex-wrap p-2">
      {Array.from({ length: 8 }).map((_, idx) => (
        <CardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default AddLayoutSkeleton;
