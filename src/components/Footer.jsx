import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FooterWrapper = styled(Box)(({ theme }) => ({
  background: '#fff',
  padding: '80px 0 30px',
  borderTop: '1px solid rgba(226, 169, 241, 0.2)',
  position: 'relative',
}));

const LogoImage = styled('img')({
  maxWidth: '180px',
  marginBottom: '20px',
});

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: 'rgba(226, 169, 241, 0.1)',
  marginRight: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: theme.palette.primary.main,
    color: '#fff',
    transform: 'translateY(-3px)',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'text.secondary',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  display: 'block',
  marginBottom: '10px',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Logo and Info */}
          <Grid item xs={12} md={4}>
            <LogoImage src="/LogoCarine.png" alt="Studio Burnier Logo" />
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, maxWidth: '300px', lineHeight: 1.8 }}>
              Especialista em realçar sua beleza única através de maquiagens e penteados sofisticados para todas as ocasiões.
            </Typography>
            <Box>
              <SocialButton component="a" href="https://www.instagram.com/carineburniermakeup/" target="_blank">
                <FaInstagram size={22} />
              </SocialButton>
              <SocialButton component="a" href="https://wa.me/5549998284186" target="_blank">
                <FaWhatsapp size={22} />
              </SocialButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              Links Rápidos
            </Typography>
            <FooterLink href="#home">Início</FooterLink>
            <FooterLink href="#sobre">Sobre Mim</FooterLink>
            <FooterLink href="#servicos">Serviços</FooterLink>
            <FooterLink href="#avaliacoes">Avaliações</FooterLink>
            <FooterLink href="#contato">Contato</FooterLink>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              Atendimento
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
              <span><strong>Local:</strong> Concórdia, SC</span>
              <span><strong>Atendimento:</strong> Em Domicílio</span>
              <span><strong>Email:</strong> carineburnier@gmail.com</span>
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(226, 169, 241, 0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.8 }}>
            © {new Date().getFullYear()} Studio Burnier. Todos os direitos reservados.
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.5, mt: 1, display: 'block' }}>
            Desenvolvido com carinho para realçar sua essência.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
