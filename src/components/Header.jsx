import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  transition: theme.transitions.create(['all'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.standard,
  }),
  background: scrolled ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
  backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
  boxShadow: scrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : 'none',
  color: '#000',
  paddingTop: scrolled ? '5px' : '20px',
  paddingBottom: scrolled ? '5px' : '0px',
  width: scrolled ? '90%' : '100%',
  maxWidth: scrolled ? '1200px' : '100%',
  left: '50% !important',
  right: 'auto !important',
  transform: 'translateX(-50%)',
  borderRadius: scrolled ? '24px' : '0px',
  marginTop: scrolled ? '20px' : '0px',
  border: scrolled ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
  overflow: 'hidden',
  '&::before': scrolled ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
    zIndex: 2,
  } : {},
  '&::after': scrolled ? {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    animation: 'shimmer 5s infinite linear',
  } : {},
  '@keyframes shimmer': {
    '0%': { left: '-100%' },
    '100%': { left: '100%' },
  },
}));

const NavButton = styled(Button)(({ theme, scrolled }) => ({
  color: '#000',
  margin: '0 10px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
}));

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isContactSection, setIsContactSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContactSection(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '-100px 0px 0px 0px'
      }
    );

    const contactSection = document.getElementById('contato');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, []);

  return (
    <StyledAppBar position="fixed" scrolled={scrolled}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <img src="/LogoCarine.png" alt="Logo" width={160} height={60} />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <NavButton scrolled={scrolled} component="a" href="#home">Home</NavButton>
            <NavButton scrolled={scrolled} component="a" href="#servicos">Serviços</NavButton>
            <NavButton scrolled={scrolled} component="a" href="#contato">Contato</NavButton>
          </Box>
          <Button
            variant={(scrolled || isContactSection) ? "contained" : "outlined"}
            color="primary"
            component="a"
            href="https://wa.me/5549998284186"
            target="_blank"
            sx={{
              ml: 1,
              borderColor: scrolled ? 'transparent' : (isContactSection ? '#fff' : '#000'),
              bgcolor: isContactSection ? '#fff !important' : (scrolled ? 'primary.main' : 'transparent'),
              color: isContactSection ? 'primary.main !important' : '#000',
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              padding: { xs: '6px 12px', sm: '10px 24px' },
              fontWeight: 700,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: isContactSection ? '#fff' : '#000',
                backgroundColor: isContactSection ? 'rgba(255,255,255,0.9) !important' : 'rgba(0,0,0,0.05)'
              }
            }}
          >
            Agendar
          </Button>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
