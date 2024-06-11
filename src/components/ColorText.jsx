import React from 'react';
import './ColorText.css';

const ColorText = ({ backgroundColor }) => {
  const hexToRgb = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `(${r}, ${g}, ${b})`;
  };


  const rgbColor = hexToRgb(backgroundColor);

  const textColor = (hexColor) => {
    const rgb = hexToRgb(hexColor);
    const luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
    return luminance > 0.5 ? 'black' : 'white';
  };

  const textStyle = {
    color: textColor(backgroundColor)
  };

  return (
    <div className='hex_container'>
      <h1 className='colorHex text-with-border' style={textStyle} >
        BackgroundColor: {backgroundColor}
      </h1>
      <h1 className='colorRGB text-with-border' style={textStyle}>
        RGB: {rgbColor}
      </h1>
    </div>
  );
};

export default ColorText;
