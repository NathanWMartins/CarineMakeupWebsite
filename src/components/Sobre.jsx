import React from 'react';
import { Box, Container, Typography, styled, keyframes, Button } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupsIcon from '@mui/icons-material/Groups';
import ScrollReveal from './common/ScrollReveal';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: '140px 0',
  backgroundColor: '#fff',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: '100px 0',
  },
}));


const ImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  flexShrink: 0,
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg) scale(1.02)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-15px',
    left: '-15px',
    width: '100%',
    height: '100%',
    border: `2px solid ${theme.palette.primary.main}`,
    zIndex: 0,
    borderRadius: '12px',
    transition: 'all 0.5s ease',
  },
  '&:hover::before': {
    transform: 'translate(10px, 10px)',
    borderColor: theme.palette.primary.dark,
  },
  '& img': {
    width: '100%',
    maxWidth: '380px',
    height: 'auto',
    borderRadius: '12px',
    display: 'block',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '40px',
    '& img': {
      maxWidth: '300px',
    }
  }
}));

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const Sobre = () => {
  return (
    <SectionWrapper id="sobre">

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            gap: { xs: 6, sm: 8 }
          }}
        >
          {/* Lado Esquerdo: Imagem com Tilt Effect */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <ScrollReveal direction="left">
              <ImageBox>
                <img src="/Carine.png" alt="Carine Makeup Artist" />
              </ImageBox>
            </ScrollReveal>
          </Box>

          {/* Lado Direito: Informações */}
          <Box sx={{ flex: 1.4 }}>
            <ScrollReveal direction="right">
              <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2, display: 'block', mb: 1 }}
                >
                  Conheça a Artista
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    color: '#2D3436',
                    fontWeight: 700,
                    fontSize: { xs: '2.2rem', sm: '2.5rem', md: '3.5rem' }
                  }}
                >
                  Olá, eu sou a Carine
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    color: '#636E72',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  Natural de Itá, mas residente em <a href="https://maps.app.goo.gl/dHYJQjiDohRdXZTw6" target="_blank" style={{ color: '#b376c1', cursor: "pointer", textDecoration: 'underline' }}> Concórdia</a>, Santa Catarina. Minha missão é transformar a maneira como você se vê, realçando sua luz própria através da arte da maquiagem e do penteado.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: '#636E72',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                  }}
                >
                  Especialista em produções para eventos sociais e ensaios fotográficos, ofereço um atendimento flexível: recebo você em meu espaço ou atendo no conforto da sua casa.
                </Typography>

                <Box sx={{
                  display: 'flex',
                  gap: { xs: 4, sm: 3 },
                  mt: 4,
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <WorkspacePremiumIcon sx={{ color: 'primary.main', fontSize: { xs: '2.5rem', md: '3rem' } }} />
                    <Box>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 700, fontSize: { xs: '2rem', md: '2.5rem' }, lineHeight: 1 }}>
                        <AnimatedNumber value="4" />+
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#636E72', fontWeight: 500 }}>Anos de Experiência</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      component="a"
                      href="https://wa.me/5549998284186"
                      target="_blank"
                      sx={{
                        ml: 1,
                        borderColor: '#fff',
                        bgcolor: 'primary.main',
                        color: '#fff',
                        fontSize: '1rem',
                        fontWeight: 700,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        }
                      }}
                    >
                      Vamos Conversar!!
                    </Button>
                  </Box>
                </Box>
              </Box>
            </ScrollReveal>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default Sobre;
