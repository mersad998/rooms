import { type FC } from 'react';

import { Typography } from '@mui/material';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { DetailCardContainer } from '../detailCardContainer';
import BulletsCard from './bulletsCard';

import type { RoomInformation } from '@/app/apartmentDetails/[id]/apartmentDetailsTypes';

const RoomInfoCard: FC<{
  details: RoomInformation;
  roomNumber: number;
  onEditClick?: (apartmentId?: string) => void;
  onDeleteClick?: (apartmentId?: string) => void;
}> = ({ details, roomNumber, onEditClick, onDeleteClick }) => {
  return (
    <DetailCardContainer
      title={`room ${roomNumber}`}
      id={details.id}
      titleColor="#042f83"
      onEditClick={onEditClick}
      onDeleteClick={onDeleteClick}
    >
      <>
        <div className="flex flex-wrap justify-between mt-2 p-1 w-full">
          <div className="flex">
            <AirlineSeatIndividualSuiteIcon className="mx-1 text-[#042f83]" />
            <Typography textAlign={'center'}>{`name: ${details.name}`}</Typography>
          </div>
          <div className="flex">
            <AspectRatioIcon className="mx-1 text-[#042f83]" />
            <Typography textAlign={'center'}>{`total size: ${details.size} M/Sq`}</Typography>
          </div>
        </div>

        <BulletsCard title="Equipments" bullets={details.equipment.split('/')} />
      </>
    </DetailCardContainer>
  );
};

export default RoomInfoCard;
