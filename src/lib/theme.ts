import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
  palette: {
    text: {
      primary: '#000000de',
      secondary: '#ffffff',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#ffff00',
      secondary: '#ffffff',
    },
  },
});
