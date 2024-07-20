import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating } from '@mui/material';
import { ApartmentInformation } from '@/app/apartments/apartmentTypes';

const ApartmentCard: React.FC<Partial<ApartmentInformation>> = (props) => {
  const { name, rate = 0, description } = props;
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image="assets/images/default-photo.png" alt="green iguana" />
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        <Button size="small" color="primary">
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ApartmentCard;
