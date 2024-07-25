import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  cardContainer: {
    '&:hover ': {
      color: 'rgba(0,24,96,0.7)',
      boxShadow: '0 0 5px rgba(48,125,193,1)',
      border: 'unset !important',
    },
  },
}));
