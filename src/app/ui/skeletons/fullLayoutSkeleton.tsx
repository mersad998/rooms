import { Skeleton } from '@mui/material';

import type { FC } from 'react';

const FullLayoutSkeleton: FC = () => {
  return (
    <div>
      <Skeleton variant="rectangular" width={'60vh'} height={'10vh'} />
      <Skeleton variant="rounded" width={'60vh'} height={'10vh'} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rounded" width={'60vh'} height={'10vh'} />
    </div>
  );
};

export default FullLayoutSkeleton;
