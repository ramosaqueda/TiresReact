 import {  createTheme } from '@mui/material/styles';
 
export const Theme = createTheme({
    palette: {
        primary: {
          main: '#224A96',
        },
        secondary: {
          main: '#E7B83A',
        },
        error: {
            main: '#BE2E2F',
        },
        background: {
          default: '#fff',
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
  });