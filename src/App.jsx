import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import LandingPage from './LandingPage';

/**
 * Componente App Principal
 * 
 * Configura o ThemeProvider do MUI com o tema customizado
 * e renderiza a landing page
 */

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
