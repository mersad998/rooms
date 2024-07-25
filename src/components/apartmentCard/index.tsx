import * as React from 'react';
import { Button, CardActionArea, CardActions, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import type { ApartmentInformation } from '@/app/myApartments/myApartmentTypes';

const ApartmentCard: React.FC<Partial<ApartmentInformation>> = (props) => {
  const { name, rate = 0, description, imageUrl, onCardClick, id } = props;

  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <CardActionArea onClick={() => onCardClick!(id!)}>
        <CardMedia component="img" height="140" image={imageUrl ?? 'assets/images/default-photo.png'} alt="apartment image" />
        <CardContent>
          <div className="flex justify-between">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Rating name="read-only" value={rate} readOnly />
          </div>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => onCardClick!(id!)}>
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ApartmentCard;
