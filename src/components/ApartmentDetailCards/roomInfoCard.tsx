import { type FC } from 'react';

import { Typography } from '@mui/material';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { DetailCardContainer } from '../detailCardContainer';
import { RoomInformation } from '@/app/apartmentDetails/[id]/apartmentDetailsTypes';
import BulletsCard from './bulletsCard';

const RoomInfoCard: FC<{
  details: RoomInformation;
  roomNumber: number;
  onEditClick: (apartmentId?: number) => void;
  onDeleteClick: (apartmentId?: number) => void;
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
