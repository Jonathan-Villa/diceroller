import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { blue, red } from '@material-ui/core/colors';

export const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red.A400,
      '&:hover': {
        backgroundColor: red.A700,
      },
    },
  }))(Button);


  export const ColorButton2 = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[800],
      '&:hover': {
        backgroundColor: blue[900],
      },
    },
  }))(Button);