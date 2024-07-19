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
          <div style={{ display: 'flex', flexBasis: '33%' }}>
            <FingerprintIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography textAlign={'center'}>{`file number: ${details.id}`}</Typography>
          </div>
          <div style={{ display: 'flex', flexBasis: '33%' }}>
            <AspectRatioIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography textAlign={'center'}>{`total size: ${details.size} M/Sq`}</Typography>
          </div>
          <div style={{ display: 'flex', flexBasis: '33%' }}>
            <StarHalfIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography textAlign={'center'}>{`rate: ${details.rate} / 5`}</Typography>
          </div>
          <div style={{ display: 'flex', flexBasis: '33%' }}>
            <AirlineSeatIndividualSuiteIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography textAlign={'center'}>{`rooms: ${details.roomNumber}`}</Typography>
          </div>
          <div style={{ display: 'flex', flexBasis: '33%' }}>
            <PaidIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography textAlign={'center'}>{`deposit: ${details.deposit}`}</Typography>
          </div>
          <div style={{ display: 'flex', flexBasis: '33%' }}>
            <CurrencyExchangeIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography textAlign={'center'}>{`rent: ${details.rent}`}</Typography>
          </div>
          <div style={{ display: 'flex', flexBasis: '33%' }}>
            <CalendarMonthIcon style={{ marginInline: 4, color: '#042f83' }} />
            <Typography
              textAlign={'center'}
            >{`posted on: ${new Date(details.createdAt).getFullYear()}/${new Date(details.createdAt).getMonth()}/${new Date(details.createdAt).getDate()}`}</Typography>
          </div>

          <div style={{ display: 'flex', flexBasis: '100%', marginTop: 16 }}>
            <DescriptionIcon style={{ marginInline: 4, color: 'gray' }} />
            <Typography textAlign={'center'}>{`description: ${details.description}`}</Typography>
          </div>
          <div style={{ display: 'flex', flexBasis: '100%' }}>
            <PinDropIcon style={{ marginInline: 4, color: '#ff1919' }} />
            <Typography textAlign={'center'}>{`location: ${details.location}`}</Typography>
          </div>
        </div>
      </>
    </DetailCardContainer>
  );
};

export default ApartmentInfoCard;
