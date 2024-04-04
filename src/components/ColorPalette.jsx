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
          {/* Set background color on click */}
          <div className="color-overlay" onClick={() => handleColorClick(color)}></div>
          {/* Show remove icon only on hover */}
          <div className="remove-icon" onClick={() => handleRemoveColorClick(color)}>
            <MdClose />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
