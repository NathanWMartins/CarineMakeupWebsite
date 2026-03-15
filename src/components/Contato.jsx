import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Instagram, WhatsApp, Email } from '@mui/icons-material';

const ContactWrapper = styled(Box)(({ theme }) => ({
  padding: '120px 0',
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  overflow: 'hidden',
}));

const ContactBox = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(255, 255, 255, 0.4)',
  borderRadius: '40px',
  padding: '60px 40px',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  transition: 'transform 0.4s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const SocialLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 24px',
  borderRadius: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  textDecoration: 'none',
  color: '#2D3436',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#e2a9f1',
    color: '#fff',
    transform: 'scale(1.05)',
    '& .MuiIconButton-root': {
      color: '#fff',
    }
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#e2a9f1',
  marginRight: '12px',
  transition: 'color 0.3s ease',
}));

function Contato() {
  return (
    <ContactWrapper id="contato">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="overline" sx={{ color: '#fff', fontWeight: 600, letterSpacing: 2 }}>
            Contatos
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, color: '#2D3436', fontWeight: 700 }}>
            Vamos Conversar!
          </Typography>
          <Box sx={{ width: '60px', height: '4px', bgcolor: '#fff', mx: 'auto', mt: 2, borderRadius: 2 }} />
        </Box>

        <ContactBox>
          <Typography variant="h5" sx={{ mb: 6, color: '#636E72', fontWeight: 400 }}>
            Estou à disposição para transformar sua beleza. <br />
            Entre em contato pelos canais abaixo:
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            <SocialLink href="https://www.instagram.com/carineburniermakeup/" target="_blank">
              <StyledIconButton size="large">
                <Instagram fontSize="large" />
              </StyledIconButton>
              <Box textAlign="left" sx={{ overflow: 'hidden' }}>
                <Typography variant="caption" sx={{ display: 'block', opacity: 0.7 }}>Instagram</Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    color: '#636E72',
                    fontSize: { xs: '0.8rem', sm: '1.25rem' },
                    wordBreak: 'break-all'
                  }}
                >
                  @carineburniermakeup
                </Typography>
              </Box>
            </SocialLink>

            <SocialLink href="https://wa.me/5549998284186" target="_blank">
              <StyledIconButton size="large">
                <WhatsApp fontSize="large" />
              </StyledIconButton>
              <Box textAlign="left">
                <Typography variant="caption" sx={{ display: 'block', opacity: 0.7 }}>WhatsApp</Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    color: '#636E72',
                    fontSize: { xs: '0.8rem', sm: '1.25rem' }
                  }}
                >
                  (49) 9 9828-4186
                </Typography>
              </Box>
            </SocialLink>
          </Stack>

          <Box sx={{ mt: 8 }}>
            <Typography variant="body2" sx={{ color: '#636E72', opacity: 0.6 }}>
              © 2026 Studio Burnier. Todos os direitos reservados.
            </Typography>
          </Box>
        </ContactBox>
      </Container>
    </ContactWrapper>
  );
}

export default Contato;