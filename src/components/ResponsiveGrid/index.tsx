import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { cloneElement, FC, ReactElement } from 'react';

const ResponsiveGrid: FC<{ list: Record<string, unknown>[]; component: ReactElement }> = (props) => {
  const { list = [], component } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {list.map((componentProps: Record<string, unknown>, index: number) => {
          return (
            <Grid key={index} sm={6} xs={12}>
              <>{cloneElement(component, { ...componentProps })}</>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
