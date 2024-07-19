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
}));
