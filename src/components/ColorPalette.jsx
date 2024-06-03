import React from 'react';
import { MdClose } from 'react-icons/md';

const ColorPalette = ({ colors, onColorClick, onRemoveColor }) => {
  const handleColorClick = (color) => {
    console.log('Color clicked:', color); 
    onColorClick(color);
  };

  const handleRemoveColorClick = (color) => {
    onRemoveColor(color);
  };

  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div key={index} className="color-square" style={{ backgroundColor: color }}>
          <div className="color-overlay" onClick={() => handleColorClick(color)}></div>
          <div className="remove-icon" onClick={() => handleRemoveColorClick(color)}>
            <MdClose />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
