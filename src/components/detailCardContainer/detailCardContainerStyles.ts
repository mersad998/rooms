import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => ({
  childrenContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  box: {
    position: 'relative',
    '&:hover $editIcon': {
      display: 'block',
      opacity: 1,
    },
    '&:hover $deleteIcon': {
      display: 'block',
      opacity: 1,
    },
  },
  editIcon: {
    position: 'absolute',
    right: 10,
    display: 'block',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
  deleteIcon: {
    position: 'absolute',
    right: 40,
    display: 'block',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
}));
