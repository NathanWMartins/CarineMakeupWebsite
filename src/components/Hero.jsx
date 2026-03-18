import styled from '@emotion/styled';
import ScrollReveal from './common/ScrollReveal';
import { Box, Container, Grid, Typography } from '@mui/material';

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
    height: '80vh',
    paddingTop: '100px',
    paddingBottom: '20px'
  }
}));

const BackgroundImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '60%',
  height: '100%',
  backgroundImage: 'url("/Carine.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,

  [theme.breakpoints.down('md')]: {
    width: '120%',
    height: '100%',
    backgroundPosition: 'bottom',
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
        <ScrollReveal>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="overline"
                sx={{ color: '#fff', fontWeight: 600, letterSpacing: 2 }}
              >
                Arte em Maquiagem e Penteado
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
                Especialista em maquiagem e penteado, trazendo arte e sofisticação para seu visual.
              </Typography>
            </Grid>
          </Grid>
        </ScrollReveal>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
