// ColorText.js
import React from 'react';
import './ColorText.css';

const ColorText = ({ backgroundColor }) => {
  // Convert hex to RGB
  const hexToRgb = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Format RGB
  const rgbColor = hexToRgb(backgroundColor);

  return (
    <div className='hex_container'>
        <h1 className='colorHex'>
            BackgroundColor: {backgroundColor}
        </h1>
        <h1 className='colorRGB'>
            RGB: {rgbColor}
        </h1>
    </div>
  );
};

export default ColorText;
