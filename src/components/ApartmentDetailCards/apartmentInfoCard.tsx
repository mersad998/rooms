import { type FC } from 'react';

import { Typography } from '@mui/material';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DetailCardContainer } from '../detailCardContainer';
import { ApartmentInformation } from '@/app/apartments/apartmentTypes';
import PaidIcon from '@mui/icons-material/Paid';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PinDropIcon from '@mui/icons-material/PinDrop';
import DescriptionIcon from '@mui/icons-material/Description';

const ApartmentInfoCard: FC<{ details: ApartmentInformation }> = ({ details }) => {
  return (
    <DetailCardContainer title={`${details.name}`} titleColor="#042f83">
      <>
        <div className="flex flex-wrap justify-between mt-2 p-1 w-full">
          <div className="flex basis-1/3">
            <FingerprintIcon className="mx-1 text-[#042f83]" />
            <Typography textAlign={'center'}>{`file number: ${String(details.id).slice(0, 8)}`}</Typography>
          </div>
          <div className="flex basis-1/3">
            <AspectRatioIcon className="mx-1 text-[#042f83]" />
            <Typography textAlign={'center'}>{`total size: ${details.size} M/Sq`}</Typography>
          </div>
          <div className="flex basis-1/3">
            <StarHalfIcon className="mx-1 text-[#042f83]" />
            <Typography textAlign={'center'}>{`rate: ${details.rate} / 5`}</Typography>
          </div>
          <div className="flex basis-1/3">
            <AirlineSeatIndividualSuiteIcon className="mx-1 text-[#042f83]" />
            <Typography textAlign={'center'}>{`rooms: ${details.roomNumber}`}</Typography>
          </div>
          <div className="flex basis-1/3">
            <PaidIcon className="mx-1 text-[#042f83]" />
            <Typography textAlign={'center'}>{`deposit: ${details.deposit}`}</Typography>
          </div>
          <div className="flex basis-1/3">
            <CurrencyExchangeIcon className="mx-1 text-[#042f83]" />
            <Typography textAlign={'center'}>{`rent: ${details.rent}`}</Typography>
          </div>
          <div className="flex basis-1/3">
            <CalendarMonthIcon className="mx-1 text-[#042f83]" />
            <Typography
              textAlign={'center'}
            >{`posted on: ${new Date(details.createdAt).getFullYear()}/${new Date(details.createdAt).getMonth()}/${new Date(details.createdAt).getDate()}`}</Typography>
          </div>

          <div className="flex basis-full mt-4">
            <DescriptionIcon className="mx-1 text-gray-500" />
            <Typography textAlign={'center'}>{`description: ${details.description}`}</Typography>
          </div>
          <div className="flex basis-full">
            <PinDropIcon className="mx-1 text-[#ff1919]" />
            <Typography textAlign={'center'}>{`location: ${details.location}`}</Typography>
          </div>
        </div>
      </>
    </DetailCardContainer>
  );
};

export default ApartmentInfoCard;
