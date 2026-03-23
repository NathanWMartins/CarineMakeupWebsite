import React, { useState } from 'react';
import { Box, Typography, Container, Modal, IconButton, Fade, Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import '../css/Testimonials.css';
import styled from '@emotion/styled';
import ScrollReveal from './common/ScrollReveal';

const avaliacoes = [
  {
    id: 1,
    name: 'Rafaela Jung',
    text: 'Amei o atendimento. Carine fez o meu penteado e maquiagem para a minha formatura. Ficou simplesmente impecável, amei cada detalhe. Os produtos utilizados são de alta qualidade e a maquiagem durou o dia inteiro.',
    image: 'avaliacoes/avaliacao_rafa.jpeg',
  },
  {
    id: 2,
    name: 'Bruna Bruckmann',
    text: 'Amei a maquiagem e o cabelo, ficaram super lindos. O cabelo durou muito, assim como a maquiagem, passei o dia toda com ela, não transferiu e não borrou. Seu atendimento foi ótimo, incrível pessoa e profissional.',
    image: 'avaliacoes/avaliacao_bruna.jpeg',
  },
  {
    id: 3,
    name: 'Rafaela Jung',
    text: 'Amei o atendimento. Carine fez o meu penteado e maquiagem para a minha formatura. Ficou simplesmente impecável, amei cada detalhe. Os produtos utilizados são de alta qualidade e a maquiagem durou o dia inteiro.',
    image: 'avaliacoes/avaliacao_rafa.jpeg',
  },
  {
    id: 4,
    name: 'Bruna Bruckmann',
    text: 'Amei a maquiagem e o cabelo, ficaram super lindos. O cabelo durou muito, assim como a maquiagem, passei o dia toda com ela, não transferiu e não borrou. Seu atendimento foi ótimo, incrível pessoa e profissional.',
    image: 'avaliacoes/avaliacao_bruna.jpeg',
  },
];

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: '140px 0',
  backgroundColor: '#fff',
}));

const infiniteTestimonials = [...avaliacoes, ...avaliacoes];

const Avaliacoes = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (item) => {
    setSelected(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SectionWrapper id="avaliacoes">
      <Box component="section" id="depoimentos" className="testimonials-container">
        <ScrollReveal>
          <Container maxWidth="lg" sx={{ mb: 8 }}>
            <Typography variant="overline" align="center" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 3, display: 'block', mb: 1 }}>
              DEPOIMENTOS
            </Typography>
            <Typography variant="h2" align="center" sx={{ mb: 2 }}>
              Avaliação de Clientes
            </Typography>
            <Typography variant="body1" align="center" sx={{ color: 'text.secondary', mb: 1, maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
              Confira o que minhas clientes estão dizendo sobre suas experiências e transformações.
            </Typography>
            <Typography variant="body2" align="center" sx={{ color: 'primary.main', fontWeight: 600, mb: 4, maxWidth: '700px', mx: 'auto' }}>
              Clique nas avaliações e veja os resultados!
            </Typography>
          </Container>

          <Box className="carousel-track">
            {infiniteTestimonials.map((item, index) => (
              <Box
                key={`${item.id}-${index}`}
                className="testimonial-card"
                onClick={() => handleOpen(item)}
              >
                <Box>
                  <FormatQuoteIcon className="quote-icon" />
                  <Typography className="testimonial-text">
                    "{item.text}"
                  </Typography>
                </Box>
                <Typography className="testimonial-author">
                  — {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </ScrollReveal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
              sx: { background: 'rgba(0, 0, 0, 0.4)' }
            },
          }}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}
        >
          <Fade in={open}>
            <Box sx={{ position: 'relative', maxWidth: '500px', width: '100%', outline: 'none' }}>
              <Box className="glass-modal modal-content">
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', right: 15, top: 15, color: '#222' }}
                >
                  <CloseIcon />
                </IconButton>

                {selected && (
                  <>
                    <img src={selected.image} alt={selected.name} className="client-photo-large" />
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      {selected.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#444', fontStyle: 'italic' }}>
                      "{selected.text}"
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </Fade>
        </Modal>
      </Box>
    </SectionWrapper>
  );
};

export default Avaliacoes;
