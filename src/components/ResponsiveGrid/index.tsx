import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { cloneElement, FC } from 'react';

const ResponsiveGrid: FC<any> = (props) => {
  const { list = [], component } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {list.map((value: Record<string, unknown>, index: number) => {
          return (
            <Grid key={index} sm={6} xs={12}>
              <>{cloneElement(component, { ...value })}</>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
