import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ServiceModal from './ServiceModal';
import ScrollReveal from './common/ScrollReveal';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: '#fdfbff',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.4s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid rgba(226, 169, 241, 0.2)',
  background: '#fff',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(226, 169, 241, 0.2)',
    borderColor: '#e2a9f1',
  },
}));

const GlassBase = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.3)',
  padding: '24px',
  marginTop: 'auto',
}));

const services = [
  {
    title: 'Maquiagens',
    description: 'Seu olhar com técnicas exclusivas para eventos, festas e ocasiões especiais. Realce sua beleza com sofisticação.',
    image: '/avaliacoes/avaliacao_bruna.jpeg',
    gallery: ['/avaliacoes/avaliacao_bruna.jpeg', '/makeup_2.png'],
    pricing: [
      { label: 'Express', value: 'R$ 100,00' },
      { label: 'Social', value: 'R$ 150,00' },
      { label: 'Blindada', value: 'R$ 190,00' }
    ]
  },
  {
    title: 'Penteados Exclusivos',
    description: 'Do clássico ao moderno, o penteado perfeito para emoldurar seu rosto e completar seu visual com elegância e durabilidade.',
    price: 'R$ 150,00',
    image: '/cabelo_coque.jpeg',
    categories: [
      {
        id: 'coque',
        label: 'Coque',
        gallery: ['/cabelo_coque.jpeg'],
      },
      {
        id: 'rabo',
        label: 'Rabo',
        gallery: ['/cabelo_rabo.jpeg'],
      },
      {
        id: 'semipreso',
        label: 'Semipreso',
        gallery: ['/cabelo_semipreso.jpeg'],
      }
    ]
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <SectionWrapper id="servicos">
      <Container maxWidth="lg">
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2 }}>
              Meu Serviço
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, color: '#2D3436' }}>
              Elevando sua Autoestima
            </Typography>
            <Box sx={{ width: '60px', height: '4px', bgcolor: 'primary.main', mx: 'auto', mt: 2, borderRadius: 2 }} />
          </Box>
        </ScrollReveal>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 4,
            justifyContent: 'center'
          }}
        >
          {services.map((service, index) => (
            <Box
              sx={{ flex: 1, maxWidth: { xs: '100%', sm: '500px' } }}
              key={index}
              onClick={() => handleOpenModal(service)}
            >
              <ScrollReveal delay={index * 200}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="300"
                    image={service.image}
                    alt={service.title}
                    sx={{ transition: '0.4s ease' }}
                  />
                  <GlassBase>
                    <Typography variant="h4" sx={{ mb: 1, fontSize: '1.75rem', fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#636E72', mb: 3, lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                    <Button variant="outlined" color="primary">
                      Ver Galeria
                    </Button>
                  </GlassBase>
                </StyledCard>
              </ScrollReveal>
            </Box>
          ))}
        </Box>

        <ServiceModal
          open={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      </Container>
    </SectionWrapper>
  );
};

export default Services;
