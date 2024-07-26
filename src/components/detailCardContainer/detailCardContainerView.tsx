import React, { type FC } from 'react';
import { Box, Paper, Tooltip, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { useStyles } from './detailCardContainerStyles';

import type { DetailCardContainerProps } from './detailCardContainerTypes';

const DetailCardContainer: FC<DetailCardContainerProps> = ({
  id,
  title,
  key,
  children,
  titleColor,
  onEditClick,
  onDeleteClick,
}) => {
  const classes = useStyles();

  return (
    <Box component={Paper} padding={1} marginTop={1} key={`${key}_${title}`} className={classes.box}>
      <Typography
        textAlign={'center'}
        borderBottom={'1px dashed #2a81c1'}
        variant={titleColor ? 'h6' : 'body1'}
        color={titleColor}
        position="relative"
      >
        {onEditClick && (
          <Tooltip title="It will implement later">
            <EditIcon className={classes.editIcon} onClick={() => onEditClick(id)} />
          </Tooltip>
        )}
        {onDeleteClick && <DeleteIcon className={classes.deleteIcon} onClick={() => onDeleteClick(id)} />}
        {title}
      </Typography>

      <div className={classes.childrenContainer}>{children}</div>
    </Box>
  );
};

export default DetailCardContainer;
