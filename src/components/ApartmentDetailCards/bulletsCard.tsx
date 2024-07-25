import { type FC } from 'react';
import { Typography } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';

const BulletsCard: FC<{ title: string; bullets: string[] }> = ({ title, bullets = [] }) => {
  return (
    <div className="w-full">
      <Typography className="w-full mt-6 text-center border-t border-b border-dotted border-purple-500 self-center mx-auto">
        {title}
      </Typography>

      <div className="flex flex-wrap justify-between mt-2 p-1 w-full">
        {bullets.map((bullet) => (
          <div key={bullet} className="flex basis-1/3 items-center">
            <CheckIcon className="text-green-500 mr-2F" />
            <Typography>{bullet}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletsCard;
