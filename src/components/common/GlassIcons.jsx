import React from 'react';
import './GlassIcons.css';

const gradientMapping = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
  instagram: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
  whatsapp: 'linear-gradient(45deg, #25d366, #128c7e)'
};

const GlassIcons = ({ items, className }) => {
  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => {
        const hoverColor = gradientMapping[item.color] || item.color;
        
        return (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-btn ${item.customClass || ''}`}
            aria-label={item.label}
            style={{ '--hover-bg': hoverColor }}
          >
            <div className="icon-btn__stack">
              <span className="icon-btn__back"></span>
              <span className="icon-btn__front">
                <span className="icon-btn__icon" aria-hidden="true">
                  {React.cloneElement(item.icon, { size: '1.5em' })}
                </span>
              </span>
            </div>
            <div className="icon-btn__info">
              <span className="icon-btn__value">{item.value}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default GlassIcons;
