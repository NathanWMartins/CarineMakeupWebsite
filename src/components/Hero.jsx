import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: '#e2a9f1',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '80px',

  [theme.breakpoints.down('md')]: {
    minHeight: '80vh',
    paddingTop: '120px',
    paddingBottom: '40px'
  }
}));

const BackgroundImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '70%',
  height: '100%',
  backgroundImage: 'url("/Carine.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,

  [theme.breakpoints.down('md')]: {
    width: '100%',
    backgroundPosition: 'top',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(to right, rgba(226, 169, 241, 0.9) 20%, rgba(226, 169, 241, 0.2) 100%)',

    [theme.breakpoints.down('md')]: {
      background:
        'linear-gradient(to right, rgba(226,169,241,0.95) 40%, rgba(226,169,241,0.4) 100%)',
    },
  },
}));

const HeroContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const Hero = () => {
  return (
    <HeroSection id="home">
      <BackgroundImage />
      <HeroContent maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              sx={{ color: '#fff', fontWeight: 600, letterSpacing: 2 }}
            >
              Arte em Maquiagem
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                color: '#2D3436',
                fontSize: { xs: '2.5rem', md: '4rem' }
              }}
            >
              Realce sua <br />
              <span style={{ color: '#fdfdfdff' }}>Beleza Única</span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                color: '#636E72',
                maxWidth: '500px',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.5rem' }
              }}
            >
              Especialista em maquiagem social e artística com foco em tons suaves e elegância.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary" size="large" href="#servicos">
                Nossos Serviços
              </Button>
            </Box>
          </Grid>
        </Grid>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
