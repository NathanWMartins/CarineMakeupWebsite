import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f0cdf7',
      main: '#e2a9f1',  // Brand Color
      dark: '#b376c1',
      contrastText: '#000', // Black text for better readability on light lilac
    },
    secondary: {
      light: '#ffffff',
      main: '#f8f0ff',
      dark: '#d1b3e0',
      contrastText: '#000',
    },
    background: {
      default: '#FAFAFF',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
        },
      },
    },
  },
});

export default theme;
