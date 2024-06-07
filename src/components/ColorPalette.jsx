import React from 'react';
import './colorPalette.css'
import { MdClose } from 'react-icons/md';

const ColorPalette = ({ colors, onColorClick, onRemoveColor , onClearPalette, counter}) => {
  const handleColorClick = (color) => {
    console.log('Color clicked:', color); 
    onColorClick(color);
  };

  const handleRemoveColorClick = (color) => {
    onRemoveColor(color);
  };

  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div key={counter} className="color-square" style={{ backgroundColor: color }}>
          <div className="color-overlay" onClick={() => handleColorClick(color)}></div>
          <div className="remove-icon" onClick={() => handleRemoveColorClick(color)}>
            <MdClose />
          </div>
        </div>
      ))}
      <button className="clear-palette-btn" onClick={onClearPalette}>
        Clear the palette
      </button>
    </div>
  );
};

export default ColorPalette;
