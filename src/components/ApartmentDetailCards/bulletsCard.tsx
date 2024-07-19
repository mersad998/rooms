import { type FC } from 'react';
import { Typography } from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import { DetailCardContainer } from '../detailCardContainer';

const BulletsCard: FC<{ title: string; bullets: string[] }> = ({ title, bullets = [] }) => {
  return (
    <DetailCardContainer title={title}>
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
    </DetailCardContainer>
  );
};

export default BulletsCard;
