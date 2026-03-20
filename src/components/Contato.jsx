import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ScrollReveal from './common/ScrollReveal';
import GlassIcons from './common/GlassIcons';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactWrapper = styled(Box)(({ theme }) => ({
  padding: '120px 0',
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  minHeight: '600px'
}));

const ContactBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  borderRadius: '40px',
  padding: '60px 20px',
  textAlign: 'center',
  maxWidth: '900px',
  margin: '0 auto',
  transition: 'transform 0.4s ease',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
  [theme.breakpoints.down('sm')]: {
    padding: '40px 10px',
  }
}));

const items = [
  { 
    icon: <FaInstagram />, 
    color: 'instagram', 
    label: 'Instagram', 
    value: '@carineburniermakeup',
    href: 'https://www.instagram.com/carineburniermakeup/' 
  },
  { 
    icon: <FaWhatsapp />, 
    color: 'whatsapp', 
    label: 'WhatsApp', 
    value: '(49) 9 9828-4186',
    href: 'https://wa.me/5549998284186' 
  },
];

function Contato() {
  return (
    <ContactWrapper id="contato">
      <Container maxWidth="lg">
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#fff', fontWeight: 600, letterSpacing: 2 }}>
              Contatos
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, color: '#2D3436', fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Vamos Conversar!
            </Typography>
            <Box sx={{ width: '60px', height: '4px', bgcolor: '#fff', mx: 'auto', mt: 2, borderRadius: 2 }} />
          </Box>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <ContactBox>
            <Typography variant="h5" sx={{ mb: 6, color: '#2D3436', fontWeight: 500, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
              Estou à disposição para transformar sua beleza. <br />
              Entre em contato agora:
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', overflow: 'visible' }}>
               <GlassIcons items={items} />
            </Box>

            <Box sx={{ mt: 10 }}>
              <Typography variant="body2" sx={{ color: '#2D3436', opacity: 0.6 }}>
                © 2026 Studio Burnier. Todos os direitos reservados.
              </Typography>
            </Box>
          </ContactBox>
        </ScrollReveal>
      </Container>
    </ContactWrapper>
  );
}

export default Contato;