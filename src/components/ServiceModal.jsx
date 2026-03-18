import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, IconButton, Fade, Backdrop, Button, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(30px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.5)',
  borderRadius: '32px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  padding: '40px 20px',
  width: '95%',
  maxWidth: '800px',
  maxHeight: '90vh',
  position: 'relative',
  outline: 'none',
  textAlign: 'center',
  overflowY: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
}));

const PriceTag = styled(Box)(({ theme }) => ({
  background: 'rgba(226, 169, 241, 0.2)',
  padding: '8px 24px',
  borderRadius: '50px',
  display: 'inline-block',
  margin: '16px 0',
  border: '1px solid rgba(226, 169, 241, 0.3)',
}));

const PricingList = styled(Stack)(({ theme }) => ({
  marginTop: '16px',
  gap: '12px',
  [theme.breakpoints.down('sm')]: {
    gap: '6px',
  },
  alignItems: 'center',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  width: '100%',
}));

const PricingItem = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.5)',
  padding: '12px 16px',
  [theme.breakpoints.down('sm')]: {
    padding: '8px 4px',
  },
  borderRadius: '16px',
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid rgba(226, 169, 241, 0.1)',
  transition: 'all 0.3s ease',
  flex: '1 1 auto',
  minWidth: '120px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '85px',
  },
  maxWidth: '220px',
  '&:hover': {
    background: 'rgba(226, 169, 241, 0.1)',
    transform: 'scale(1.02)',
  },
}));

const CarouselContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '24px',
  overflow: 'hidden',
  borderRadius: '24px',
  width: '100%',
  maxWidth: '450px',
  margin: '24px auto 0',
  aspectRatio: '4/5',
  background: 'rgba(0,0,0,0.05)',
});

const CarouselImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'opacity 0.5s ease-in-out',
});

const NavButton = styled(IconButton)({
  position: 'absolute',
  zIndex: 2,
  background: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(5px)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.9)',
  },
  color: '#000',
});

const CategoryButton = styled(Button)(({ theme, active }) => ({
  borderRadius: '12px',
  padding: '8px 20px',
  transition: 'all 0.3s ease',
  backgroundColor: active ? '#e2a9f1' : 'rgba(255, 255, 255, 0.5)',
  color: active ? '#fff' : '#2D3436',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  '&:hover': {
    backgroundColor: active ? '#b376c1' : 'rgba(255, 255, 255, 0.8)',
  },
}));

const ServiceModal = ({ open, onClose, service }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Initialize gallery based on service type
  const gallery = selectedCategory
    ? selectedCategory.gallery
    : (service?.gallery || []);

  const maxSteps = gallery.length;

  useEffect(() => {
    if (service?.categories) {
      setSelectedCategory(service.categories[0]);
    } else {
      setSelectedCategory(null);
    }
    setActiveStep(0);
  }, [service]);

  useEffect(() => {
    setActiveStep(0);
  }, [selectedCategory]);

  if (!service) return null;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: { backdropFilter: 'blur(10px)', background: 'rgba(226, 169, 241, 0.1)' }
      }}
    >
      <Fade in={open}>
        <ModalContent>
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: '#000',
              bgcolor: 'rgba(255,255,255,0.5)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.8)' }
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h3" sx={{ mb: 1, fontWeight: 800, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
            {service.title}
          </Typography>

          {service.price && (
            <PriceTag>
              <Typography variant="h6" sx={{ color: '#2D3436', fontWeight: 600, whiteSpace: 'nowrap' }}>
                {service.price}
              </Typography>
            </PriceTag>
          )}

          {service.pricing && (
            <PricingList>
              {service.pricing.map((item, index) => (
                <PricingItem key={index}>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: '#2D3436', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                    {item.label}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: '0.85rem', sm: '1.1rem' }, color: '#d447f7ff', whiteSpace: 'nowrap' }}>
                    {item.value}
                  </Typography>
                </PricingItem>
              ))}
            </PricingList>
          )}

          {/* Category selection - only for Hairstyles */}
          {service.categories && (
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ mb: 4, mt: 2, flexWrap: 'wrap', gap: 1 }}
            >
              {service.categories.map((cat) => (
                <CategoryButton
                  key={cat.id}
                  active={selectedCategory?.id === cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  variant="text"
                >
                  {cat.label}
                </CategoryButton>
              ))}
            </Stack>
          )}

          <CarouselContainer>
            {maxSteps > 1 && (
              <>
                <NavButton onClick={handleBack} sx={{ left: 16 }}>
                  <ArrowBackIosNewIcon />
                </NavButton>
                <NavButton onClick={handleNext} sx={{ right: 16 }}>
                  <ArrowForwardIosIcon />
                </NavButton>
              </>
            )}

            {maxSteps > 0 ? (
              <Fade in={true} timeout={500} key={`${selectedCategory?.id}-${activeStep}`}>
                <CarouselImage
                  src={gallery[activeStep]}
                  alt={`${service.title} item ${activeStep + 1}`}
                />
              </Fade>
            ) : (
              <Typography variant="body2" sx={{ p: 4 }}>Nenhuma imagem disponível.</Typography>
            )}

            {/* Pagination dots */}
            <Box sx={{ position: 'absolute', bottom: 16, display: 'flex', gap: 1 }}>
              {gallery.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: index === activeStep ? '#e2a9f1' : 'rgba(255,255,255,0.5)',
                    transition: '0.3s',
                  }}
                />
              ))}
            </Box>
          </CarouselContainer>
        </ModalContent>
      </Fade>
    </StyledModal>
  );
};

export default ServiceModal;
