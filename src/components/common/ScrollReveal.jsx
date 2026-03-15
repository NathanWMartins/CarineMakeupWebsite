import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const RevealBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isVisible' && prop !== 'direction',
})(({ isVisible, direction }) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible 
    ? 'translate(0, 0)' 
    : direction === 'up' 
      ? 'translateY(40px)' 
      : direction === 'down'
        ? 'translateY(-40px)'
        : direction === 'left'
          ? 'translateX(40px)'
          : 'translateX(-40px)',
  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
}));

const ScrollReveal = ({ children, direction = 'up', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <RevealBox 
      ref={ref} 
      isVisible={isVisible} 
      direction={direction}
    >
      {children}
    </RevealBox>
  );
};

export default ScrollReveal;
