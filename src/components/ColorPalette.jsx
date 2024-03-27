import React from 'react';
import { MdClose } from 'react-icons/md';

const ColorPalette = ({ colors, onColorClick, onRemoveColor }) => {
  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div key={index} className="color-square" style={{ backgroundColor: color }}>
          {/* Set background color on click */}
          <div className="color-overlay" onClick={() => onColorClick(color)}></div>
          {/* Show remove icon only on hover */}
          <div className="remove-icon" onClick={() => onRemoveColor(color)}>
            <MdClose>
              ✖
            </MdClose>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
