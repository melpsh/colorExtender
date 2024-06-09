import React, { useState } from 'react';
import './colorPalette.css'
import { MdClose } from 'react-icons/md';

const ColorPalette = ({ colors, onColorClick, onRemoveColor , onClearPalette, counter}) => {
  const [hoveredColor, setHoveredColor] = useState(null);

  const handleColorClick = (color) => {
    console.log('Color clicked:', color); 
    onColorClick(color);
  };

  const handleRemoveColorClick = (color) => {
    onRemoveColor(color);
  };

  const handleMouseEnter = (color) => {
    // setHoveredColor(color);
    console.log("mouse enter is working");
  };

  const handleMouseLeave = () => {
    setHoveredColor(null);
  };

  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div 
        key={counter} 
        className="color-square" 
        style={{ backgroundColor: color }}
        onMouseEnter={()=> handleMouseEnter(color)}
        onMouseLeave={handleMouseLeave}
        >
          <div className="color-overlay" onClick={() => handleColorClick(color)}></div>
          <div className="remove-icon" onClick={() => handleRemoveColorClick(color)}>
            <MdClose />
          </div>
          {hoveredColor === color && alert('hovereddddddd')};
        </div>
      ))}
      <button className="clear-palette-btn" onClick={onClearPalette}>
        Clear the palette
      </button>
    </div>
  );
};

export default ColorPalette;
