import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ServiceModal from './ServiceModal';
import ScrollReveal from './common/ScrollReveal';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: '140px 0',
  backgroundColor: '#fafaff',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '32px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid rgba(226, 169, 241, 0.15)',
  background: '#fff',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: '0 25px 50px rgba(226, 169, 241, 0.15)',
    borderColor: '#e2a9f1',
    '& .card-media': {
      transform: 'scale(1.05)',
    }
  },
}));

const GlassBase = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.3)',
  padding: '32px',
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}));

const services = [
  {
    title: 'Maquiagens',
    description: 'Seu olhar com técnicas exclusivas para eventos, festas e ocasiões especiais. Realce sua beleza com sofisticação.',
    image: '/makeup/makeup_rafaela2.jpeg',
    gallery: ['/avaliacoes/avaliacao_bruna.jpeg', '/makeup/makeup_rafaela.png'],
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
    image: '/cabelo/cabelo_coque.jpeg',
    categories: [
      {
        id: 'coque',
        label: 'Coque',
        gallery: ['/cabelo/cabelo_coque.jpeg'],
      },
      {
        id: 'rabo',
        label: 'Rabo',
        gallery: ['/cabelo/cabelo_rabo.jpeg'],
      },
      {
        id: 'semipreso',
        label: 'Semipreso',
        gallery: ['/cabelo/cabelo_semipreso.jpeg'],
      }
    ]
  },
  {
    title: 'Curso de Auto Maquiagem',
    description: 'Curso personalizado para você dominar a arte da maquiagem no seu dia a dia.',
    price: '',
    image: '/makeup/makeup_2.png',
    gallery: ['/makeup/makeup_2.png']
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
              Meus Serviços
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, color: '#2D3436' }}>
              Elevando sua Autoestima
            </Typography>
            <Box sx={{ width: '60px', height: '4px', bgcolor: 'primary.main', mx: 'auto', mt: 2, borderRadius: 2 }} />
          </Box>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
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
                    className="card-media"
                    sx={{ transition: '0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  />
                  <GlassBase>
                    <Typography variant="h4" sx={{ mb: 0.5, fontSize: '1.75rem', fontWeight: 800 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth sx={{ py: 1.5 }}>
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
