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

  // Determine text color based on background color darkness/lightness
  const textColor = (hexColor) => {
    // Convert hex to RGB
    const rgb = hexToRgb(hexColor);
    // Calculate luminance
    const luminance = (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
    // Return dark or light text color based on luminance
    return luminance > 0.5 ? '#000000' : '#beige';
  };

  // Style for text color
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
