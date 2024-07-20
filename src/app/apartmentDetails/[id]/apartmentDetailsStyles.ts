import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flex: 1,
    padding: 8,
    width: '100%',
  },
  imagesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  cardsContainer: {
    flex: 2,
    padding: 8,
  },
  addCard: {
    '&:hover ': {
      color: 'rgba(0,24,96,0.7)',
      boxShadow: '0 0 5px rgba(48,125,193,1)',
      border: 'unset !important',
    },
  },
}));
