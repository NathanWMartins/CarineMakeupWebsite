import React, { useState } from 'react';
import { Modal, Box, Typography, IconButton, Fade, Backdrop } from '@mui/material';
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
  padding: '40px 20px', // More horizontal breathing room
  width: '90%',
  maxWidth: '700px', // Slightly smaller modal
  maxHeight: '90vh',
  position: 'relative',
  outline: 'none',
  textAlign: 'center',
  overflow: 'hidden',
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
  maxWidth: '600px', // Smaller carousel area
  margin: '24px auto 0',
  aspectRatio: '16/9',
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

const ServiceModal = ({ open, onClose, service }) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!service) return null;

  const maxSteps = service.gallery.length;

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
          <Typography variant="body1" sx={{ color: '#444', mx: 'auto', maxWidth: '500px' }}>
            Arraste ou use as setas para ver nossa galeria.
          </Typography>

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

            <Fade in={true} timeout={500} key={activeStep}>
              <CarouselImage
                src={service.gallery[activeStep]}
                alt={`${service.title} item ${activeStep + 1}`}
              />
            </Fade>

            {/* Pagination dots */}
            <Box sx={{ position: 'absolute', bottom: 16, display: 'flex', gap: 1 }}>
              {service.gallery.map((_, index) => (
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
