import React, { useState } from 'react';
import { Box, Typography, Container, Modal, IconButton, Fade, Backdrop } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import './Testimonials.css';

const avaliacoes = [
  {
    id: 1,
    name: 'Rafaela Jung',
    text: 'Amei o atendimento. Carine fez o meu penteado e maquiagem para a minha formatura. Ficou simplesmente impecável, amei cada detalhe. Os produtos utilizados são de alta qualidade e a maquiagem durou o dia inteiro.',
    image: 'avaliacao_rafa.jpeg',
  },
  {
    id: 2,
    name: 'Beatriz Santos',
    text: 'Maquiagem impecável e atendimento super atencioso. Ela conseguiu realçar o que eu mais gosto no meu rosto.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Carla Oliveira',
    text: 'Fiz minha maquiagem de noiva com ela e não poderia ter escolhido melhor. Foi um sonho realizado!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: 'Daniela Souza',
    text: 'Trabalho incrível! Além de talentosa, a Carine é uma pessoa doce e muito profissional.',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    name: 'Fernanda Lima',
    text: 'Melhor maquiadora da região. Os produtos são de altíssima qualidade e o resultado é sempre luxuoso.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
  },
];

// Duplicate for infinite effect
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
    <Box component="section" id="depoimentos" className="testimonials-container">
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#222', mb: 2 }}>
          Avaliação Clientes
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#666', mb: 2, maxWidth: '700px', mx: 'auto' }}>
          Confira o que minhas clientes estão dizendo sobre suas experiências e transformações.
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: '#787878ff', mb: 4, maxWidth: '700px', mx: 'auto' }}>
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
  );
};

export default Avaliacoes;
