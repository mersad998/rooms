import { type FC } from 'react';

import { Typography } from '@mui/material';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { DetailCardContainer } from '../detailCardContainer';
import { RoomInformation } from '@/app/apartmentDetails/[id]/apartmentDetailsTypes';
import BulletsCard from './bulletsCard';

const RoomInfoCard: FC<{ details: RoomInformation; roomNumber: number }> = ({ details, roomNumber }) => {
  return (
    <DetailCardContainer title={`room ${roomNumber}`} titleColor="#042f83">
      <>
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
          <div style={{ display: 'flex' }}>
            <AirlineSeatIndividualSuiteIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography textAlign={'center'}>{`name: ${details.name}`}</Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <AspectRatioIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography textAlign={'center'}>{`total size: ${details.size} M/Sq`}</Typography>
          </div>
        </div>

        <BulletsCard title="Equipments" bullets={details.equipment.split('/')} />
      </>
    </DetailCardContainer>
  );
};

export default RoomInfoCard;
