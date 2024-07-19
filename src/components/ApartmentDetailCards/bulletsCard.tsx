import { type FC } from 'react';
import { Typography } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';

const BulletsCard: FC<{ title: string; bullets: string[] }> = ({ title, bullets = [] }) => {
  return (
    <div style={{ width: '100%' }}>
      <Typography
        style={{
          width: '100%',
          marginTop: 24,
          textAlign: 'center',
          borderTop: '0.5px dotted purple',
          borderBottom: '0.5px dotted purple',
          alignSelf: 'center',
          margin: 'auto',
        }}
      >
        {title}
      </Typography>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: 8,
          padding: 4,
          width: '100%',
        }}
      >
        {bullets.map((bullet) => (
          <div key={bullet} style={{ display: 'flex', flexBasis: '30%', alignItems: 'center' }}>
            <CheckIcon style={{ color: 'green', marginRight: 8 }} />
            <Typography>{bullet}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletsCard;
