import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { cloneElement, FC } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ResponsiveGrid: FC<any> = (props) => {
  const { list = [], component } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {list.map((value: Record<string, unknown>, index: number) => {
          return (
            <Grid key={index} sm={6} xs={12}>
              <Item>{cloneElement(component, { ...value })}</Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
