import React, { type FC } from 'react';
import { Box, Paper, Typography } from '@mui/material';

import { useStyles } from './detailCardContainerStyles';

import type { DetailCardContainerProps } from './detailCardContainerTypes';

const DetailCardContainer: FC<DetailCardContainerProps> = ({ title, key, children, titleColor }) => {
  const classes = useStyles();

  return (
    <Box component={Paper} padding={1} marginTop={1} key={`${key}_${title}`}>
      <Typography
        textAlign={'center'}
        borderBottom={'1px dashed #2a81c1'}
        variant={titleColor ? 'h6' : 'body1'}
        color={titleColor}
      >
        {title}
      </Typography>

      <div className={classes.childrenContainer}>{children}</div>
    </Box>
  );
};

export default DetailCardContainer;
