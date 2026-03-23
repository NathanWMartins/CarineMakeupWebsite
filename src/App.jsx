import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Avaliacoes from './components/Avaliacoes';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header />
        <main>
          <Hero />
          <Sobre />
          <Services />
          <Avaliacoes />
          <Contato />
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
