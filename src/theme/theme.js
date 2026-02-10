import { createTheme } from '@mui/material/styles';

/**
 * Tema customizado para Preserve - Consultoria Ambiental
 * 
 * Paleta de cores inspirada na natureza e sustentabilidade:
 * - Verde escuro: confiança e profissionalismo
 * - Verde médio: sustentabilidade e crescimento
 * - Bege/off-white: elegância e sofisticação
 */

const theme = createTheme({
  palette: {
    primary: {
      main: '#2F5D50', // Verde escuro - confiança técnica
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5FA68B', // Verde médio - sustentabilidade
      contrastText: '#ffffff',
    },
    background: {
      default: '#F5F3EE', // Bege/off-white - elegância
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
    cta: {
      main: '#3E8E7E', // Cor para botões de destaque
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Open Sans", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:900px)': {
        fontSize: '2.25rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.7,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          transition: 'all 0.3s ease',
        },
        contained: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});

export default theme;
