import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#f5d9fa',
      main: '#e2a9f1',  // Brand Color
      dark: '#b376c1',
      contrastText: '#fff', // White text for better contrast on main/dark
    },
    secondary: {
      light: '#ffffff',
      main: '#faf5ff',
      dark: '#e0cceb',
      contrastText: '#444',
    },
    background: {
      default: '#fafaff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Outfit", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      color: '#1a1a1a',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.8rem',
      letterSpacing: '-0.01em',
      color: '#1a1a1a',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#1a1a1a',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          webkitFontSmoothing: 'antialiased',
          mozOsxFontSmoothing: 'grayscale',
        },
        body: {
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px', // Pill shape
          padding: '12px 28px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(226, 169, 241, 0.3)',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #e2a9f1 0%, #b376c1 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #b376c1 0%, #e2a9f1 100%)',
          },
        },
      },
    },
  },
});

export default theme;
